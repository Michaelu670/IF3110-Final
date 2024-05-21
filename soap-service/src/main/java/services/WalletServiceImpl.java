package services;

import com.sun.net.httpserver.HttpExchange;
import models.Report;
import models.ReportMail;
import models.Wallet;
import repositories.ReportMailRepository;
import repositories.ReportRepository;
import repositories.WalletRepository;

import javax.annotation.Resource;
import javax.jws.HandlerChain;
import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.jws.soap.SOAPMessageHandlers;
import javax.servlet.http.HttpServletRequest;
import javax.xml.ws.Provider;
import javax.xml.ws.WebServiceContext;
import javax.xml.ws.WebServiceProvider;
import javax.xml.ws.handler.MessageContext;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@WebService(endpointInterface = "services.WalletService")
@HandlerChain(file = "/handlers/handlers.xml")
public class WalletServiceImpl implements WalletService {
    @Resource
    private WebServiceContext context;
    @Override
    @WebMethod
    public String getSecret() {
        return "this is a secret string";
    }

    @Override
    @WebMethod
    public boolean transferBalance(String senderUserID, String targetUserID, long amount) {
        Wallet senderWallet = WalletRepository.getInstance().getWallet(senderUserID);
        Wallet targetWallet = WalletRepository.getInstance().getWallet(targetUserID);
        if (senderWallet.getBalance() < amount) {
            return false;
        }
        senderWallet.takeBalance(amount);
        targetWallet.addBalance(amount);

        List<Wallet> wallets = new ArrayList<>();
        wallets.add(senderWallet);
        wallets.add(targetWallet);

        return WalletRepository.getInstance().updateMultipleWallet(wallets);
    }

    @Override
    @WebMethod
    public long checkBalance(String userID) {
        try {
            return WalletRepository.getInstance().getWallet(userID).getBalance();
        } catch (Exception e) {
            return -1;
        }
    }

    @Override
    public boolean topUp(String userID, long amount) {
        Wallet wallet = WalletRepository.getInstance().getWallet(userID);
        if (wallet == null) {
            return false;
        }
        return wallet.addBalanceAndCommit(amount);
    }

    @Override
    @WebMethod
    public boolean createReport(String userID, String description) {
        return ReportRepository.getInstance().createNewReport(new Report(userID, description));
    }

    @Override
    @WebMethod
    public boolean sendMail(String recipientUsername, String reporterEmail, long amount, String transactionTime, int transactionID) {
        ReportMail mail = new ReportMail(recipientUsername, reporterEmail, amount, Timestamp.valueOf(transactionTime), transactionID);
        boolean success = ReportMailRepository.getInstance().logReport(mail);
        if (success) {
            success = mail.sendEmail();
        }
        return success;
    }

}

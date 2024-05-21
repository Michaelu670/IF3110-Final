
package services;

import javax.jws.WebMethod;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.ws.Action;
import javax.xml.ws.RequestWrapper;
import javax.xml.ws.ResponseWrapper;
import java.sql.Timestamp;


@WebService(name = "WalletService", targetNamespace = "http://services/")
public interface WalletService {

    @WebMethod
    public String getSecret();

    @WebMethod
    public boolean transferBalance(String senderUserID, String targetUserID, long amount);

    @WebMethod
    public long checkBalance(String userID);

    @WebMethod
    public boolean topUp(String userID, long amount);

    @WebMethod
    public boolean createReport(String userID, String description);

    @WebMethod
    public boolean sendMail(String recipientUsername, String reporterEmail, long amount, String transactionTime, int transactionID);

}

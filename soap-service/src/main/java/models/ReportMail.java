package models;

import utils.Emailer;

import java.security.SecureRandom;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Time;
import java.sql.Timestamp;
import java.text.Format;

public class ReportMail implements Model{
    private String token;
    private Timestamp expiry;
    private String recipientUsername;
    private String reporterEmail;
    private long amount;
    private Timestamp transactionTime;
    private int transactionID;
    private final static String descriptionFormat =
            "I don't remember doing transaction with %s at %s. " +
                    "Here is the transaction id: %d";
    private final static String urlFormat =
            System.getenv("SPA_URL") +
            "/report?token=%s&desc=%s&transactionID=%s";
    private final static String emailHeaderFormat =
            "IWalet Activity Notification";
    private final static String emailBodyFormat =
            "You have sent Rp.%d to %s at %s\n" +
                    "<br>" +
                    "<br>" +
                    "If this is not you, <a href=\"%s\">report this activity</a>";

    private final static int validTimeMilli = 1000 * 60 * 5; // 5 minutes
    private final static int tokenLength = 100;
    private final static char[] acceptedChars = new char[] {'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
            'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
            'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'};


    public ReportMail(String recipientUsername, String reporterEmail, long amount, Timestamp transactionTime, int transactionID) {
        SecureRandom rand = new SecureRandom();
        StringBuilder tokenBuilder = new StringBuilder();

        for (int i = 0; i < tokenLength; i++) {
            tokenBuilder.append(acceptedChars[rand.nextInt(acceptedChars.length)]);
        }

        this.token = tokenBuilder.toString();
        this.expiry = new Timestamp(System.currentTimeMillis() + validTimeMilli);
        this.recipientUsername = recipientUsername;
        this.reporterEmail = reporterEmail;
        this.amount = amount;
        this.transactionTime = transactionTime;
        this.transactionID = transactionID;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Timestamp getExpiry() {
        return expiry;
    }

    public void setExpiry(Timestamp expiry) {
        this.expiry = expiry;
    }

    public String getRecipientUsername() {
        return recipientUsername;
    }

    public void setRecipientUsername(String recipientUsername) {
        this.recipientUsername = recipientUsername;
    }

    public String getReporterEmail() {
        return reporterEmail;
    }

    public void setReporterEmail(String reporterEmail) {
        this.reporterEmail = reporterEmail;
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }

    public Timestamp getTransactionTime() {
        return transactionTime;
    }

    public void setTransactionTime(Timestamp transactionTime) {
        this.transactionTime = transactionTime;
    }

    public int getTransactionID() {
        return transactionID;
    }

    public void setTransactionID(int transactionID) {
        this.transactionID = transactionID;
    }

    @Override
    public void setAttributes(ResultSet resultSet) throws SQLException {

    }

    public boolean sendEmail() {
        String description = String.format(descriptionFormat, recipientUsername, transactionTime.toString(), transactionID);
        String url = String.format(urlFormat, token, description, transactionID);
        String emailHeader = String.format(emailHeaderFormat);
        String emailBody = String.format(emailBodyFormat, amount, recipientUsername, transactionTime, url);


        Emailer emailer = new Emailer();
        return emailer.sendNotification("IWalet@Rest.api",
                reporterEmail,
                emailHeader,
                emailBody);
    }
}

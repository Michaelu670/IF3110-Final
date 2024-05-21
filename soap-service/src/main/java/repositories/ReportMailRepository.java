package repositories;

import models.ReportMail;

import java.sql.PreparedStatement;

public class ReportMailRepository extends Repository {
    private static ReportMailRepository instance;
    private ReportMailRepository() {
        super();
    }
    public static ReportMailRepository getInstance() {
        if (instance == null) {
            instance = new ReportMailRepository();
        }
        return instance;
    }

    public boolean logReport(ReportMail mail) {
        try {
            PreparedStatement stmt = conn.prepareStatement(
                    "INSERT INTO report_mail (token, expiry, recipient_username, reporter_email, amount, transaction_time, transaction_id) " +
                            "VALUES (?, ?, ?, ?, ?, ?, ?)"
            );
            stmt.setString(1, mail.getToken());
            stmt.setTimestamp(2, mail.getExpiry());
            stmt.setString(3, mail.getRecipientUsername());
            stmt.setString(4, mail.getReporterEmail());
            stmt.setLong(5, mail.getAmount());
            stmt.setTimestamp(6, mail.getTransactionTime());
            stmt.setInt(7, mail.getTransactionID());
            stmt.executeUpdate();
        } catch (Exception e) {
            return false;
        }
        return true;
    }
}

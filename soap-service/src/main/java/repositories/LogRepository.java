package repositories;

import models.Log;

import java.sql.PreparedStatement;

public class LogRepository extends Repository {
    private static LogRepository instance;
    private LogRepository() {
        super();
    }
    public static LogRepository getInstance() {
        if (instance == null) {
            instance = new LogRepository();
        }
        return instance;
    }

    public void insertLog(Log log) {
        try {
            PreparedStatement stmt = conn.prepareStatement(
                    "INSERT INTO log (ip, method_called, requester, endpoint, parameters) " +
                            "VALUES (?, ?, ?, ?, ?)");
            stmt.setString(1, log.getIp());
            stmt.setString(2, log.getMethodCalled());
            stmt.setString(3, log.getRequester());
            stmt.setString(4, log.getEndpoint());
            stmt.setString(5, log.getParameters());
            stmt.executeUpdate();
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }
}

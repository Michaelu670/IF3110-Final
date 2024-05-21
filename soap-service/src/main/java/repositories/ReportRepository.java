package repositories;

import models.Report;

import java.sql.PreparedStatement;

public class ReportRepository extends Repository{
    private static ReportRepository instance;
    private ReportRepository() {
        super();
    }
    public static ReportRepository getInstance() {
        if (instance == null) {
            instance = new ReportRepository();
        }
        return instance;
    }

    public boolean createNewReport(Report report) {
        try {
            PreparedStatement stmt = conn.prepareStatement(
                    "INSERT INTO report(reporter_id, description, resolved) "
                            +   "VALUES (?, ?, ?);"
            );
            stmt.setString(1, report.getReporterID());
            stmt.setString(2, report.getDescription());
            stmt.setBoolean(3, report.getResolved());
            stmt.executeUpdate();
        } catch (Exception e) {
            return false;
        }
        return true;

    }
}

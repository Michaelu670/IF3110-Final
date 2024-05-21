package models;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;

public class Report implements Model {
    private String reporterID;
    private String description; // deskripsi transaksi apa yang direport, format bebas
    private Timestamp timestamp;
    private Boolean resolved; // Set manual di db kalau resolved

    public Report(String reporterID, String description) {
        this.reporterID = reporterID;
        this.description = description;
        this.timestamp = null;
        this.resolved = false;
    }

    public Report(String reporterID, String description, Timestamp timestamp) {
        this.reporterID = reporterID;
        this.description = description;
        this.timestamp = timestamp;
        this.resolved = false;
    }

    @Override
    public void setAttributes(ResultSet resultSet) throws SQLException {

    }

    public String getReporterID() {
        return reporterID;
    }

    public void setReporterID(String reporterID) {
        this.reporterID = reporterID;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }

    public Boolean getResolved() {
        return resolved;
    }

    public void setResolved(Boolean resolved) {
        this.resolved = resolved;
    }
}

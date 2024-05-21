package models;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ApiKey implements Model {
    private String apiId;
    private String username;
    private String apiKey;

    public ApiKey(String username, String apiKey) {
        this.username = username;
        this.apiKey = apiKey;
    }
    public ApiKey() {

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getApiKey() {
        return apiKey;
    }

    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }

    public String getApiId() {
        return apiId;
    }

    public void setApiId(String apiId) {
        this.apiId = apiId;
    }

    @Override
    public void setAttributes(ResultSet resultSet) throws SQLException {
        resultSet.next();
        this.apiId = resultSet.getString("api_id");
        this.username = resultSet.getString("username");
        this.apiKey = resultSet.getString("api_key");
    }
}

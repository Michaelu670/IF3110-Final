package repositories;

import models.ApiKey;

import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class ApiKeyRepository extends Repository {
    private static ApiKeyRepository instance;
    private ApiKeyRepository() {
        super();
    }
    public static ApiKeyRepository getInstance() {
        if (instance == null) {
            instance = new ApiKeyRepository();
        }
        return instance;
    }

    public boolean isApiKeyValid(String username, String apiKey) {
        try {
            PreparedStatement stmt = conn.prepareStatement("SELECT 1 FROM api_key WHERE username = ? AND api_key = ?");
            stmt.setString(1, username);
            stmt.setString(2, apiKey);
            ResultSet rs = stmt.executeQuery();
            return rs.next();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    public ApiKey getApiKeyFromUsername(String username) {
        ApiKey res = new ApiKey();
        try {
            PreparedStatement stmt = conn.prepareStatement(
                    "SELECT * FROM api_key " +
                            "WHERE username = ?"
            );
            stmt.setString(1, username);
            res.setAttributes(stmt.executeQuery());
        }
        catch (Exception e) {

        }
        return res;
    }
}

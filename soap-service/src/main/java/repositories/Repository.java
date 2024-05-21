package repositories;

import java.sql.Connection;
import java.sql.DriverManager;

public class Repository {
    protected final static String db_url = "jdbc:mysql://db:"
            + System.getenv("MYSQL_PORT") + "/"
            + System.getenv("MYSQL_DATABASE");
    protected Connection conn;

    protected Repository() {
        try {
            String user = System.getenv("MYSQL_USER");
            String pass = System.getenv("MYSQL_PASSWORD");
            conn = DriverManager.getConnection(db_url, user, pass);
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
    }
}

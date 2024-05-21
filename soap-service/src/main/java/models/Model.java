package models;

import java.sql.ResultSet;
import java.sql.SQLException;

public interface Model {
    public void setAttributes(ResultSet resultSet) throws SQLException;
}

package models;

import repositories.WalletRepository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

public class Wallet implements Model {
    String userID;
    long balance;
    public Wallet(String userID, long balance) {
        this.userID = userID;
        this.balance = balance;
    }
    public Wallet() {
        this.balance = 0;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    @Override
    public void setAttributes(ResultSet resultSet) throws SQLException {
        resultSet.next();
        this.userID = resultSet.getString("user_id");
        this.balance= resultSet.getLong("balance");
    }

    private void setBalance(long balance) {
        this.balance = balance;
    }

    public long getBalance() {
        return balance;
    }

    public void addBalance(long delta) {
        this.balance += delta;
    }
    public void takeBalance(long delta) {
        this.balance -= delta;
    }

    public boolean addBalanceAndCommit(long delta) {
        this.balance += delta;
        WalletRepository.getInstance().updateWallet(this);
        return true;
    }
    public boolean takeBalanceAndCommit(long delta) {
        if (this.balance < delta) {
            return false;
        }
        this.balance -= delta;
        return WalletRepository.getInstance().updateWallet(this);
    }

}

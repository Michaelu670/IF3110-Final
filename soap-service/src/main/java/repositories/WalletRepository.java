package repositories;

import models.Wallet;

import java.sql.PreparedStatement;
import java.util.List;
import java.util.UUID;

public class WalletRepository extends Repository {
    private static WalletRepository instance;
    private WalletRepository() {
        super();
    }
    public static WalletRepository getInstance() {
        if (instance == null) {
            instance = new WalletRepository();
        }
        return instance;
    }

    public boolean insertWallet(Wallet wallet) {
        try {
            PreparedStatement stmt = conn.prepareStatement(
                    "INSERT INTO wallet(user_id, balance) " +
                            "VALUES (?, ?)"
            );
            stmt.setString(1, wallet.getUserID().toString());
            stmt.setLong(2, wallet.getBalance());
            stmt.executeUpdate();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    public boolean updateWallet(Wallet wallet) {
        try {
            PreparedStatement stmt = conn.prepareStatement(
                    "UPDATE wallet " +
                            "SET balance = ? " +
                            "WHERE user_id = ?"
            );
            stmt.setLong(1, wallet.getBalance());
            stmt.setString(2, wallet.getUserID().toString());
            stmt.executeUpdate();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    public boolean updateMultipleWallet(List<Wallet> wallets) {
        try {
            conn.setAutoCommit(false);
            for (Wallet wallet: wallets) {
                PreparedStatement stmt = conn.prepareStatement(
                        "UPDATE wallet " +
                                "SET balance = ? " +
                                "WHERE user_id = ?"
                );
                stmt.setLong(1, wallet.getBalance());
                stmt.setString(2, wallet.getUserID().toString());
                stmt.executeUpdate();
            }
            conn.commit();
            conn.setAutoCommit(true);
            return true;
        } catch (Exception e) {

        }

        try { conn.setAutoCommit(true); }
        catch (Exception e) {}

        return false;
    }

    public Wallet getWallet(String userID) {
        Wallet res = new Wallet();
        try {
            PreparedStatement stmt = conn.prepareStatement(
                    "SELECT * FROM wallet " +
                            "WHERE user_id = ?"
            );
            stmt.setString(1, userID);
            res.setAttributes(stmt.executeQuery());
        } catch (Exception e) {
            // belum ada wallet, buat baru
            res.setUserID(userID);
            insertWallet(res);
        }
        return res;
    }

}

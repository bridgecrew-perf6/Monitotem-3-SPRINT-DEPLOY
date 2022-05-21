/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.monitotem.test;

import br.com.monitotem.service.ConnectionFactory;
import java.sql.Connection;
import java.io.IOException;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import java.util.Timer;
import java.util.TimerTask;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Administrador
 */
public class TestSelect {
    public static void main(String[] args) throws SQLException {

    }
    public void Reinicia() {

        new Timer().scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {

                Integer NumberReboot = 0;

                ConnectionFactory connectionFactory = new ConnectionFactory();
                Connection con = null;
                try {
                    con = connectionFactory.recuperarConexao();
                } catch (SQLException ex) {
                    Logger.getLogger(TestSelect.class.getName()).log(Level.SEVERE, null, ex);
                }

                String sql = "select reiniciarTotem from totem where idTotem = 49";

                try ( PreparedStatement pstm = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {

                    pstm.execute();

                    try ( ResultSet rs = pstm.getResultSet()) {
                        while (rs.next()) {
                            NumberReboot = rs.getInt(1);
                            System.out.println(NumberReboot);
                        }
                    }

                    System.out.println();

                } catch (SQLException ex) {
                    ex.printStackTrace();
                }

                if (NumberReboot == 1) {

                    String sql2 = "UPDATE totem SET reiniciarTotem = 0 WHERE idTotem = 49";

                    try ( PreparedStatement pstm = con.prepareStatement(sql2, Statement.RETURN_GENERATED_KEYS)) {

                        pstm.execute();

                        System.out.println();

                    } catch (SQLException ex) {
                        ex.printStackTrace();
                    }

                    try {
                        Runtime.getRuntime().exec("reboot");
                    } catch (IOException ex) {
                        ex.getMessage();
                    }

                    System.out.println("Deu certo carambaaa");

                }

            }
        }, 2, 5000);

    }

}

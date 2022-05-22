package br.com.monitotem.test;

import br.com.monitotem.service.ConnectionFactorySQL;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.sql.SQLException;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class TestaListagem {

    public static void main(String[] args) throws SQLException, UnknownHostException {

        ConnectionFactorySQL connectionFactory = new ConnectionFactorySQL();
        Connection con = connectionFactory.recuperarConexao();
        InetAddress infoMaquina = InetAddress.getLocalHost();

        PreparedStatement stmt = con.prepareStatement("SELECT hostname from TOTEM WHERE hostname = ?");

        stmt.setString(1, infoMaquina.getHostName().toString());

        
        stmt.execute();

        // ResultSet ele serve para buscar os resultados listados do stmt
        ResultSet rs = stmt.getResultSet();

        while (rs.next()) {

            String hostname = rs.getString(1);
            System.out.println(hostname);

        }

        System.out.println("Fechando conexão");
        con.close();

    }

}

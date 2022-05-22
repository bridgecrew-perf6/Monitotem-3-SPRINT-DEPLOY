package br.com.monitotem.service;

import com.mchange.v2.c3p0.ComboPooledDataSource;
import java.sql.SQLException;
import java.sql.Connection;
import javax.sql.DataSource;

/**
 *
 * @author enzo.f.silvestre
 */
public class ConnectionFactorySQL {

    public DataSource dataSource;

    public ConnectionFactorySQL() {

        ComboPooledDataSource comboPooledDataSource = new ComboPooledDataSource();
        comboPooledDataSource.setJdbcUrl("jdbc:sqlserver://svr-monitotem.database.windows.net:1433;"
                + "database=bd-monitotem;user=admi"
                + "n-monitotem@svr-monitotem;password={2ads#grupo2};"
                + "encrypt=true;trustServerCertificate="
                + "false;hostNameInCertificate=*.database.windows.net;loginTimeout=30");
        comboPooledDataSource.setUser("admin-monitotem");
        comboPooledDataSource.setPassword("2ads#grupo2");

        // limitando quantidade de conexões feitas por vez
        comboPooledDataSource.setMaxPoolSize(15);

        this.dataSource = comboPooledDataSource;
    }
    
    public ConnectionFactoryMySQL(){

        ComboPooledDataSource comboPooledDataSource = new ComboPooledDataSource();
        comboPooledDataSource.setDriverClass("com.mysql.cj.jdbc.Driver");
        comboPooledDataSource.setJdbcUrl("jdbc:mysql://localhost:3306/monitotem");
        comboPooledDataSource.setUser("root");
        comboPooledDataSource.setPassword("Samuckqadev6977+-");

        // limitando quantidade de conexões feitas por vez
        comboPooledDataSource.setMaxPoolSize(15);

        this.dataSource = comboPooledDataSource;
    }
    
      public Connection recuperarConexaoMySql() throws SQLException {
        return this.dataSource.getConnection();
    }

    public Connection recuperarConexao() throws SQLException {
        return this.dataSource.getConnection();
    }

}
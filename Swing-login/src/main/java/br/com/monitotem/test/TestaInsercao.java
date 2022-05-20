package br.com.monitotem.test;
import br.com.monitotem.service.ConnectionFactory;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class TestaInsercao {
    
    public static void main(String[] args) throws SQLException {
        
        ConnectionFactory connectionFactory = new ConnectionFactory();
        Connection con = connectionFactory.recuperarConexao();
        
        Statement stmt = con.createStatement();
        stmt.execute("INSERT INTO usuario(nomeUsuario,emailUsuario,senhaUsuario,"
                + "telefoneUsuario, genero, fk_empresa) VALUES('Rodrigo','r@r.com',"
                + "'r123','123456','masculino',2)",Statement.RETURN_GENERATED_KEYS);
        
        ResultSet rs = stmt.getGeneratedKeys();
        
        while (rs.next()) {
        
            Integer id = rs.getInt(1);// Esse numero 1 seria a coluna que no caso é o id
            System.out.println(id);
            
        }
        
        
        
    }
    
}

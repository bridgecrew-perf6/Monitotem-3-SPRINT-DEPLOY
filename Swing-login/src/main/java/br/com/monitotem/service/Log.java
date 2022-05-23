
package br.com.monitotem.service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


public class Log {
      
    public Log() {
    }
    
//    String strLocalDate  = LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));

   public void logar(String texto) {

//        File Log = new File("Log"+strLocalDate+".txt");

                File Log = new File("Log.txt");

        try {
            if (!Log.exists()) {
                System.out.println("Criei um novo arquivo");
                Log.createNewFile();
            }

            FileWriter fileWriter = new FileWriter(Log, true);

            BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
            bufferedWriter.write(texto);
            bufferedWriter.close();

        } catch (IOException e) {
            System.out.println("LOG NÃO CRIADO!!");
        }
    }
    
}

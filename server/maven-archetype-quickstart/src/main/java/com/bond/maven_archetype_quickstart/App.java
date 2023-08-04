package com.bond.maven_archetype_quickstart;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import org.springframework.boot.SpringApplication;    
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;   
@SpringBootApplication()
public class App
{  
	public static void main(String[] args) {    
		SpringApplication.run(App.class, args);    
        try {
            // below two lines are used for connectivity.
  
            Connection connection = DriverManager.getConnection(
                "jdbc:h2:mem:testdb",
                "sa", "");
 
            // mydb is database
            // mydbuser is name of database
            // mydbuser is password of database
 
            Statement statement;
            statement = connection.createStatement();
            ResultSet resultSet;
            resultSet = statement.executeQuery(
                "select * from book");
            String code;
            while (resultSet.next()) {
                code = resultSet.getString("book_name");
                System.out.println("name : " + code);
            }
            resultSet.close();
            statement.close();
            connection.close();
        }
        catch (Exception exception) {
            System.out.println(exception);
        }
	}   
}  
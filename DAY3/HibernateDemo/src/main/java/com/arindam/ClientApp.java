package com.arindam;

import java.util.Date;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class ClientApp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
 EntityManagerFactory emf=Persistence.createEntityManagerFactory("AppDB");//reading jdbc configuration
 EntityManager em=emf.createEntityManager();//insert update delete operation
 EntityTransaction tx=null;
 tx=em.getTransaction();//connection establish
 tx.begin();//transaction initiated
// Customer cs1=new Customer("C1","ANUP","22222");//object create along with data
//em.persist(cs1);//table created data inserted
 /*Employee emp1=new Employee();
 Employee emp2=new Employee();
 emp1.setEname("RAJAT");
 emp1.setEdesig("MANAGER");
 emp1.setEmail("rj@gmail.com");
 emp1.setJoindt(new Date());
 emp1.setWorkhr(new Date());
 emp2.setEname("RAMAN");
 emp2.setEdesig("MANAGER");
 emp2.setEmail("rm@gmail.com");
 emp2.setJoindt(new Date());
 emp2.setWorkhr(new Date());
 em.persist(emp1);
 em.persist(emp2);*/
 Teacher tr1=new Teacher("T1","ARNAB SIR");
 Teacher tr2=new Teacher("T2","AYAN SIR");
 Student sd1=new Student();
 sd1.setSname("ROBIN");
 sd1.setTrs(tr1);
 Student sd2=new Student();
 sd2.setSname("ALOKE");
 sd2.setTrs(tr2);
 em.persist(tr1);
 em.persist(tr2);
 em.persist(sd1);
 em.persist(sd2);
tx.commit();//saving data into database
emf.close();
 
   
	}

}

package com.arindam;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.Query;

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
 /*Teacher tr1=new Teacher("T1","ARNAB SIR");
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
 em.persist(sd2);*/
 System.out.println("CRUD OPERATION");
 System.out.println("INSERT DATA INTO TABLE PRODUCT=========");
 Product pr1=new Product("P1","TV",5,25000.00);
 Product pr2=new Product("P2","TAB",6,18000.00);
 Product pr3=new Product("P3","LAPTOP",15,45000.00);
 Product pr4=new Product("P4","MOBILE",12,12000.00);
 Product pr5=new Product("P5","REFRIGERATOR",7,27000.00);
 Product pr6=new Product("P6","CONVECTION",2,22000.00);
 /*em.persist(pr1);
 em.persist(pr2);
 em.persist(pr3);
 em.persist(pr4);
 em.persist(pr5);
 em.persist(pr6);*/
 
 /*System.out.println("DELETE DATA====================");
 Product pds=em.find(Product.class,"P6");//finding the p6 is available or not
 if(pds!=null)
 {
	 em.remove(pds);
 }*/
 
 System.out.println("UPDATE DATA=======================");
 Product pds1=em.find(Product.class,"P5");//finding the p6 is available or not
 if(pds1!=null)
 {
	 pds1.setPname("CONVECTION");
	 pds1.setPqty(25);
	 pds1.setPrice(17000.00);
	 em.persist(pds1);//update data
 }
 
 System.out.println("FETCH DATA===============");
 String hql="from Product";
 Query query=em.createQuery(hql);
 List<Product> plist=query.getResultList();
 plist.stream().forEach(System.out::println);
tx.commit();//saving data into database
emf.close();
 
   
	}

}

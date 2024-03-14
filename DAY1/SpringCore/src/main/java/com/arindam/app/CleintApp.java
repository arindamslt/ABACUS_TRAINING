package com.arindam.app;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.arindam.bean.Category;
import com.arindam.bean.Customer;
import com.arindam.config.SpringConfig;


public class CleintApp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//AnnotationConfigApplicationContext ac=new AnnotationConfigApplicationContext(SpringConfig.class);
AnnotationConfigApplicationContext ac=new AnnotationConfigApplicationContext(SpringConfig.class);
Customer cst=(Customer)ac.getBean("cs");
System.out.println(cst);
//Category ct=(Category)ac.getBean("cgs");
//System.out.println(ct);


	}

}

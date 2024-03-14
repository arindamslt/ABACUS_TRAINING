package com.arindam.bean;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
@Component(value="cgs")
public class Category {
	@Value("PROGRAMMING LANGUAGE")
private String catgnm;
	@Autowired
	private Book bk;
	public Category(String catgnm,Book bk)
	{
		this.catgnm=catgnm;
		this.bk=bk;
		
	}
	public Category()
	{
		
	}
	public String getCatgnm() {
		return catgnm;
	}
	public void setCatgnm(String catgnm) {
		this.catgnm = catgnm;
	}
	public Book getBk() {
		return bk;
	}
	public void setBk(Book bk) {
		this.bk = bk;
	}
	@Override
	public String toString() {
		return "Category [catgnm=" + catgnm + ", bk=" + bk + "]";
	}
	

}

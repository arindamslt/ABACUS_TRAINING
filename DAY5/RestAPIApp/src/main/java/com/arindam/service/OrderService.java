package com.arindam.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arindam.model.Order;
import com.arindam.repository.OrderRepo;
@Service//object creation +insert update delete fetch kind of operation
public class OrderService {
	@Autowired
private OrderRepo orepo;
	public void addData(Order  order)
	{
		orepo.save(order);//table created and data saved
	}
	public List<Order> getData()
	{
		return orepo.findAll();
	}
}

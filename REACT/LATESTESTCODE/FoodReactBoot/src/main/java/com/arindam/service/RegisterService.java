package com.arindam.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arindam.model.Register;
import com.arindam.repository.RegisterRepositoty;

@Service
public class RegisterService {
	@Autowired
private RegisterRepositoty rrepo;
	public void addData(Register register)
	{
		rrepo.save(register);
	}
	public List<Register> getData()
	{
		return rrepo.findAll();
	}
	public Register login(String uname,String pass)
	{
		return rrepo.login(uname, pass);
	}
}

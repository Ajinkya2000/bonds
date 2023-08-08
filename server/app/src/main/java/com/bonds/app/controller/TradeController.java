package com.bonds.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.bonds.app.model.BookModel;
import com.bonds.app.model.SecurityModel;
import com.bonds.app.model.TradeModel;
import com.bonds.app.service.BookService;
import com.bonds.app.service.SecurityService;
import com.bonds.app.service.TradeService;

@RestController
public class TradeController {
	
	@Autowired
	private TradeService tradeService;
	
	@GetMapping(path = "/trade")  
	private List<TradeModel> getAllSecurity(){  
	return tradeService.getAllTrade();  
	}  
	
	@GetMapping(path = "/trade/{id}")  
	private List<TradeModel> getTrade(@PathVariable("id") int id){  
	return tradeService.getTradesById(id);  
	}  
	
	@DeleteMapping("/trade/{id}")  
	private void deleteTrade(@PathVariable("id") int id)   
	{  
		tradeService.delete(id);  
	}  
	@PostMapping("/trade")  
	private int saveTrade(@RequestBody TradeModel tradeModel)   
	{  
		tradeService.saveOrUpdate(tradeModel);  
	return tradeModel.getId();
	}  

}




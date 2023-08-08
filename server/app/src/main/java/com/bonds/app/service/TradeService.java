package com.bonds.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bonds.app.model.*;
import com.bonds.app.repository.*;

@Service
public class TradeService {
	
 
	@Autowired  
	TradeRepository tradeRepository;  
	//getting all student records  
	public List<TradeModel> getAllTrade(){  
	List<TradeModel> trades = new ArrayList<TradeModel>();  
	tradeRepository.findAll().forEach(trades::add);  
	return trades;  
	}  
	
	//getting a specific record  
	public List<TradeModel> getTradesById(int securityId){ 
		List<TradeModel> trades = tradeRepository.findAll();
		List<TradeModel> securityTrades = new ArrayList<TradeModel>();
		for(TradeModel trade : trades) {
			if(trade.getSecurityId()==securityId) {
				securityTrades.add(trade);
			}
		}
		return securityTrades;  
	} 
	
	public void saveOrUpdate(TradeModel tradeModel){  
		tradeRepository.save(tradeModel);  
	}  
	
	//deleting a specific record  
	public void delete(int id){  
		tradeRepository.deleteById(id);  
	}  
	 
}  




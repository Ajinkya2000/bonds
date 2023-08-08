package com.bonds.app.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "Trade")
public class TradeModel{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "bookid", nullable = false)
    private int bookModelId;
    
    @Column(name = "counterpartyname", nullable = false)
    private String counterpartyName;

    @Column(name = "securityid", nullable = false)
    private int securityModelId;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "price", nullable = false)
    private BigDecimal price;

    @Column(name = "buysell", nullable = false)
    private String buysell;

    @Column(name = "tradedate", nullable = false)
    private Date tradeDate;

    @Column(name = "settlementdate", nullable = false)
    private Date settlementDate;

    public TradeModel() {
    }

    public TradeModel(int id, int bookModelId, String counterpartyName, int securityModelId, int quantity, BigDecimal price, String buysell, Date tradeDate, Date settlementDate) {
        this.id = id;
        this.bookModelId = bookModelId;
        this.counterpartyName = counterpartyName;
        this.securityModelId = securityModelId;
        this.quantity = quantity;
        this.price = price;
        this.buysell = buysell;
        this.tradeDate = tradeDate;
        this.settlementDate = settlementDate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getBookId() {
        return bookModelId;
    }

    public void setBookId(int bookModelId) {
        this.bookModelId = bookModelId;
    }

    public String getCounterpartyName() {
        return counterpartyName;
    }

    public void setCounterpartyName(String counterpartyName) {
        this.counterpartyName = counterpartyName;
    }

    public int getSecurityId() {
        return securityModelId;
    }

    public void setSecurityId(int securityModelId) {
        this.securityModelId = securityModelId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getBuysell() {
        return buysell;
    }

    public void setBuysell(String buysell) {
        this.buysell = buysell;
    }

    public Date getTradeDate() {
        return tradeDate;
    }

    public void setTradeDate(Date tradeDate) {
        this.tradeDate = tradeDate;
    }

    public Date getSettlementDate() {
        return settlementDate;
    }

    public void setSettlementDate(Date settlementDate) {
        this.settlementDate = settlementDate;
    }
}

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

    @ManyToOne
    private int bookModelId;

    @ManyToOne
    private int counterpartyModelId;

    @ManyToOne
    private int securityModelId;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "price", nullable = false)
    private BigDecimal price;

    @Column(name = "buysell", nullable = false)
    private String buysell;

    @Column(name = "Tradedate", nullable = false)
    private Date tradeDate;

    @Column(name = "settlementdate", nullable = false)
    private Date settlementDate;

    public TradeModel() {
    }

    public TradeModel(int id, int bookModelId, int counterpartyModelId, int securityModelId, int quantity, String status, BigDecimal price, String buysell, Date tradeDate, Date settlementDate) {
        this.id = id;
        this.bookModelId = bookModelId;
        this.counterpartyModelId = counterpartyModelId;
        this.securityModelId = securityModelId;
        this.quantity = quantity;
        this.status = status;
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

    public int getCounterpartyId() {
        return counterpartyModelId;
    }

    public void setCounterpartyId(int counterpartyModelId) {
        this.counterpartyModelId = counterpartyModelId;
    }

    public int getSecurity() {
        return securityModelId;
    }

    public void setSecurity(int securityModelId) {
        this.securityModelId = securityModelId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
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

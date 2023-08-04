package com.db.grad.javaapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "Trade")
public class TradeModel{

    @Id
    private int id;

    @ManyToOne
    private Book book;

    @ManyToOne
    private Counterparty counterparty;

    @ManyToOne
    private Security security;

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

    public TradeModel(int id, Book book, Counterparty counterparty, Security security, int quantity, String status, BigDecimal price, String buysell, Date tradeDate, Date settlementDate) {
        this.id = id;
        this.book = book;
        this.counterparty = counterparty;
        this.security = security;
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

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public Counterparty getCounterparty() {
        return counterparty;
    }

    public void setCounterparty(Counterparty counterparty) {
        this.counterparty = counterparty;
    }

    public Security getSecurity() {
        return security;
    }

    public void setSecurity(Security security) {
        this.security = security;
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

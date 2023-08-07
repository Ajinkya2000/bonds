package com.bonds.app.model;


import java.math.BigDecimal;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Security")
public class SecurityModel {

    @Id
    private int id;

    @Column(name = "isin", nullable = false)
    private String isin;

    @Column(name = "cusip", nullable = false)
    private String cusip;

    @Column(name = "issuer", nullable = false)
    private String issuer;

    @Column(name = "maturitydate", nullable = false)
    private Date maturityDate;

    @Column(name = "coupon", nullable = false)
    private BigDecimal coupon;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "facevalue", nullable = false)
    private BigDecimal faceValue;

    @Column(name = "status", nullable = false)
    private String status;

    public SecurityModel() {
    }

    public SecurityModel(int id, String isin, String cusip, String issuer, Date maturityDate, BigDecimal coupon, String type, BigDecimal faceValue, String status) {
        this.id = id;
        this.isin = isin;
        this.cusip = cusip;
        this.issuer = issuer;
        this.maturityDate = maturityDate;
        this.coupon = coupon;
        this.type = type;
        this.faceValue = faceValue;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getIsin() {
        return isin;
    }

    public void setIsin(String isin) {
        this.isin = isin;
    }

    public String getCusip() {
        return cusip;
    }

    public void setCusip(String cusip) {
        this.cusip = cusip;
    }

    public String getIssuer() {
        return issuer;
    }

    public void setIssuer(String issuer) {
        this.issuer = issuer;
    }

    public Date getMaturityDate() {
        return maturityDate;
    }

    public void setMaturityDate(Date maturityDate) {
        this.maturityDate = maturityDate;
    }

    public BigDecimal getCoupon() {
        return coupon;
    }

    public void setCoupon(BigDecimal coupon) {
        this.coupon = coupon;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public BigDecimal getFaceValue() {
        return faceValue;
    }

    public void setFaceValue(BigDecimal faceValue) {
        this.faceValue = faceValue;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}


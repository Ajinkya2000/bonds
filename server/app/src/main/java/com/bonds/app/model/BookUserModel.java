package com.bonds.app.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
//@IdClass(BookUserId.class)
@Table(name = "BookUser")
public class BookUserModel {

    @Id
    private  int bookid;

    private int userid;

    public BookUserModel() {
    }

    public BookUserModel(int bookid, int userid) {
        this.bookid = bookid;
        this.userid = userid;
    }

    public int getBookId() {
        return bookid;
    }

    public void setBookId(int bookid) {
        this.bookid = bookid;
    }

    public int getUserId() {
        return userid;
    }

    public void setUser(int userid) {
        this.userid = userid;
    }
}

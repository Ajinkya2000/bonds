package com.db.grad.javaapi.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@IdClass(BookUserId.class)
@Table(name = "BookUser")
public class BookUserModel {

    @Id
    @ManyToOne
    private Book book;

    @Id
    @ManyToOne
    private User user;

    public BookUserModel() {
    }

    public BookUserModel(Book book, User user) {
        this.book = book;
        this.user = user;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

package com.youngburris.entities;

import javax.persistence.*;

/**
 * Created by stevenburris on 11/19/16.
 */
@Entity
@Table(name = "payments")
public class Payment {

    @Id
    @GeneratedValue
    int id;

    @Column
    String payment;

    @Column
    String newBalance;

    @ManyToOne
    Student student;

    public Payment() {
    }

    public Payment(String payment) {
        this.payment = payment;
    }

    public Payment(String payment, Student student) {
        this.payment = payment;
        this.student = student;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPayment() {
        return payment;
    }

    public void setPayment(String payment) {
        this.payment = payment;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public String getNewBalance() {
        return newBalance;
    }

    public void setNewBalance(String newBalance) {
        this.newBalance = newBalance;
    }
}

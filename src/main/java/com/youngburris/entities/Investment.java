package com.youngburris.entities;

import javax.persistence.*;

/**
 * Created by stevenburris on 11/17/16.
 */
@Entity
@Table(name = "investments")
public class Investment {

    @Id
    @GeneratedValue
    int id;

    @Column
    double amount;

    @Column
    double principalRepaid;

    @Column
    double interestPaid;

    @ManyToOne
    Loan loan;

    public Investment() {
    }

    public Investment(double amount) {
        this.amount = amount;
    }

    public Investment(double amount, Loan loan) {
        this.amount = amount;
        this.loan = loan;

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Loan getLoan() {
        return loan;
    }

    public void setLoan(Loan loan) {
        this.loan = loan;
    }

    public double getPrincipalRepaid() {
        return principalRepaid;
    }

    public void setPrincipalRepaid(double principalRepaid) {
        this.principalRepaid = principalRepaid;
    }

    public double getInterestPaid() {
        return interestPaid;
    }

    public void setInterestPaid(double interestPaid) {
        this.interestPaid = interestPaid;
    }
}

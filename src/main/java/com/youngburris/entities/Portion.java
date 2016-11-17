package com.youngburris.entities;

import javax.persistence.*;

/**
 * Created by stevenburris on 11/17/16.
 */
@Entity
@Table(name = "portions")
public class Portion {

    @Id
    @GeneratedValue
    int id;

    @Column
    double amount;

    @ManyToOne
    Loan loan;

    @ManyToOne
    Investor investor;

    public Portion() {
    }

    public Portion(double amount) {
        this.amount = amount;
    }

    public Portion(double amount, Loan loan, Investor investor) {
        this.amount = amount;
        this.loan = loan;
        this.investor = investor;
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

    public Investor getInvestor() {
        return investor;
    }

    public void setInvestor(Investor investor) {
        this.investor = investor;
    }
}

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
    String amount;

    @Column
    double principalRepaid;

    @Column
    double interestPaid;

    @Column
    String theLoanId;

    @ManyToOne
    Loan loan;

    public Investment() {
    }

    public Investment(String amount) {
        this.amount = amount;
    }

    public Investment(String amount, String loanId) {
        this.amount = amount;
        this.theLoanId = loanId;
    }

    public Investment(String amount, Loan loan) {
        this.amount = amount;
        this.loan = loan;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
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

    public String getLoanId() {
        return theLoanId;
    }

    public void setLoanId(String loanId) {
        this.theLoanId = loanId;
    }
}

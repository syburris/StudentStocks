package com.youngburris.entities;

import javax.persistence.*;
import java.time.LocalDate;

/**
 * Created by stevenburris on 11/16/16.
 */
@Entity
@Table(name = "loans")
public class Loan {

    @Id
    @GeneratedValue
    int id;

    @Column
    double goal;

    @Column
    double balance;

    @Column
    double payment;

    @Column
    double pv;

    @Column
    double ratePerPeriod;

    @Column
    double apr;

    @Column
    int numberOfPeriods;

    @Column
    LocalDate initiationDate;

    @Column
    LocalDate finishDate;

    @Column
    LocalDate paymentDate;





    public Loan() {
    }

    public Loan(double goal, double pv, double apr, int numberOfPeriods, LocalDate initiationDate, Student student) {
        this.goal = goal;
        this.pv = pv;
        this.apr = apr;
        this.numberOfPeriods = numberOfPeriods;
        this.initiationDate = initiationDate;


    }

    public Loan(double goal, double balance, double payment, double pv, double ratePerPeriod,
                double apr, int numberOfPeriods, LocalDate initiationDate, LocalDate finishDate,
                LocalDate paymentDate, Student student) {
        this.goal = goal;
        this.balance = balance;
        this.payment = payment;
        this.pv = pv;
        this.ratePerPeriod = ratePerPeriod;
        this.apr = apr;
        this.numberOfPeriods = numberOfPeriods;
        this.initiationDate = initiationDate;
        this.finishDate = finishDate;
        this.paymentDate = paymentDate;


    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getGoal() {
        return goal;
    }

    public void setGoal(double goal) {
        this.goal = goal;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public double getPayment() {
        return payment;
    }

    public void setPayment(double payment) {
        this.payment = payment;
    }

    public double getPv() {
        return pv;
    }

    public void setPv(double pv) {
        this.pv = pv;
    }

    public double getRatePerPeriod() {
        return ratePerPeriod;
    }

    public void setRatePerPeriod(double ratePerPeriod) {
        this.ratePerPeriod = ratePerPeriod;
    }

    public double getApr() {
        return apr;
    }

    public void setApr(double apr) {
        this.apr = apr;
    }

    public int getNumberOfPeriods() {
        return numberOfPeriods;
    }

    public void setNumberOfPeriods(int numberOfPeriods) {
        this.numberOfPeriods = numberOfPeriods;
    }

    public LocalDate getInitiationDate() {
        return initiationDate;
    }

    public void setInitiationDate(LocalDate initiationDate) {
        this.initiationDate = initiationDate;
    }

    public LocalDate getFinishDate() {
        return finishDate;
    }

    public void setFinishDate(LocalDate finishDate) {
        this.finishDate = finishDate;
    }

    public LocalDate getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(LocalDate paymentDate) {
        this.paymentDate = paymentDate;
    }
}

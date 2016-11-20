package com.youngburris.entities;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.DoubleSummaryStatistics;
import java.util.List;

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
    String goal;

    @Column
    String balance;

    @Column
    String payment;

    @Column
    String pv;

    @Column
    String years;

    @Column
    String ratePerPeriod;

    @Column
    String apr;

    @Column
    String numberOfPeriods;

    @Column
    LocalDate initiationDate;

    @Column
    LocalDate finishDate;

    @Column
    LocalDate paymentDate;

    @Column
    Double paymentBalance;

    @Column
    int monthsPassed;

    @Column
    String gracePeriod;

    @OneToMany
    List<Portion> portions;

    public Loan() {
    }

    public Loan(String balance, String payment, String pv, String ratePerPeriod, String apr,
                String numberOfPeriods, String gracePeriod, String years) {
        this.balance = balance;
        this.payment = payment;
        this.pv = pv;
        this.ratePerPeriod = ratePerPeriod;
        this.apr = apr;
        this.numberOfPeriods = numberOfPeriods;
        this.gracePeriod = gracePeriod;
        this.years = years;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getGoal() {
        return goal;
    }

    public void setGoal(String goal) {
        this.goal = goal;
    }

    public String getBalance() {
        return balance;
    }

    public void setBalance(String balance) {
        this.balance = balance;
    }

    public String getPayment() {
        return payment;
    }

    public void setPayment(String payment) {
        this.payment = payment;
    }

    public String getPv() {
        return pv;
    }

    public void setPv(String pv) {
        this.pv = pv;
    }

    public String getRatePerPeriod() {
        return ratePerPeriod;
    }

    public void setRatePerPeriod(String ratePerPeriod) {
        this.ratePerPeriod = ratePerPeriod;
    }

    public String getApr() {
        return apr;
    }

    public void setApr(String apr) {
        this.apr = apr;
    }

    public String getNumberOfPeriods() {
        return numberOfPeriods;
    }

    public void setNumberOfPeriods(String numberOfPeriods) {
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

    public String getGracePeriod() {
        return gracePeriod;
    }

    public void setGracePeriod(String gracePeriod) {
        this.gracePeriod = gracePeriod;
    }

    public List<Portion> getPortions() {
        return portions;
    }

    public void setPortions(List<Portion> portions) {
        this.portions = portions;
    }

    public int getMonthsPassed() {
        return monthsPassed;
    }

    public void setMonthsPassed(int monthsPassed) {
        this.monthsPassed = monthsPassed;
    }

    public String getYears() {
        return years;
    }

    public void setYears(String years) {
        this.years = years;
    }

    public Double getPaymentBalance() {
        return paymentBalance;
    }

    public void setPaymentBalance(Double paymentBalance) {
        this.paymentBalance = paymentBalance;
    }
}

package com.youngburris.entities;

import javax.persistence.*;
import java.time.LocalDate;
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
    String loanGoal;

    @Column
    String loanLength;

    @Column
    String gracePeriod;

    @Column
    String principalBalance;

    @Column
    String interestBalance;

    @Column
    String monthlyPayment;

    @Column
    String years;

    @Column
    double monthlyInterest;

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
    double gracePeriodLength;

    @OneToMany
    List<Investment> investments;

    @Column
    boolean isFunded;

    public Loan() {
    }

    public Loan(String loanGoal, String loanLength, String gracePeriod){
        this.loanGoal = loanGoal;
        this.loanLength = loanLength;
        this.gracePeriod = gracePeriod;
    }

    public Loan(String principalBalance, String monthlyPayment, String apr,
                String numberOfPeriods, int gracePeriodLength, String years) {
        this.principalBalance = principalBalance;
        this.monthlyPayment = monthlyPayment;
        this.apr = apr;
        this.numberOfPeriods = numberOfPeriods;
        this.gracePeriodLength = gracePeriodLength;
        this.years = years;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLoanGoal() {
        return loanGoal;
    }

    public void setLoanGoal(String loanGoal) {
        this.loanGoal = loanGoal;
    }

    public String getPrincipalBalance() {
        return principalBalance;
    }

    public void setPrincipalBalance(String principalBalance) {
        this.principalBalance = principalBalance;
    }

    public String getInterestBalance() {
        return interestBalance;
    }

    public void setInterestBalance(String interestBalance) {
        this.interestBalance = interestBalance;
    }

    public String getMonthlyPayment() {
        return monthlyPayment;
    }

    public void setMonthlyPayment(String monthlyPayment) {
        this.monthlyPayment = monthlyPayment;
    }

    public String getYears() {
        return years;
    }

    public void setYears(String years) {
        this.years = years;
    }

    public double getMonthlyInterest() {
        return monthlyInterest;
    }

    public void setMonthlyInterest(double monthlyInterest) {
        this.monthlyInterest = monthlyInterest;
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

    public Double getPaymentBalance() {
        return paymentBalance;
    }

    public void setPaymentBalance(Double paymentBalance) {
        this.paymentBalance = paymentBalance;
    }

    public int getMonthsPassed() {
        return monthsPassed;
    }

    public void setMonthsPassed(int monthsPassed) {
        this.monthsPassed = monthsPassed;
    }

    public double getGracePeriodLength() {
        return gracePeriodLength;
    }

    public void setGracePeriodLength(double gracePeriodLength) {
        this.gracePeriodLength = gracePeriodLength;
    }

    public List<Investment> getInvestments() {
        return investments;
    }

    public void setInvestments(List<Investment> investments) {
        this.investments = investments;
    }

    public boolean isFunded() {
        return isFunded;
    }

    public void setFunded(boolean funded) {
        isFunded = funded;
    }

    public String getLoanLength() {
        return loanLength;
    }

    public void setLoanLength(String loanLength) {
        this.loanLength = loanLength;
    }

    public String getGracePeriod() {
        return gracePeriod;
    }

    public void setGracePeriod(String gracePeriod) {
        this.gracePeriod = gracePeriod;
    }
}

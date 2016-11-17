package com.youngburris.entities;

import javax.persistence.*;

/**
 * Created by stevenburris on 11/15/16.
 */
@Entity
@Table(name = "students")
public class Student {
    enum Level {
        UNDERGRADUATE,
        GRADUATE
    }

    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false, unique = true)
    String username;

    @Column(nullable = false)
    String password;

    @Column(nullable = false)
    String firstName;

    @Column(nullable = false)
    String lastName;

    @Column(nullable = false)
    String school;

    @Column(nullable = false)
    Level level;

    @Column(nullable = false)
    String bio;

    @Column(nullable = false)
    String highSchool;

    @Column(nullable = true)
    String transcript;

    @Column(nullable = false)
    String gpa;

    @Column(nullable = false)
    String major;

    @Column(nullable = true)
    String minor;

    @Column(nullable = false)
    String ssn;

    @Column(nullable = false)
    double loanGoal;

    @Column(nullable = false)
    double balance;

    @Column(nullable = false)
    boolean isFunded;


    public Student() {
    }

    public Student(String username, String password, String firstName, String lastName, String school, Level level,
                   String bio, String highSchool, String transcript, String gpa, String major, String minor,
                   String ssn, double balance, Loan loan, double loanGoal) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.school = school;
        this.level = level;
        this.bio = bio;
        this.highSchool = highSchool;
        this.transcript = transcript;
        this.gpa = gpa;
        this.major = major;
        this.minor = minor;
        this.ssn = ssn;
        this.balance = balance;

        this.loanGoal = loanGoal;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public Level getLevel() {
        return level;
    }

    public void setLevel(Level level) {
        this.level = level;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getHighSchool() {
        return highSchool;
    }

    public void setHighSchool(String highSchool) {
        this.highSchool = highSchool;
    }

    public String getTranscript() {
        return transcript;
    }

    public void setTranscript(String transcript) {
        this.transcript = transcript;
    }

    public String getGpa() {
        return gpa;
    }

    public void setGpa(String gpa) {
        this.gpa = gpa;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public String getMinor() {
        return minor;
    }

    public void setMinor(String minor) {
        this.minor = minor;
    }

    public String getSsn() {
        return ssn;
    }

    public void setSsn(String ssn) {
        this.ssn = ssn;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public double getLoanGoal() {
        return loanGoal;
    }

    public void setLoanGoal(double loanGoal) {
        this.loanGoal = loanGoal;
    }

    public boolean isFunded() {
        return isFunded;
    }

    public void setFunded(boolean funded) {
        isFunded = funded;
    }

}

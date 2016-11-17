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
    Investor investor;

    @ManyToOne
    Loan loan;
}

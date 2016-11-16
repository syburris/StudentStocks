package com.youngburris.entities;

import javax.persistence.*;

/**
 * Created by stevenburris on 11/16/16.
 */
public class LoanPortion {

    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    double amount;

    @ManyToOne
    Investor investor;
}

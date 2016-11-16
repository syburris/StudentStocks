package com.youngburris.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by stevenburris on 11/16/16.
 */
@Entity
@Table(name = "loans")
public class Loan {

    @Id
    @GeneratedValue
    int id;


}

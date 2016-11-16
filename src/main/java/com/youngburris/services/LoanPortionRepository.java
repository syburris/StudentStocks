package com.youngburris.services;

import com.youngburris.entities.LoanPortion;
import org.springframework.data.repository.CrudRepository;

import javax.persistence.Id;

/**
 * Created by stevenburris on 11/16/16.
 */
public interface LoanPortionRepository extends CrudRepository<LoanPortion, Integer> {
}

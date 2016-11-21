package com.youngburris.services;

import com.youngburris.entities.Investment;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by stevenburris on 11/17/16.
 */
public interface InvestmentRepository extends CrudRepository<Investment, Integer> {
}

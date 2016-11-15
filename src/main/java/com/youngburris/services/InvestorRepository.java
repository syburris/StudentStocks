package com.youngburris.services;

import com.youngburris.entities.Investor;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by stevenburris on 11/15/16.
 */
public interface InvestorRepository extends CrudRepository<Investor, Integer> {
    Investor findFirstByUsername(String username);
}

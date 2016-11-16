package com.youngburris.services;

import com.youngburris.entities.Loan;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by stevenburris on 11/16/16.
 */
public interface LoanRepository extends CrudRepository<Loan, Integer> {
}

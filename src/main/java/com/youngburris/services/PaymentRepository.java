package com.youngburris.services;

import com.youngburris.entities.Payment;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by stevenburris on 11/19/16.
 */
public interface PaymentRepository extends CrudRepository<Payment, Integer> {
}

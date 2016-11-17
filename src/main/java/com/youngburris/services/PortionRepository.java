package com.youngburris.services;

import com.youngburris.entities.Portion;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by stevenburris on 11/17/16.
 */
public interface PortionRepository extends CrudRepository<Portion, Integer> {
}

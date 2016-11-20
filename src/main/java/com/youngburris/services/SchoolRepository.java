package com.youngburris.services;

import com.youngburris.entities.School;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by stevenburris on 11/20/16.
 */
public interface SchoolRepository extends CrudRepository<School, Integer> {
}

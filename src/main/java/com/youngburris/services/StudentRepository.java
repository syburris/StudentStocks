package com.youngburris.services;

import com.youngburris.entities.Student;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by stevenburris on 11/15/16.
 */
public interface StudentRepository extends CrudRepository<Student, Integer> {
    Student findFirstByUsername(String username);

}

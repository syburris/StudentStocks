package com.youngburris.controllers;

import com.youngburris.entities.Investor;
import com.youngburris.entities.Student;
import com.youngburris.entities.User;
import com.youngburris.services.InvestorRepository;
import com.youngburris.services.StudentRepository;
import com.youngburris.utilities.PasswordStorage;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.http.HttpSession;
import java.sql.SQLException;
import java.time.LocalDate;

/**
 * Created by stevenburris on 11/15/16.
 */
@RestController
public class StudentStocksRestController {

    @Autowired
    StudentRepository students;

    @Autowired
    InvestorRepository investors;

    Server h2;

//    initiate the server and add a default student && default investor if they aren't already in the db
    @PostConstruct
    public void init() throws PasswordStorage.CannotPerformOperationException, SQLException {
        h2 = Server.createWebServer().start();
        Investor defaultInvestor = new Investor("stevenburris@gmail.com", PasswordStorage.createHash("hunter2"),
                "Steven", "Burris", "2190-4322-32",
                "College of Charleston", 1000.00);
        if (investors.findFirstByUsername(defaultInvestor.getUsername()) == null) {
            investors.save(defaultInvestor);
        }
    }

    @PreDestroy
    public void destroy() {
        h2.stop();
    }


//    Student login route
    @RequestMapping(path = "/studentlogin", method = RequestMethod.POST)
    public ResponseEntity<Student> studentLogin(HttpSession session, @RequestBody Student student)
            throws PasswordStorage.InvalidHashException, PasswordStorage.CannotPerformOperationException {

//        check the database for the student's username
        Student studentFromH2 = students.findFirstByUsername(student.getUsername());

//        if username is not found, throw a forbidden status
        if (studentFromH2 == null) {
            return new ResponseEntity<Student>(HttpStatus.FORBIDDEN);
        }

//        if password hash doesn't match the stored hash, throw a forbidden status
        else if (!PasswordStorage.verifyPassword(student.getPassword(), studentFromH2.getPassword())) {
            return new ResponseEntity<Student>(HttpStatus.FORBIDDEN);
        }

//        if password matches, set attribute and return 200
        session.setAttribute("username", student.getUsername());
        session.setAttribute("isAdmin", false);
        return new ResponseEntity<Student>(student, HttpStatus.OK);
    }

//    Investor login route
    @RequestMapping(path = "/investorlogin", method = RequestMethod.POST)
    public ResponseEntity<Investor> investorLogin(HttpSession session, @RequestBody Investor investor)
            throws PasswordStorage.InvalidHashException, PasswordStorage.CannotPerformOperationException {

//        check the databse for the investor's username
        Investor investorFromH2 = investors.findFirstByUsername(investor.getUsername());

//        if username is not found, throw a forbidden status
        if (investorFromH2 == null) {
            return new ResponseEntity<Investor>(HttpStatus.FORBIDDEN);
        }

//        if password doesn't match, throw a forbidden status
        else if (!PasswordStorage.verifyPassword(investor.getPassword(), investorFromH2.getPassword())) {
            return new ResponseEntity<Investor>(HttpStatus.FORBIDDEN);
        }

//        if password matches, set attribute and return a 200
        session.setAttribute("username", investor.getUsername());
        session.setAttribute("isAdmin", true);
        return new ResponseEntity<Investor>(investor, HttpStatus.OK);
    }

//    logout route for students and investors
    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public ResponseEntity logout(HttpSession session) {
        session.invalidate();
        return new ResponseEntity(HttpStatus.OK);
    }

}
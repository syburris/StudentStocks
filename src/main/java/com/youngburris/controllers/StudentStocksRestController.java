package com.youngburris.controllers;

import com.youngburris.entities.*;
import com.youngburris.services.*;
import com.youngburris.utilities.PasswordStorage;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.sql.SQLException;
import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

/**
 * Created by stevenburris on 11/15/16.
 */
@RestController
public class StudentStocksRestController {

    @Autowired
    StudentRepository students;

    @Autowired
    public InvestorRepository investors;

    @Autowired
    LoanRepository loans;

    @Autowired
    InvestmentRepository investments;

    @Autowired
    PaymentRepository payments;

    @Autowired
    SchoolRepository schools;

    Server h2;

//    initiate the server and add a default student && default investor if they aren't already in the db
    @PostConstruct
    public void init() throws PasswordStorage.CannotPerformOperationException, SQLException {
//        initiate h2 server
        h2 = Server.createWebServer().start();

//        if images folder doesn't exist, create it
        File f = new File("public/images");
        if (!f.exists()) {
            File dir = new File("public/images");
            dir.mkdir();
        }

//        add seed data (investor)
        if (investors.count() == 0) {
            Investor investor = new Investor("stevenburris@gmail.com", PasswordStorage.createHash("hunter2"),
                    "Steven", "Burris", "219089-4322-32", "College of Charleston", 10000);
            investor.setMySchool(schools.findFirstByName(investor.getSchool()));
            Investor investor1 = new Investor("alexwebber@gmail.com", PasswordStorage.createHash("hunter2"),
                    "Alex", "Webber", "654321-5454-23", "Harvard University", 10000);
            investor1.setMySchool(schools.findFirstByName(investor1.getSchool()));
            Investor investor2 = new Investor("charlottegraham@gmail.com", PasswordStorage.createHash("hunter2"),
                    "Charlotte", "Graham", "928374-8290-93", "Brown University", 10000);
            investor2.setMySchool(schools.findFirstByName(investor2.getSchool()));
            Investor investor3 = new Investor("edenhazard@gmail.com", PasswordStorage.createHash("hunter2"),
                    "Eden", "Hazard", "832938-9392-72", "University of Oxford", 10000);
            investor3.setMySchool(schools.findFirstByName(investor3.getSchool()));
            Investor investor4 = new Investor("garethbale@gmail.com", PasswordStorage.createHash("hunter2"),
                    "Gareth", "Bale", "823746-4321-32", "Rhode Island School of Design", 10000);
            investor4.setMySchool(schools.findFirstByName(investor4.getSchool()));
            investors.save(investor);
            investors.save(investor1);
            investors.save(investor2);
            investors.save(investor3);
            investors.save(investor4);
        }

//        add seed data (student)
        if (students.count() == 0) {
            Student student = new Student("stevenburris@gmail.com", PasswordStorage.createHash("hunter2"), "Steven", "Burris",
                    "College of Charleston", Student.Level.UNDERGRADUATE, "This is filler info. I have no idea what to type here, so I'll stop.",
                    "Porter-Gaud", "4", "Accounting", "French", "123456-1234-12");
            student.setMySchool(schools.findFirstByName(student.getSchool()));
            Student student1 = new Student("rossboatwright@gmail.com", PasswordStorage.createHash("hunter2"),
                    "Ross", "Boatwright", "Massachusetts Institute of Technology", Student.Level.GRADUATE,
                    "This is filler info. I have no idea what to type here, so I'll stop.", "Wando", "4", "Finance", "Spanish",
                    "527362-4253-32");
            student1.setMySchool(schools.findFirstByName(student1.getSchool()));
            Student student2 = new Student("seanseabrook@gmail.com", PasswordStorage.createHash("hunter2"), "Sean", "Burris",
                    "Pepperdine University", Student.Level.UNDERGRADUATE, "This is filler info. I have no idea what to type here, so I'm going to stop.",
                    "James Island", "3.5", "Project Management", null, "928374-2378-42");
            student2.setMySchool(schools.findFirstByName(student2.getSchool()));
            students.save(student);
            students.save(student1);
            students.save(student2);

        }


//        add seed data (schools)
        if (schools.count() == 0) {
            School school = new School("College of Charleston", "66 George Street", "Charleston", "SC", "29424", "USA",
                    "843.805.5507", "images/cofc.jpg", "http://www.cofc.edu/");
            School school1 = new School("University of South Carolina", "816 Bull Street", "Columbia", "SC", "29208", "USA",
                    "803.777.0169", "images/carolina.jpg", "http://www.sc.edu/");
            School school2 = new School("Harvard University", "86 Brattle Street", "Cambridge", "MA", "02138", "USA",
                    "617.495.1000", "images/harvard.jpg", "http://www.harvard.edu/");
            School school3 = new School("University of Virginia", "190 McCormick Road", "Charlottesville", "VA", "22903", "USA",
                    "434.924.0311", "images/uva.png", "http://www.virginia.edu/");
            School school4 = new School("University of Oxford", "University Offices", "Wellington Square", "Oxford", "OX1 2JD", "United Kingdom",
                    "44.1865.270000", "images/oxford.jpg", "http://www.ox.ac.uk/");
            School school5 = new School("Pepperdine University", "24255 Pacific Coast Hwy", "Malibu", "CA", "90263", "USA",
                    "310.506.4000", "images/pepperdine.png", "https://www.pepperdine.edu/");
            School school6 = new School("Massachusetts Institute of Technology", "77 Massachusetts Ave", "Cambridge", "MA", "02139", "USA",
                    "617.253.1000", "images/mit.png", "http://web.mit.edu/");
            School school7 = new School("Dartmouth College", "10 North Main Street", "Hanover", "New Hampshire", "03755", "USA",
                    "603.646.2875", "images/dartmouth.png", "http://dartmouth.edu/");
            School school8 = new School("Rhode Island School of Design", "2 College St", "Providence", "RI", "02903", "USA",
                    "401.454.6100", "images/risd-logo.png", "http://www.risd.edu/");
            School school9 = new School("Brown University", "69 Brown Street", "Providence", "RI", "02912", "USA",
                    "401.863.1000", "images/brown-logo.png", "https://www.brown.edu/");
            schools.save(school);
            schools.save(school1);
            schools.save(school2);
            schools.save(school3);
            schools.save(school4);
            schools.save(school5);
            schools.save(school6);
            schools.save(school7);
            schools.save(school8);
            schools.save(school9);
        }
    }

    @PreDestroy
//    kill h2 server
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
        session.setAttribute("isInvestor", false);
        session.setAttribute("time", LocalDate.now());
        return new ResponseEntity<Student>(studentFromH2, HttpStatus.OK);
    }

//    Investor login route
    @RequestMapping(path = "/investorlogin", method = RequestMethod.POST)
    public ResponseEntity<Investor> investorLogin(HttpSession session, @RequestBody Investor investor)
            throws PasswordStorage.InvalidHashException, PasswordStorage.CannotPerformOperationException {

//        check the database for the investor's username
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
        session.setAttribute("isInvestor", true);
        session.setAttribute("time", LocalDate.now());
        return new ResponseEntity<Investor>(investorFromH2, HttpStatus.OK);
    }

//    route to get the logged in student object
    @RequestMapping(path = "/currentstudent", method = RequestMethod.GET)
    public ResponseEntity<Student> getCurrentStudent(HttpSession session) {
        String name = (String) session.getAttribute("username");
        Student student = students.findFirstByUsername(name);
        if (student == null) {
            return new ResponseEntity<Student>(HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<Student>(student, HttpStatus.OK);
    }

//    route to get the logged in investor object
    @RequestMapping(path = "/currentinvestor", method = RequestMethod.GET)
    public ResponseEntity<Investor> getCurrentInvestor(HttpSession session) {
        String name = (String) session.getAttribute("username");
        Investor investor = investors.findFirstByUsername(name);
        if (investor == null) {
            return new ResponseEntity<Investor>(HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<Investor>(investor, HttpStatus.OK);
    }

//    logout route for students and investors
    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public ResponseEntity logout(HttpSession session) {
        session.invalidate();
        return new ResponseEntity(HttpStatus.OK);
    }

//    create student user route
    @RequestMapping(path = "/student", method = RequestMethod.POST)
    public ResponseEntity<Student> createStudent(HttpSession session, @RequestBody Student student)
            throws PasswordStorage.CannotPerformOperationException {

//        check the database for the student's username
        Student studentFromDB = students.findFirstByUsername(student.getUsername());
        if (studentFromDB == null) {
            studentFromDB = new Student(student.getUsername(),PasswordStorage.createHash(student.getPassword()),
                    student.getFirstName(), student.getLastName(), student.getSchool(), student.getLevel(),
                    student.getBio(), student.getHighSchool(), student.getGpa(),
                    student.getMajor(), student.getMinor(), student.getSsn());
            studentFromDB.setMySchool(schools.findFirstByName(student.getSchool()));
            studentFromDB.setBalance(0);
            students.save(studentFromDB);
        }
//        if the username already exists in the database, throw an error
        else {
            return new ResponseEntity<Student>(HttpStatus.IM_USED);
        }

//        set attributes and send 200
        session.setAttribute("username", studentFromDB.getUsername());
        session.setAttribute("isInvestor", false);
        session.setAttribute("time", LocalDate.now());
        return new ResponseEntity<Student>(studentFromDB, HttpStatus.OK);
    }

//    Route to create loan
    @RequestMapping(path = "/postloan", method = RequestMethod.POST)
    public ResponseEntity<Student> createLoan (HttpSession session, @RequestBody Loan loan) {
//        get the student's username
        String name = (String) session.getAttribute("username");
//        find the student from username
        Student student = students.findFirstByUsername(name);

//        if student isn't logged in, throw an error
        if (student == null) {
            return new ResponseEntity<Student>(HttpStatus.FORBIDDEN);
        }

//        save the loan to the student
        loans.save(loan);
        Loan theLoan = loans.findOne(loan.getId());
        student.setLoan(theLoan);
        students.save(student);
        Student student1 = students.findFirstByUsername(name);
        return new ResponseEntity<Student>(student1, HttpStatus.OK);
    }

//    create investor user route
    @RequestMapping(path = "/investor", method = RequestMethod.POST)
    public ResponseEntity<Investor> createInvestor(HttpSession session, @RequestBody Investor investor)
            throws PasswordStorage.CannotPerformOperationException {

//        check the database for the investor's username
        Investor investorFromDB = investors.findFirstByUsername(investor.getUsername());
        if (investorFromDB == null) {
            investorFromDB = new Investor(investor.getUsername(),PasswordStorage.createHash(investor.getPassword()),
                    investor.getFirstName(),investor.getLastName(),investor.getSsn(),investor.getSchool(),0.00);
            investorFromDB.setMySchool(schools.findFirstByName(investor.getSchool()));
            investors.save(investorFromDB);
        }
//        if the username already exists in the database, throw an error
        else {
            return new ResponseEntity<Investor>(HttpStatus.IM_USED);
        }
        Investor investor1 = investors.findOne(investorFromDB.getId());
//        set attributes and send 200
        session.setAttribute("username", investor1.getUsername());
        session.setAttribute("isInvestor", true);
        session.setAttribute("time", LocalDate.now());
        return new ResponseEntity<Investor>(investor1, HttpStatus.OK);
    }

//    route for posting payments on loan
    @RequestMapping(path = "/payment", method = RequestMethod.POST)
    public ResponseEntity<Payment> makePayment(HttpSession session, @RequestBody Payment payment) {
//        retrieve username from session attribute
        String name = (String) session.getAttribute("username");
//        make sure the student is logged in
        Student student = students.findFirstByUsername(name);
        if (student == null) {
            return new ResponseEntity<Payment>(HttpStatus.FORBIDDEN);
        }
//      get the loan from the student
        Loan loan = student.getLoan();

//        get the payment balance, add the new payment to it and save the new payments balance
        double paymentBalance = loan.getPaymentBalance();
        double thePayment = Double.parseDouble(payment.getPayment());
        double newPaymentBalance = paymentBalance + thePayment;
        loan.setPaymentBalance(newPaymentBalance);

//        calculate new loan balance and save it to the loan
        double newBalance = newLoanBalance(loan);
        loan.setPrincipalBalance(String.valueOf(newBalance));

//        Set the new loan balance in the payment, so that it can be retrieved when the payment object
//        is returned
        payment.setNewBalance(String.valueOf(newBalance));

//        save the payment
        payments.save(payment);

//        return the payment object and a 200
        return new ResponseEntity<Payment>(payment, HttpStatus.OK);
    }

    @RequestMapping(path = "/investment", method = RequestMethod.POST)
    public ResponseEntity<Investor> postInvestment(HttpSession session, String amount, String loanId) {
//        get the username from session attribute
        String name = (String) session.getAttribute("username");
//        make sure the investor is logged in
        Investor investor = investors.findFirstByUsername(name);
        if (investor == null) {
            return new ResponseEntity<Investor>(HttpStatus.FORBIDDEN);
        }
//        if the investor is logged in, let them invest in a loan
//        first parse the investment amount as a double and find the loan they're investing in
        Double investmentAmount = Double.parseDouble(amount);
        Loan loan = loans.findOne(Integer.parseInt(loanId));
//        after the loan has been found, parse the available investment amount as a double
//        and make sure that the amount they want to invest is not larger than the available investment amount
        Double loanGoal = Double.parseDouble(loan.getLoanGoal());
        Double availableBalance = loanGoal - Double.parseDouble(loan.getPrincipalBalance());
        if (investmentAmount > availableBalance) {
            return new ResponseEntity<Investor>(HttpStatus.CONFLICT);
        }
//        if the portion amount is not larger than the available investment balance,
//        allow the investor to make an investment
        Double newLoanBalance = Double.parseDouble(loan.getPrincipalBalance()) + investmentAmount;
        if ((loanGoal - newLoanBalance) == 0) {
            loan.setFunded(true);
            loan.setInitiationDate(LocalDate.now());
            LocalDate today = LocalDate.now();
            LocalDate gracePeriod = today.plusYears(4);
            loan.setGracePeriodLength(today.until(gracePeriod).getMonths());
            LocalDate finishDate = today.plusYears(14);
            loan.setFinishDate(finishDate);
            loan.setPrincipalBalance(String.valueOf(newLoanBalance));
            loan.setMonthlyPayment(String.valueOf(monthlyPayment(loan)));
        }
        loan.setPrincipalBalance(String.valueOf(newLoanBalance));
        loans.save(loan);
        Investment investment = new Investment(investmentAmount, loan);
        investments.save(investment);
        List<Investment> myInvestments = investor.getInvestments();
        myInvestments.add(investment);
        investor.setInvestments(myInvestments);
        investors.save(investor);

        return new ResponseEntity<Investor>(investor, HttpStatus.OK);
    }

//  route to retrieve all of the investor objects as an array list
    @RequestMapping(path = "/investors", method = RequestMethod.GET)
    public ResponseEntity<ArrayList<Investor>> getInvestors() {
        ArrayList<Investor> investorArrayList = (ArrayList<Investor>) investors.findAll();
        return new ResponseEntity<ArrayList<Investor>>(investorArrayList, HttpStatus.OK);
    }

//    route to retrieve all of the students in an array list
    @RequestMapping(path = "/students", method = RequestMethod.GET)
    public ResponseEntity<ArrayList<Student>> getStudents() {
        ArrayList<Student> studentArrayList = (ArrayList<Student>) students.findAll();
        return new ResponseEntity<ArrayList<Student>>(studentArrayList, HttpStatus.OK);
    }

//    route to retrieve all of the loans in an array list
    @RequestMapping(path = "/loans", method = RequestMethod.GET)
    public ResponseEntity<ArrayList<Loan>> getLoans() {
        ArrayList<Loan> loanArrayList = (ArrayList<Loan>) loans.findAll();
        return new ResponseEntity<ArrayList<Loan>>(loanArrayList, HttpStatus.OK);
    }

//    route to retrieve all of the loan investment portions in an array list
    @RequestMapping(path = "/investments", method = RequestMethod.GET)
    public ResponseEntity<ArrayList<Investment>> getPortions() {
        ArrayList<Investment> investmentArrayList = (ArrayList<Investment>) investments.findAll();
        return new ResponseEntity<ArrayList<Investment>>(investmentArrayList, HttpStatus.OK);
    }

//    route to retrieve all of the school objects
    @RequestMapping(path = "/schools", method = RequestMethod.GET)
    public ResponseEntity<ArrayList<School>> getSchools() {
        ArrayList<School> schoolArrayList = (ArrayList<School>) schools.findAll();
        return new ResponseEntity<ArrayList<School>>(schoolArrayList, HttpStatus.OK);
    }

//    method to calculate the monthly payment
    public static double monthlyPayment(Loan loan) {
//        get the necessary fields
        double apr = Double.parseDouble(loan.getApr());
        double gracePeriod = loan.getGracePeriodLength();
        double n = Double.parseDouble(loan.getNumberOfPeriods());
        double loanAmount = Double.parseDouble(loan.getLoanGoal());

//        get the periodic interest rate from the annual percentage rate
        double decimal = apr / 100.00;
        double i = decimal / 12;
        loan.setMonthlyInterest(i);

//        add interest accrued over the grace period to the principal balance
        double newPrincipalBalance = ((i * loanAmount) * gracePeriod) + loanAmount;

//        calculate the payment made each month
        double monthlyPayment = (newPrincipalBalance * (i * (Math.pow((1 + i), n)))) /
                (Math.pow((1 + i), n) - 1);

//        round the payment to the nearest 100th place
        double actualPayment = Math.round(monthlyPayment * 100.00) / 100.00;
        return actualPayment;
    }

//    method to find the total

    public static double newLoanBalance(Loan loan) {
//        get the necessary fields out of the loan
        double principalBalance = Double.parseDouble(loan.getPrincipalBalance());
        double i = loan.getMonthlyInterest();
        double payment = Double.parseDouble(loan.getMonthlyPayment());

//        find the interest amount of the payment by multiplying the monthly interest rate
//          by the loan's principal balance
        double interestPortion = principalBalance * i;

        return 00.00;
    }
}

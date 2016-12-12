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
import java.util.HashMap;
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
        h2 = Server.createWebServer("-webPort", "80").start();

//        if images folder doesn't exist, create it
        File f = new File("public/images");
        if (!f.exists()) {
            File dir = new File("public/images");
            dir.mkdir();
        }

        //        add seed data (schools)
        if (schools.count() == 0) {
            School school = new School("College of Charleston", "66 George Street", "Charleston", "SC", "29424", "USA",
                    "843.805.5507", "images/cofc.jpg", "http://www.cofc.edu/", "cofc");
            School school1 = new School("University of South Carolina", "816 Bull Street", "Columbia", "SC", "29208", "USA",
                    "803.777.0169", "images/carolina.jpg", "http://www.sc.edu/", "usc");
            School school2 = new School("Harvard University", "86 Brattle Street", "Cambridge", "MA", "02138", "USA",
                    "617.495.1000", "images/harvard.jpg", "http://www.harvard.edu/", "harvard");
            School school3 = new School("University of Virginia", "190 McCormick Road", "Charlottesville", "VA", "22903", "USA",
                    "434.924.0311", "images/uva.png", "http://www.virginia.edu/", "uva");
            School school4 = new School("University of Oxford", "University Offices", "Wellington Square", "Oxford", "OX1 2JD", "United Kingdom",
                    "44.1865.270000", "images/oxford.jpg", "http://www.ox.ac.uk/", "oxford");
            School school5 = new School("Pepperdine University", "24255 Pacific Coast Hwy", "Malibu", "CA", "90263", "USA",
                    "310.506.4000", "images/pepperdine.png", "https://www.pepperdine.edu/", "pepper");
            School school6 = new School("Massachusetts Institute of Technology", "77 Massachusetts Ave", "Cambridge", "MA", "02139", "USA",
                    "617.253.1000", "images/mit.png", "http://web.mit.edu/", "mit");
            School school7 = new School("Dartmouth College", "10 North Main Street", "Hanover", "New Hampshire", "03755", "USA",
                    "603.646.2875", "images/dartmouth.png", "http://dartmouth.edu/", "dart");
            School school8 = new School("Rhode Island School of Design", "2 College St", "Providence", "RI", "02903", "USA",
                    "401.454.6100", "images/risd-logo.png", "http://www.risd.edu/", "ri");
            School school9 = new School("Brown University", "69 Brown Street", "Providence", "RI", "02912", "USA",
                    "401.863.1000", "images/brown-logo.png", "https://www.brown.edu/", "brown");
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

        //        add seed data (student)
        if (students.count() == 0) {
            Student student = new Student("stevenburris@gmail.com", PasswordStorage.createHash("hunter2"), "Steven", "Burris",
                    "College of Charleston", Student.Level.UNDERGRADUATE, "This is filler info. I have no idea what to type here, so I'll stop.",
                    "Porter-Gaud", "4", "Accounting", "French", "123456-1234-12", 2000);
            student.setMySchool(schools.findFirstByName(student.getSchool()));
            Loan loan = new Loan("20000", "5", "1");
            postLoan(student, loan);

            Student student1 = new Student("rossboatwright@gmail.com", PasswordStorage.createHash("hunter2"),
                    "Ross", "Boatwright", "Massachusetts Institute of Technology", Student.Level.GRADUATE,
                    "This is filler info. I have no idea what to type here, so I'll stop.", "Wando", "4", "Finance", "Spanish",
                    "527362-4253-32", 2000);
            student1.setMySchool(schools.findFirstByName(student1.getSchool()));
            Loan loan1 = new Loan("30000", "10", "4");
            postLoan(student1, loan1);

            Student student2 = new Student("seanseabrook@gmail.com", PasswordStorage.createHash("hunter2"), "Sean", "Burris",
                    "Pepperdine University", Student.Level.UNDERGRADUATE, "This is filler info. I have no idea what to type here, so I'm going to stop.",
                    "James Island", "3.5", "Project Management", "Spanish", "928374-2378-42", 2000);
            student2.setMySchool(schools.findFirstByName(student2.getSchool()));
            Loan loan2 = new Loan("50000", "8", "2");
            postLoan(student2, loan2);

            Student student3 = new Student("mikebrown@gmail.com", PasswordStorage.createHash("hunter2"), "Mike", "Brown",
                    "Dartmouth College", Student.Level.UNDERGRADUATE,
                    "My name is Michael Brown. I'm 18 years old and a senior at Wando, and I have been accepted to Dartmouth in the Fall.  I am going to be studying biology with the hopes of continuing to get my MD.",
                    "Wando", "3.7", "Biology", "Chemistry", "648935-4235-42", 2000);
            student3.setMySchool(schools.findFirstByName(student3.getSchool()));
            Loan loan3 = new Loan("40000", "10", "4");
            postLoan(student3, loan3);

            Student student4 = new Student("zachthomas@gmail.com", PasswordStorage.createHash("hunter2"), "Zach", "Thomas",
                    "Brown University", Student.Level.UNDERGRADUATE, "My name is Zach Thomas. I just graduated from Woodberry Forest School and I'm currently taking a gap year to do some traveling." +
                    "I have been accepted to Brown for the fall of 2017, and I will be studying Finance.", "Woodberry Forest School", "3.8",
                    "Finance", "Marketing", "478392-1038-38", 2000);
            student4.setMySchool(schools.findFirstByName(student4.getSchool()));
            Loan loan4 = new Loan("20000", "4", "2");
            postLoan(student4, loan4);

            Student student5 = new Student("barrydaniels@gmail.com", PasswordStorage.createHash("hunter2"), "Barry", "Daniels",
                    "University of Oxford", Student.Level.GRADUATE, "My name is Barry Daniels. I'm a recent graduate of Newberry and The Iron Yard, and" +
                    "I've been accepted to Oxford for the graduate literature program.", "Christ School", "3.4",
                    "British Literature", "Comparative Literature", "378242-7293-28", 2000);
            student5.setMySchool(schools.findFirstByName(student5.getSchool()));
            Loan loan5 = new Loan("30000", "5", "2");
            postLoan(student5, loan5);

            Student student6 = new Student("victorguy@gmail.com", PasswordStorage.createHash("hunter2"), "Victor", "Guy",
                    "College of Charleston", Student.Level.UNDERGRADUATE, "My name is Victor, I went to West Ashley High School and graduated early." +
                    "I've been accepted to the College of Charleston to study Computer Information Systems in the fall of 2017.", "West Ashley High School",
                    "3.33", "Computer Information Systems", "Decision Sciences", "289432-4283-90", 2000);
            student6.setMySchool(schools.findFirstByName(student6.getSchool()));
            Loan loan6 = new Loan("45000", "6", "4");
            postLoan(student6, loan6);

            Student student7 = new Student("thomasdonaldson@gmail.com", PasswordStorage.createHash("hunter2"), "Thomas", "Donaldson",
                    "University of Virginia", Student.Level.GRADUATE, "My name is Thomas and I recently graduated from Clemson University with a B.S." +
                    " in Engineering.  I've been accepted to UVA's graduate school to persue my masters in Engineering.", "Porter-Gaud School",
                    "3.12", "Engineering", "Mandarin", "639483-3489-23", 2000);
            student7.setMySchool(schools.findFirstByName(student7.getSchool()));
            Loan loan7 = new Loan("32000", "10", "4");
            postLoan(student7, loan7);

            Student student8 = new Student("travishunter@gmail.com", PasswordStorage.createHash("hunter2"), "Travis", "Hunter",
                    "University of South Carolina", Student.Level.UNDERGRADUATE, "My name is Travis. I'm a senior at Wando High School, " +
                    "and I'll be attending USC in the Fall. I plan on majoring in Chemistry and would like to study chemical engineering.",
                    "Wando High School", "3.31", "Chemistry", "Engineering", "327992-2378-73", 2000);
            student8.setMySchool(schools.findFirstByName(student8.getSchool()));
            Loan loan8 = new Loan("27000", "5", "1");
            postLoan(student8, loan8);

            Student student9 = new Student("josegonzales@gmail.com", PasswordStorage.createHash("hunter2"), "Jose", "Gonzales",
                    "University of South Carolina", Student.Level.UNDERGRADUATE, "My name is Jose, and I'm a senior at West Ashley High School. " +
                    "I'll be attending USC in the Fall, and I'll be studying Accounting.", "West Ashley High School", "3.72",
                    "Accounting", "Finance", "128378-2387-37", 2000);
            student9.setMySchool(schools.findFirstByName(student9.getSchool()));
            Loan loan9 = new Loan("39000", "8", "3");
            postLoan(student9, loan9);

            Student student10 = new Student("conradjones@gmail.com", PasswordStorage.createHash("hunter2"), "Conrad", "Jones",
                    "Harvard University", Student.Level.GRADUATE, "My name is Conrad Jones, and I recently graduated from Brown. " +
                    "I'll be attending Harvard Law in the Fall.", "Woodberry Forest School", "3.98", "Tax Law", "Accounting",
                    "234979-2234-82", 2000);
            student10.setMySchool(schools.findFirstByName(student10.getSchool()));
            Loan loan10 = new Loan("80000", "10", "4");
            postLoan(student10, loan10);

            Student student11 = new Student("danielschwartz@gmail.com", PasswordStorage.createHash("hunter2"), "Daniel", "Schwartz",
                    "Pepperdine University", Student.Level.UNDERGRADUATE, "My name is Daniel, and I'm a senior at Charleston Collegiate. " +
                    "I'll be attending Pepperdine in the Fall to study theatre.", "Charleston Collegiate School", "3.11",
                    "Theatre", "Music Theory", "149872-2387-74", 2000);
            student11.setMySchool(schools.findFirstByName(student11.getSchool()));
            Loan loan11 = new Loan("73000", "9", "3");
            postLoan(student11, loan11);

            Student student12 = new Student("georgesmythe@gmail.com", PasswordStorage.createHash("hunter2"), "George", "Smythe",
                    "Rhode Island School of Design", Student.Level.UNDERGRADUATE, "My name is George and I'm a senior at Porter-Gaud School. " +
                    "I'll be attending RISD in the Fall, and I'll be studying graphic design.", "Porter-Gaud School", "3.44",
                    "Graphic Design", "Computer Science", "928352-2794-23", 2000);
            student12.setMySchool(schools.findFirstByName(student12.getSchool()));
            Loan loan12 = new Loan("38000", "6", "2");
            postLoan(student12, loan12);

            Student student13 = new Student("williamthompson@gmail.com", PasswordStorage.createHash("hunter2"), "William", "Thompson",
                    "University of South Carolina", Student.Level.UNDERGRADUATE, "My name is William Thompson, and I'm a senior at " +
                    "Bishop England High School. I'm attending USC in the fall, and I'll be studying Business Administration.",
                    "Bishop England High School", "3.65", "Business Administration", "French", "293847-4297-02", 2000);
            student13.setMySchool(schools.findFirstByName(student13.getSchool()));
            Loan loan13 = new Loan("14500", "5", "2");
            postLoan(student13, loan13);

            Student student14 = new Student("richardsalmons@gmail.com", PasswordStorage.createHash("hunter2"), "Richard", "Salmons",
                    "Pepperdine University", Student.Level.UNDERGRADUATE, "My name is Richard Salmons, and I'm a senior at Wando High School. " +
                    "I'll be attending Pepperdine in the Fall, and I plan on majoring in Communications.", "Wando High School", "3.12",
                    "Communications", "Spanish", "419723-3178-31", 2000);
            student14.setMySchool(schools.findFirstByName(student14.getSchool()));
            Loan loan14 = new Loan("28000", "8", "4");
            postLoan(student14, loan14);

            students.save(student);
            students.save(student1);
            students.save(student2);
            students.save(student3);
            students.save(student4);
            students.save(student5);
            students.save(student6);
            students.save(student7);
            students.save(student8);
            students.save(student9);
            students.save(student10);
            students.save(student11);
            students.save(student12);
            students.save(student13);
        }

//        add seed data (investor)
        if (investors.count() == 0) {
            Investor investor = new Investor("stevenburris@gmail.com", PasswordStorage.createHash("hunter2"),
                    "Steven", "Burris", "219089-4322-32", "College of Charleston", 1000000);
            investor.setMySchool(schools.findFirstByName(investor.getSchool()));
            Investor investor1 = new Investor("alexwebber@gmail.com", PasswordStorage.createHash("hunter2"),
                    "Alex", "Webber", "654321-5454-23", "Harvard University", 500000);
            investor1.setMySchool(schools.findFirstByName(investor1.getSchool()));
            Investor investor2 = new Investor("charlottegraham@gmail.com", PasswordStorage.createHash("hunter2"),
                    "Charlotte", "Graham", "928374-8290-93", "Brown University", 200000);
            investor2.setMySchool(schools.findFirstByName(investor2.getSchool()));
            Investor investor3 = new Investor("edenhazard@gmail.com", PasswordStorage.createHash("hunter2"),
                    "Eden", "Hazard", "832938-9392-72", "University of Oxford", 400000);
            investor3.setMySchool(schools.findFirstByName(investor3.getSchool()));
            Investor investor4 = new Investor("garethbale@gmail.com", PasswordStorage.createHash("hunter2"),
                    "Gareth", "Bale", "823746-4321-32", "Rhode Island School of Design", 600000);
            investor4.setMySchool(schools.findFirstByName(investor4.getSchool()));
            investors.save(investor);
            investors.save(investor1);
            investors.save(investor2);
            investors.save(investor3);
            investors.save(investor4);
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

        postLoan(student, loan);

        return new ResponseEntity<Student>(student, HttpStatus.OK);
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

//        if the student's balance is too low, don't let them make a payment

//        repay the investors' principal
        List<Investment> investmentArrayList = loan.getInvestments();
        double principalPayment = principalPortion(loan);
        payment.setPrincipal(String.valueOf(principalPayment));
        for (Investment investment : investmentArrayList) {
            double percent = Double.parseDouble(investment.getAmount()) / Double.parseDouble(loan.getLoanGoal());
            double amountOwed = principalPayment * percent;
            double amountPaid = Math.round(amountOwed * 100.00) / 100.00;
            investment.setPrincipalRepaid(amountPaid);
            investments.save(investment);
        }

//        pay the investors' interest
        double interestPayment = interestPortion(loan);
        payment.setInterest(String.valueOf(interestPayment));
        for (Investment investment : investmentArrayList) {
            double percent = Double.parseDouble(investment.getAmount()) / Double.parseDouble(loan.getLoanGoal());
            double amountOwed = percent * interestPayment;
            double amountPaid = Math.round(amountOwed * 100.00) / 100.00;
            investment.setInterestPaid(amountPaid);
            investments.save(investment);
        }

//        update the investors's balance to reflect the payment
        ArrayList<Investor> investorArrayList = (ArrayList<Investor>) investors.findAll();
        for (Investor investor : investorArrayList) {
            List<Investment> investmentArrayList1 = investor.getInvestments();
            for (Investment investment : investmentArrayList1) {
                double interestPaid = investment.getInterestPaid();
                double principalPaid = investment.getPrincipalRepaid();
                double balance = investor.getBalance();
                double newBalance = principalPaid + interestPaid + balance;
                investor.setPrincipalPaid(principalPaid);
                investor.setInterestPaid(interestPaid);
                investor.setBalance(newBalance);
                investors.save(investor);
            }
        }

//        calculate new loan balance and save it to the loan
        double newBalance = newLoanBalance(loan);
        loan.setPrincipalBalance(String.valueOf(newBalance));

//        Set the new loan balance in the payment, so that it can be retrieved when the payment object
//        is returned
        payment.setNewBalance(String.valueOf(newBalance));

//        save the payment
        payment.setStudent(student);
        payments.save(payment);

//        repay investors
        Payment theActualPayment = payments.findOne(payment.getId());

//        return the payment object and a 200
        return new ResponseEntity<Payment>(theActualPayment, HttpStatus.OK);
    }

    @RequestMapping(path = "/investment", method = RequestMethod.POST)
    public ResponseEntity<Investor> postInvestment(HttpSession session, @RequestBody Investment investment) {
//        get the username from session attribute
        String name = (String) session.getAttribute("username");
//        make sure the investor is logged in
        Investor investor = investors.findFirstByUsername(name);
        if (investor == null) {
            return new ResponseEntity<Investor>(HttpStatus.FORBIDDEN);
        }
//        if the investor is logged in, let them invest in a loan
//        first parse the investment amount as a double and find the loan they're investing in
        double investmentAmount = Double.parseDouble(investment.getAmount());
        if (investmentAmount == 0) {
            return new ResponseEntity<Investor>(HttpStatus.PAYMENT_REQUIRED);
        }
        double investorBalance = investor.getBalance();
        if (investmentAmount > investorBalance) {
            return new ResponseEntity<Investor>(HttpStatus.I_AM_A_TEAPOT);
        }
        Loan loan = loans.findOne(Integer.parseInt(investment.getLoanId()));
//        after the loan has been found, parse the available investment amount as a double
//        and make sure that the amount they want to invest is not larger than the available investment amount
        double loanGoal = Double.parseDouble(loan.getLoanGoal());
        double availableBalance = loanGoal - Double.parseDouble(loan.getPrincipalBalance());
        if (investmentAmount > availableBalance) {
            return new ResponseEntity<Investor>(HttpStatus.CONFLICT);
        }
//        if the portion amount is not larger than the available investment balance,
//        allow the investor to make an investment
        double newLoanBalance = Double.parseDouble(loan.getPrincipalBalance()) + investmentAmount;
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
        List<Investment> loanInvestments = loan.getInvestments();
        Investment theInvestment = new Investment(String.valueOf(investmentAmount), investment.getLoanId());
        investments.save(theInvestment);
        loanInvestments.add(theInvestment);
        loans.save(loan);

        List<Investment> myInvestments = investor.getInvestments();
        myInvestments.add(theInvestment);
        double balance = investor.getBalance();
        double newBalance = balance - investmentAmount;
        investor.setBalance(newBalance);
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

    @RequestMapping(path = "/students", method = RequestMethod.GET)
    public ResponseEntity<ArrayList<Student>> getStudents() {
        ArrayList<Student> studentList = new ArrayList<>();
        for (Student student : students.findAll()) {
            if(!student.getLoan().isFunded()) {
                studentList.add(student);
            }
        }
        return new ResponseEntity<ArrayList<Student>>(studentList, HttpStatus.OK);
    }

//    route to retrieve all of the students in an array list
    @RequestMapping(path = "/students/{search}/{value:.+}", method = RequestMethod.GET)
    public ResponseEntity<ArrayList<Student>> searchStudents(@PathVariable("search") String search, @PathVariable("value") String value) {
        ArrayList<Student> studentList = new ArrayList<>();
        if (search.equals("gpa")) {
            if(value != null) {
                double gpaSearch = Double.parseDouble(value);
                if (gpaSearch == 2.5) {
                    for (Student student : students.findAll()) {
                        double studentGpa = Double.parseDouble(student.getGpa());
                        if (studentGpa >= 2.5) {
                            if (!student.getLoan().isFunded()) {
                                studentList.add(student);
                            }
                        }
                    }
                } else if (gpaSearch == 2.6) {
                    for (Student student : students.findAll()) {
                        double studentGpa = Double.parseDouble(student.getGpa());
                        if (studentGpa >= 2.6) {
                            if (!student.getLoan().isFunded()) {
                                studentList.add(student);
                            }
                        }
                    }
                } else if (gpaSearch == 2.7) {
                    for (Student student : students.findAll()) {
                        double studentGpa = Double.parseDouble(student.getGpa());
                        if (studentGpa >= 2.7) {
                            if (!student.getLoan().isFunded()) {
                                studentList.add(student);
                            }
                        }
                    }
                } else if (gpaSearch == 2.8) {
                    for (Student student : students.findAll()) {
                        double studentGpa = Double.parseDouble(student.getGpa());
                        if (studentGpa >= 2.8) {
                            if (!student.getLoan().isFunded()) {
                                studentList.add(student);
                            }
                        }
                    }
                } else if (gpaSearch == 2.9) {
                    for (Student student : students.findAll()) {
                        double studentGpa = Double.parseDouble(student.getGpa());
                        if (studentGpa >= 2.9) {
                            if (!student.getLoan().isFunded()) {
                                studentList.add(student);
                            }
                        }
                    }
                } else if (gpaSearch == 3) {
                    for (Student student : students.findAll()) {
                        double studentGpa = Double.parseDouble(student.getGpa());
                        if (studentGpa >= 3) {
                            if (!student.getLoan().isFunded()) {
                                studentList.add(student);
                            }
                        }
                    }
                } else if (gpaSearch == 3.1) {
                    for (Student student : students.findAll()) {
                        double studentGpa = Double.parseDouble(student.getGpa());
                        if (studentGpa >= 3.1) {
                            if (!student.getLoan().isFunded()) {
                                studentList.add(student);
                            }
                        }
                    }
                } else if (gpaSearch == 3.2) {
                    for (Student student : students.findAll()) {
                        double studentGpa = Double.parseDouble(student.getGpa());
                        if (studentGpa >= 3.2) {
                            if (!student.getLoan().isFunded()) {
                                studentList.add(student);
                            }
                        }
                    }
                } else if (gpaSearch == 3.3) {
                    for (Student student : students.findAll()) {
                        double studentGpa = Double.parseDouble(student.getGpa());
                        if (studentGpa >= 3.3) {
                            if (!student.getLoan().isFunded()) {
                                studentList.add(student);
                            }
                        }
                    }
                } else if (gpaSearch == 3.4) {
                    for (Student student : students.findAll()) {
                        double studentGpa = Double.parseDouble(student.getGpa());
                        if (studentGpa >= 3.4) {
                            if (!student.getLoan().isFunded()) {
                                studentList.add(student);
                            }
                        }
                    }
                } else if (gpaSearch == 3.5) {
                    for (Student student : students.findAll()) {
                        double studentGpa = Double.parseDouble(student.getGpa());
                        if (studentGpa >= 3.5) {
                            if (!student.getLoan().isFunded()) {
                                studentList.add(student);
                            }
                        }
                    }
                } else if (gpaSearch == 3.6) {
                    for (Student student : students.findAll()) {
                        double studentGpa = Double.parseDouble(student.getGpa());
                        if (studentGpa >= 3.6) {
                            if (!student.getLoan().isFunded()) {
                                studentList.add(student);
                            }
                        }
                    }
                } else if (gpaSearch == 3.7) {
                    for (Student student : students.findAll()) {
                        double studentGpa = Double.parseDouble(student.getGpa());
                        if (studentGpa >= 3.7) {
                            if (!student.getLoan().isFunded()) {
                                studentList.add(student);
                            }
                        }
                    }
                } else if (gpaSearch == 3.8) {
                    for (Student student : students.findAll()) {
                        double studentGpa = Double.parseDouble(student.getGpa());
                        if (studentGpa >= 3.8) {
                            if (!student.getLoan().isFunded()) {
                                studentList.add(student);
                            }
                        }
                    }
                } else if (gpaSearch == 3.9) {
                    for (Student student : students.findAll()) {
                        double studentGpa = Double.parseDouble(student.getGpa());
                        if (studentGpa >= 3.9) {
                            if (!student.getLoan().isFunded()) {
                                studentList.add(student);
                            }
                        }
                    }
                } else {
                    for (Student student : students.findAll()) {
                        double studentGpa = Double.parseDouble(student.getGpa());
                        if (studentGpa >= 4) {
                            if (!student.getLoan().isFunded()) {
                                studentList.add(student);
                            }
                        }
                    }
                }
            }
        }
        else if (search.equals("school")) {
            if (value != null) {
                int id = Integer.parseInt(value);
                for (Student student : students.findAll()) {
                    int school = student.getMySchool().getId();
                    if (school == id) {
                        if (!student.getLoan().isFunded()) {
                            studentList.add(student);
                        }
                    }
                }
            }
        }
        else {
            for (Student student : students.findAll()) {
                if (!student.getLoan().isFunded()) {
                    studentList.add(student);
                }
            }
        }

        return new ResponseEntity<ArrayList<Student>>(studentList, HttpStatus.OK);
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

//    method to calculate new loan balance

    public static double newLoanBalance(Loan loan) {
//        get the necessary fields out of the loan
        double principalBalance = Double.parseDouble(loan.getPrincipalBalance());
        double i = loan.getMonthlyInterest();
        double payment = Double.parseDouble(loan.getMonthlyPayment());

//        find the interest amount of the payment by multiplying the monthly interest rate
//          by the loan's principal balance
        double interestPortion = principalBalance * i;
        double principalPortion = payment - (Math.round(interestPortion * 100.00) / 100.00);
        double newBalance = principalBalance - principalPortion;
        return newBalance;
    }

    public static double interestPortion(Loan loan) {
//        get the necessary fields out of the loan
        double principalBalance = Double.parseDouble(loan.getPrincipalBalance());
        double i = loan.getMonthlyInterest();
        double payment = Double.parseDouble(loan.getMonthlyPayment());

//        find the interest portion of the loan
        double interestPortion = principalBalance * i;
        return (Math.round(interestPortion * 100.00) / 100.00);
    }

    public static double principalPortion(Loan loan) {
        //        get the necessary fields out of the loan
        double principalBalance = Double.parseDouble(loan.getPrincipalBalance());
        double i = loan.getMonthlyInterest();
        double payment = Double.parseDouble(loan.getMonthlyPayment());

//        find the interest amount of the payment by multiplying the monthly interest rate
//          by the loan's principal balance
        double interestPortion = principalBalance * i;
        double principalPortion = payment - interestPortion;
        return Math.round(principalPortion * 100.00) / 100;
    }

    public void postLoan(Student student, Loan loan) {
        //        set the apr based on the loan's goal
        double loanGoal = Double.parseDouble(loan.getLoanGoal());
        if(0 < loanGoal && loanGoal <= 5000) {
            loan.setApr("2");
        }
        else if (5001 <= loanGoal && loanGoal <= 10000) {
            loan.setApr("2.1");
        }
        else if (10001 <= loanGoal && loanGoal <= 15000) {
            loan.setApr("2.2");
        }
        else if (15001 <= loanGoal && loanGoal <= 20000) {
            loan.setApr("2.3");
        }
        else if (20001 <= loanGoal && loanGoal <= 25000) {
            loan.setApr("2.4");
        }
        else if (25001 <= loanGoal && loanGoal <= 30000) {
            loan.setApr("2.5");
        }
        else if (30001 <= loanGoal && loanGoal <= 35000) {
            loan.setApr("2.6");
        }
        else if (35001 <= loanGoal && loanGoal <= 40000) {
            loan.setApr("2.7");
        }
        else if (40001 <= loanGoal && loanGoal <= 45000) {
            loan.setApr("2.8");
        }
        else if (45001 <= loanGoal && loanGoal <= 50000) {
            loan.setApr("2.9");
        }
        else if (50001 <= loanGoal && loanGoal <= 55000) {
            loan.setApr("3");
        }
        else if (55001 <= loanGoal && loanGoal <= 60000) {
            loan.setApr("3.1");
        }
        else if (60001 <= loanGoal && loanGoal <= 70000) {
            loan.setApr("3.2");
        }
        else if (70001 <= loanGoal && loanGoal <= 80000) {
            loan.setApr("3.3");
        }
        else if (80001 <= loanGoal && loanGoal <= 90000) {
            loan.setApr("3.4");
        }
        else if (90001 <= loanGoal && loanGoal <= 100000) {
            loan.setApr("3.5");
        }
        else {
            loan.setApr("3.6");
        }
        loan.setGracePeriodLength(Double.parseDouble(loan.getGracePeriod()) * 12);
        loan.setNumberOfPeriods(String.valueOf(Double.parseDouble(loan.getLoanLength()) * 12));
        loan.setPrincipalBalance(String.valueOf(0.00));
        loan.setPaymentBalance(0.00);
        loans.save(loan);

//        calculate the monthly payment
        String payment = String.valueOf(monthlyPayment(loan));
        loan.setMonthlyPayment(payment);
        loans.save(loan);
        Loan theLoan = loans.findOne(loan.getId());
        student.setLoan(theLoan);
        students.save(student);

    }
}

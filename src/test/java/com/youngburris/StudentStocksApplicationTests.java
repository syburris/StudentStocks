package com.youngburris;

import com.youngburris.services.*;
import org.junit.Assert;
import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

@RunWith(SpringRunner.class)
@SpringBootTest
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class StudentStocksApplicationTests {

    @Autowired
    PaymentRepository payments;

    @Autowired
    LoanRepository loans;

    @Autowired
    InvestmentRepository investments;

    @Autowired
    StudentRepository students;

    @Autowired
    InvestorRepository investors;

    @Autowired
    SchoolRepository schools;

    @Autowired
	WebApplicationContext wac;

	MockMvc mockMvc;

	@Before
	public void before() {
		mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
	}

	@Test
	public void aTestLoginStudent() throws Exception{
	    mockMvc.perform(
	            MockMvcRequestBuilders.post("/studentlogin")
                    .param("username", "stevenburris@gmail.com")
                    .param("password", "hunter2")
        );
        Assert.assertTrue(students.findFirstByUsername("stevenburris@gmail.com") != null);
	}

	@Test
    public void bTestLoginInvestor() throws Exception {
	    mockMvc.perform(
	            MockMvcRequestBuilders.post("/investorlogin")
                    .param("username", "stevenburris@gmail.com")
                    .param("password", "hunter2")
        );
	    Assert.assertTrue(investors.findFirstByUsername("stevenburris@gmail.com") != null);
    }

}

package com.youngburris;

		import java.io.File;
		import com.braintreegateway.BraintreeGateway;

		import com.youngburris.controllers.StudentStocksRestController;
		import com.youngburris.utilities.BraintreeGatewayFactory;
        import org.springframework.boot.SpringApplication;
		import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StudentStocksApplication {
	public static String DEFAULT_CONFIG_FILENAME = "config.properties";
	public static BraintreeGateway gateway;
//	public static double THISISATESTBRO = testingCalculator;

	public static void main(String[] args) {

		SpringApplication.run(StudentStocksApplication.class, args);

	}

}
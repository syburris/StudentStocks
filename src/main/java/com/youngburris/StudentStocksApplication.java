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
		File configFile = new File(DEFAULT_CONFIG_FILENAME);

		try {
			if(configFile.exists() && !configFile.isDirectory()) {
				gateway = BraintreeGatewayFactory.fromConfigFile(configFile);
			} else {
				gateway = BraintreeGatewayFactory.fromConfigMapping(System.getenv());
			}
		} catch (NullPointerException e) {
			System.err.println("Could not load Braintree configuration from config file or system environment.");
			System.exit(1);
		}
        System.out.println(loanPaymentCalculator(4, 10000, 5, 10));
//		SpringApplication.run(StudentStocksApplication.class, args);


	}

    public static double loanPaymentCalculator(int gracePeriod, double principalBalance, double apr, double years) {
//        get the periodic interest rate from the annual percentage rate
        double decimal = apr / 100.00;
        double r = decimal / 12;

//        add interest accrued over the grace period to the principal balance
        int nGracePeriod = gracePeriod * 12;
        double newPrincipalBalance = (r * principalBalance) * nGracePeriod;
        return newPrincipalBalance;

////        get the periods in the loan from number of years
//        double n = years * 12;
//
////        calculate the payment
//        double payment = (r * principal) / (1 - Math.pow((1 + r), n));

    }
}
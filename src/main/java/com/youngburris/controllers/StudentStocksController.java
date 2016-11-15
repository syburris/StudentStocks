package com.youngburris.controllers;

import com.youngburris.entities.User;
import com.youngburris.services.UserRepository;
import com.youngburris.utilities.PasswordStorage;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.http.HttpSession;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;

/**
 * Created by stevenburris on 11/9/16.
 */
@Controller
public class StudentStocksController {

}

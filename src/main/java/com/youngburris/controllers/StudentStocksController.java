package com.youngburris.controllers;

import com.youngburris.entities.User;
import com.youngburris.services.UserRepository;
import com.youngburris.utilities.PasswordStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpSession;
import java.time.LocalDate;
import java.util.List;

/**
 * Created by stevenburris on 11/9/16.
 */
@Controller
public class StudentStocksController {

    @Autowired
    UserRepository users;

    @PostConstruct
    public void init() throws PasswordStorage.CannotPerformOperationException {
        User defaultUser = new User("Steven", PasswordStorage.createHash("Young"));
        if (users.findFirstByName(defaultUser.name) == null) {
            users.save(defaultUser);
        }
    }

    //home page,
    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String home(Model model, HttpSession session) {
        String name = (String) session.getAttribute("username");
        User user = users.findFirstByName(name);

        model.addAttribute("user",user);
        model.addAttribute("now", LocalDate.now());
        return "home";
    }
}

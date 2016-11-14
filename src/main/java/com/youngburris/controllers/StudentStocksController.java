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

    @Autowired
    UserRepository users;

    Server h2;

    @PostConstruct
    public void init() throws PasswordStorage.CannotPerformOperationException, SQLException {
        h2 = Server.createWebServer().start();
        User defaultUser = new User("Steven", PasswordStorage.createHash("Young"));
        if (users.findFirstByName(defaultUser.name) == null) {
            users.save(defaultUser);
        }
    }

    @PreDestroy
    public void destroy() {
        h2.stop();
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

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public String login(String username, String password, HttpSession session) throws Exception {
        User user = users.findFirstByName(username);
        if (user == null) {
            user = new User(username,PasswordStorage.createHash(password));
            users.save(user);
        }
        else if(!PasswordStorage.verifyPassword(password, user.password)) {
            throw new Exception("Wrong password!");
        }
        session.setAttribute("username",username);
        return "redirect:/";

    }

    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }
}

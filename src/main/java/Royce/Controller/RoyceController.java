package Royce.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import Royce.Model.SignUp;
import Royce.Service.RoyceService;

@Controller
@RequestMapping("/Royce")
public class RoyceController {

	@Autowired
	private RoyceService royceService;

	@GetMapping("/SignUp")
	public String SignUp(Model model) {
		model.addAttribute("user", new SignUp());

		return "SignUp";

	}

	@PostMapping("/register")
	public String register(@ModelAttribute SignUp signUp) {
		royceService.saveDetails(signUp);
		return "redirect:/Royce/SignUp";

	}

	@GetMapping("/Login")
	public String Login(Model model) {
		model.addAttribute("LoginUser", new SignUp());
		return "Login";

	}

	@PostMapping("/ValidUser")
	public String Valid(@ModelAttribute SignUp signUp) {
		System.out.println("yo bro");
		SignUp validateUser = royceService.validateUser(signUp.getUsername(), signUp.getPassword());

		if (validateUser == null) {
			return "No user found";
		}
		return "HomePage";

	}

}

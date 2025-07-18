package Royce.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

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

	// VALIDATION AND SHOWING NAME LOGIC IN ROYCE INTERFACE.......
	@PostMapping("/ValidUser")
	public String Valid(@ModelAttribute SignUp signUp, Model model) {
		System.out.println("yo bro");
		SignUp validateUser = royceService.validateUser(signUp.getUsername(), signUp.getPassword());
		if (validateUser == null) {
			return "redirect:/Royce/Login";
		}

		model.addAttribute("validatedUsername", signUp.getUsername());
		return "Home";

	}

}

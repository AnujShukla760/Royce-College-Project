package Royce.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Royce.Model.SignUp;
import Royce.Repository.RoyceRepo;

@Service
public class RoyceService {
	@Autowired
	private RoyceRepo royceRepo;

	public void saveDetails(SignUp signUp) {
		royceRepo.save(signUp);
	}

	
	public SignUp validateUser(String username, String password) {
	SignUp login = royceRepo.login(username,password);
		return login;
	}


	public List<SignUp> findAll() {
List<SignUp> Users= royceRepo.findAll();	
return Users;
	}

}

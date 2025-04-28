package Royce.Service;

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

}

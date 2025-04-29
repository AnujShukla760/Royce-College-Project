package Royce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import Royce.Model.SignUp;

@Repository
public interface RoyceRepo extends JpaRepository<SignUp, Long>{

@Query("from SignUp where username=:username and password=:password")	
	SignUp login(String username, String password);

}

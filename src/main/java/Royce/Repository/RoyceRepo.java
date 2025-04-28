package Royce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Royce.Model.SignUp;

@Repository
public interface RoyceRepo extends JpaRepository<SignUp, Long>{

}

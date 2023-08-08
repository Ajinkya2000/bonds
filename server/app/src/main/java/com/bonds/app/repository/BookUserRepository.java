package com.bonds.app.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bonds.app.model.BookUserModel;

@Repository
public interface BookUserRepository extends JpaRepository<BookUserModel, Integer>
{

}

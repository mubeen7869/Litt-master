package com.example.email.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="User")
public class User {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String name;
    private String inputValue;

    // Other fields, getters, setters, and constructors

  
    // Constructor with necessary parameters
    public User(String email,String name,String inputValue) {
        this.email = email;
        this.name = name;
        this.inputValue = inputValue;
        // Set other parameters
    }
    
    
   	@Override
	public String toString() {
		return "User [id=" + id + ", email=" + email + ",name= " + name +", inputValue = " + inputValue + "]";
	}

	public String getEmail() {
		return email;
	}
	public Long getId() {
		return id;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getInputValue() {
		return inputValue;
	}

	public void setInputValue(String inputValue) {
		this.inputValue = inputValue;
	}

    // Other getters and setters for additional fields
}
		
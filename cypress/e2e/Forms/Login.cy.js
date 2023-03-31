describe("Login page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login"); // visit the sign-up page URL
  });
  it(" Displaying Login form", () => {
    cy.get("#form_login").should("exist"); // checks if the form exists
  });
  it("user logging in with credentials", () => {
    // This line starts a new test case within the "Login page" test suite using the it function provided by Cypress. The test case is named "user logging in with credentials" and contains the actual test logic.
    cy.visit("http://localhost:3000/login");

    cy.window().then((win) => {
      win.localStorage.setItem("isLogin", true);
      // This line retrieves a reference to the global window object in the browser using the window function provided by Cypress. The .then() method is called on the resulting object to register a callback function that will be executed when the reference is available.

      win.localStorage.setItem(
        "user",
        JSON.stringify([
          {
            email: "jonsnow@yahoo.com",
            first_name: "Jon",
            last_name: "Snow",
            mobile_no: "15156165515",
            password: "U2FsdGVkX1+bX0HJewpyG+qOrL/fiwh5DBL1gre7y6M=",
          },
        ])
      );
    });

    cy.get("#email").type("jonsnow@yahoo.com");
    cy.get("#password").type("Admin@123");
    const imageURL =
      "https://images.unsplash.com/photo-1679615845580-8691c78fd7d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
    cy.get(`img[src="${imageURL}"]`).should("exist");
    cy.get("#submit").click();
  });

  it("user with wrong credentials:- with invalid email id  or not existed", () => {
    cy.visit("http://localhost:3000/login");
    cy.window().then((win) => {
      win.localStorage.setItem("isLogin", true);
      win.localStorage.setItem(
        "user",
        JSON.stringify([
          {
            email: "jonsnow@yahoo.com",
            first_name: "Jon",
            last_name: "Snow",
            mobile_no: "15156165515",
            password: "U2FsdGVkX1+bX0HJewpyG+qOrL/fiwh5DBL1gre7y6M=",
          },
        ])
      );
    });

    cy.get("#email").type("jonsnow@yahoo");
    cy.get("#password").type("Admin@123");
    const imageURL =
      "https://images.unsplash.com/photo-1679615845580-8691c78fd7d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
    cy.get(`img[src="${imageURL}"]`).should("exist");
    cy.get("#submit").click();
  });
  it("user logging in with wrong credentials; with invalid password", () => {
    cy.visit("http://localhost:3000/login");

    cy.window().then((win) => {
      win.localStorage.setItem("isLogin", true);
      win.localStorage.setItem(
        "user",
        JSON.stringify([
          {
            email: "jonsnow@yahoo.com",
            first_name: "Jon",
            last_name: "Snow",
            mobile_no: "15156165515",
            password: "U2FsdGVkX1+bX0HJewpyG+qOrL/fiwh5DBL1gre7y6M=",
          },
        ])
      );
    });

    cy.get("#email").type("jonsnow@yahoo.com");
    cy.get("#password").type("Admin@13");
    const imageURL =
      "https://images.unsplash.com/photo-1679615845580-8691c78fd7d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
    cy.get(`img[src="${imageURL}"]`).should("exist");
    cy.get("#submit").click();
  });
});

//here we can also use data-set to target particular attribute, bu clicking un particular element using playground, it gonna give us that data set only for Cypress , we already used in chrome dev tool $..

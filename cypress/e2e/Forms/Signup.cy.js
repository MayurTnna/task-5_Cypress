describe("Signup page", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/signup') // visit the sign-up page URL
      })
  it("displays sign-up form", () => {
    cy.get("#form_signup").should("exist"); // checks if the form exists
  });
  it("User signing up for the first time", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get("#first_name").type("Harry");
    cy.get("#last_name").type("Styles");
    cy.get("#email").type("harry@styles.com");
    cy.get("#mobile_no").type("5164651414");
    cy.get("#password").type("Harry@123");
    cy.get("#confirm_password").type("Harry@123");
    const imageURL =
      "https://images.unsplash.com/photo-1679421138674-aec9e1c319a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
    cy.get(`img[src="${imageURL}"]`).should("exist");
    cy.get("#submit").click();
  });
  it("If email already existed", () => {
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
    cy.visit("http://localhost:3000/signup");
    cy.get("#first_name").type("Harry");
    cy.get("#last_name").type("Styles");
    cy.get("#email").type("harry@styles.com");
    cy.get("#mobile_no").type("5164651414");
    cy.get("#password").type("Harry@123");
    cy.get("#confirm_password").type("Harry@123");
    const imageURL =
      "https://images.unsplash.com/photo-1679421138674-aec9e1c319a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
    cy.get(`img[src="${imageURL}"]`).should("exist");
    cy.get("#submit").click();
    cy.get("#submit").click();
  });
  it("User submitting form without filling required fields", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get("#first_name").type(" ");
    cy.get("#last_name").type("Snow");
    cy.get("#email").type(" ");
    cy.get("#mobile_no").type("5164651414");
    cy.get("#password").type("Harry@123");
    cy.get("#confirm_password").type("Harry@123");
    const imageURL =
      "https://images.unsplash.com/photo-1679421138674-aec9e1c319a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
    cy.get(`img[src="${imageURL}"]`).should("exist");
    cy.get("#submit").click();
  });
});

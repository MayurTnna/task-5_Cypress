describe("if user wanted to change his/her password he can visit here", () => {
  it("viewing update password page", () => {
    cy.window().then((win) => {
      win.localStorage.setItem("isLogin", true);
      win.localStorage.setItem(
        "user",
        JSON.stringify([
          {
            isLogin: true,
            email: "jonsnow@yahoo.com",
            first_name: "Jon",
            last_name: "Snow",
            mobile_no: "15156165515",
            password: "U2FsdGVkX1+bX0HJewpyG+qOrL/fiwh5DBL1gre7y6M=",
          },
        ])
      );
    });
    cy.visit("http://localhost:3000/product");
    cy.get("#userinfoClick").click();
    cy.get("#forgotClick").click();
    const imageURL =
      "https://images.unsplash.com/photo-1570288464059-9afc7a4e1e15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29uJTIwc2hvY2tlZHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60";
    cy.get(`img[src="${imageURL}"]`).should("exist");

    // cy.url().should("include", "detail/1");
  });
  it("changing old password and old password is wrong", () => {
    cy.window().then((win) => {
      win.localStorage.setItem("isLogin", true);
      win.localStorage.setItem(
        "user",
        JSON.stringify([
          {
            isLogin: true,
            email: "jonsnow@yahoo.com",
            first_name: "Jon",
            last_name: "Snow",
            mobile_no: "15156165515",
            password: "U2FsdGVkX1+bX0HJewpyG+qOrL/fiwh5DBL1gre7y6M=",
          },
        ])
      );
    });
    cy.visit("http://localhost:3000/product");
    cy.get("#userinfoClick").click();
    cy.get("#forgotClick").click();
    // cy.url().should("include", "detail/1");
    cy.get("#current_password").type("Admin@12345 ");
    cy.get("#new_password").type("Harry@123");
    cy.get("#confirm_password").type("Harry@123");
    cy.get("#updatePassword").click();
  });
  it("changing old password to new password successfuly", () => {
    cy.window().then((win) => {
      win.localStorage.setItem("isLogin", true);
      win.localStorage.setItem(
        "user",
        JSON.stringify([
          {
            isLogin: true,
            email: "jonsnow@yahoo.com",
            first_name: "Jon",
            last_name: "Snow",
            mobile_no: "15156165515",
            password: "U2FsdGVkX1+bX0HJewpyG+qOrL/fiwh5DBL1gre7y6M=",
          },
        ])
      );
    });
    cy.visit("http://localhost:3000/product");
    cy.get("#userinfoClick").click();
    cy.get("#forgotClick").click();
    // cy.url().should("include", "detail/1");
    cy.get("#current_password").type("Admin@123");
    cy.get("#new_password").type("Harry@123");
    cy.get("#confirm_password").type("Harry@123");
    cy.get("#updatePassword").click();
  });
});

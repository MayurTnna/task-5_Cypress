describe("Displaying user profile wwhich will display user details after successful authentication", () => {
    it("should display the products page", () => {
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
    });
    it("if user wanted to change their details or some thing", () => {
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
        cy.get("#first_name").type("Harry");
        cy.get("#updateDetail").click()
        // cy.url().should("include", "detail/1");
      });
  });
describe("Displaying products after successful authentication", () => {
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
    // cy.request("GET", "https://dummyjson.com/products").then((response) => {
    //   expect(response.status).to.eq(200);
    //   expect(response.body).to.have.property("products").and.to.be.an("array");
    // });
    cy.visit("http://localhost:3000/product");
    // cy.get("#click").click();
    // cy.url().should("include", "detail/1");
  });
});

describe("Displaying Add to cart after successfull authentication", () => {
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
  it("after clicking particular product page and adding cart, it should get added to cart", () => {
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
    cy.get("#viewClick").click();
    cy.get("#addcartClick").click();
  });
  it("viewing add to cart page, it should get dispalyed", () => {
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
    cy.get("#viewClick").click();
    cy.get("#addcartClick").click();
    cy.get("#showcartClick").click();
  });
  it("it should be disappeared after again clicking that view cart icon", () => {
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
    cy.get("#viewClick").click();
    cy.get("#addcartClick").click();
    cy.get("#showcartClick").click();
    cy.get("#showcartClick").click();
  });
  it("if you want to modify items than it should be done by by clicking buttons given on it; adding same item to cart", () => {
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
    cy.get("#viewClick").click();
    cy.get("#addcartClick").click();
    cy.get("#showcartClick").click();
    cy.get("#additemClick").click();

   
  });
  it("if you want to modify items than it should be done by by clicking buttons given on it; removing same item from cart", () => {
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
    cy.get("#viewClick").click();
    cy.get("#addcartClick").click();
    cy.get("#showcartClick").click();
    cy.get("#additemClick").click();
    cy.get("#removeitemClick").click();
   
  });
});

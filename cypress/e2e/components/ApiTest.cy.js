describe("API Test", () => {
  it("should return product details with its title, description, and price", () => {
    cy.request("GET", "https://dummyjson.com/products/1").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("title");
      expect(response.body).to.have.property("description");
      expect(response.body).to.have.property("price");
      expect(response.body).to.have.property("rating");
      expect(response.body).to.have.property("brand");
      expect(response.body).to.have.property("category");
      expect(response.body.title).to.be.a("string");
      expect(response.body.description).to.be.a("string");
      expect(response.body.price).to.be.a("number");
      expect(response.body.rating).to.be.a("number");
      expect(response.body.brand).to.be.a("string");
      expect(response.body.category).to.be.a("string");
      expect(response.body).to.have.property("images");
   
    });
  });
});

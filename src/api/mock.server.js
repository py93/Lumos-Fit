import { createServer, Model, RestSerializer } from "miragejs";
import faker from "faker";

export const categories = [
  "Bars",
  "Benches",
  "Weights",
  "Plates",
  "Dumbells",
  "Kettlebells"
]

const db = [...Array(5)].map((id) => ({
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    category: faker.random.arrayElement([...categories]),
    image: faker.random.image(),
    rating: faker.random.arrayElement([1,2,3,4,5]),
    inStock: faker.random.boolean()
}));

export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer
    },

    models: {
      address: Model,
      product: Model,
      cart: Model,
      wishlist: Model
    },

    routes() {
      this.namespace = "api";
      this.timing = 3000;
      this.resource("addresses");
      this.resource("products");
      this.resource("carts");
      this.resource("wishlists");
    },

    seeds(server) {
      [...Array(5)].forEach((_) => {
        server.create("address", {
          id: faker.random.uuid(),
          fullName: faker.name.findName(),
          addressLine1: faker.address.streetName(),
          addressLine2: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: faker.address.country(),
          zipCode: faker.address.zipCode(),
          contactNo: faker.phone.phoneNumber()
        });
      });

      db.forEach((product) => {
        server.create("product", {
          ...product
        });
      });

      db.forEach((product) => {
        server.create("cart", {
          ...product,
          cartQty: 1,
          status: { exists: false }
        });
      });

      db.forEach((product) => {
        server.create("wishlist", {
          ...product,
          status: { exists: false }
        });
      });
    }
  });
}

import { createServer, Model, RestSerializer } from "miragejs";
import faker, { fake } from "faker";

export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer
    },

    models: {
      address: Model,
      product: Model
    },

    routes() {
      this.namespace = "api";
      this.timing = 3000;
      this.resource("addresses");
      this.resource("products");
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
      [...Array(5)].forEach((_) => {
        server.create("product", {
          id: faker.random.uuid(),
          productName: faker.commerce.productName(),
          productPrice: faker.commerce.price()
        });
      });
    }
  });
}

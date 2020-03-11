"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql `
  type Menu {
    name: String!
    id: ID!
  }

  type UserInfo {
    menus: [Menu]!
  }

  type Query {
    userInfo: UserInfo!
  }
`;
//# sourceMappingURL=menu.js.map
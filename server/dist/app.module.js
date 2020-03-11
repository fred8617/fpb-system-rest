"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
let AppModule = class AppModule {
    configure(consumer) {
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                typePaths: ["./**/*.graphql"],
                mocks: {
                    UserInfo: () => {
                        return {
                            menus: [
                                {
                                    icon: null,
                                    id: "d6138e8b-1f26-441a-812f-1327b1577612",
                                    layout: "empty",
                                    name: "登录",
                                    parentId: null,
                                    url: "/login",
                                    key: "login",
                                    component: "login"
                                },
                                {
                                    icon: "Hello World",
                                    id: "5976c836-ac23-4bc5-9856-d255728bc442",
                                    layout: "Hello World",
                                    name: "Hello World"
                                }
                            ]
                        };
                    }
                }
            })
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
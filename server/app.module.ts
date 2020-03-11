import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
@Module({
  imports: [
    GraphQLModule.forRoot({
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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(apiProxy).forRoutes('graphql');
  }
}

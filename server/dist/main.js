"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
require("core-js/es/array");
require("core-js/es/object");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setBaseViewsDir(path_1.join(__dirname, '..', 'template'));
    app.useStaticAssets(path_1.join(__dirname, '..', 'react-app'));
    app.useStaticAssets(path_1.join(__dirname, '..', 'asset'));
    app.setViewEngine('hbs');
    app.enableCors();
    await app.listen(8888);
}
bootstrap();
//# sourceMappingURL=main.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const menu_resolver_1 = require("./menu.resolver");
describe('MenuResolver', () => {
    let resolver;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [menu_resolver_1.MenuResolver],
        }).compile();
        resolver = module.get(menu_resolver_1.MenuResolver);
    });
    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
//# sourceMappingURL=menu.resolver.spec.js.map
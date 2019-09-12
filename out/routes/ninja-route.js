"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NinjaRoute = {
    method: 'GET',
    path: '/',
    handler: function (request, h) {
        return 'ddeu mano';
    },
    options: {
        plugins: {
            'hapi-swagger': true,
        },
    },
};
//# sourceMappingURL=ninja-route.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvConfiguraton = void 0;
const EnvConfiguraton = () => ({
    environment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3002,
    defaultLimit: process.env.DEFAULT_LIMIT || 7,
});
exports.EnvConfiguraton = EnvConfiguraton;
//# sourceMappingURL=app.config.js.map
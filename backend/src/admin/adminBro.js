const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroMongoose = require("@admin-bro/mongoose");
const adminBroOptions = require("./adminBroOptions");
AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro(adminBroOptions);
const router = AdminBroExpress.buildRouter(adminBro);

module.exports = router;

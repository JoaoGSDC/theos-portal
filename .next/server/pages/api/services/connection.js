"use strict";
(() => {
var exports = {};
exports.id = 302;
exports.ids = [302];
exports.modules = {

/***/ 2830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ connection)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./src/pages/api/services/connection.ts

let cachedDb;
async function connectToDatabase(uri = "") {
    try {
        if (cachedDb) {
            return cachedDb;
        }
        const client = await external_mongodb_namespaceObject.MongoClient.connect(uri);
        const db = client.db(process.env.MONGODB_DB, {});
        cachedDb = db;
        console.log("MongoDB Connect Status: Success!");
        return db;
    } catch (error) {
        return error;
    }
}
/* harmony default export */ const connection = (connectToDatabase);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2830));
module.exports = __webpack_exports__;

})();
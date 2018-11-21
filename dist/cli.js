#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
_1.get()
    .then(function (ip) {
    console.log(ip);
    process.exit(0);
}).catch(function (err) {
    console.error(JSON.stringify(err));
    process.exit(1);
});
//# sourceMappingURL=cli.js.map
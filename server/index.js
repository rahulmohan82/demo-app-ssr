"use strict";
exports.__esModule = true;
require("zone.js/dist/zone-node");
var functions = require("firebase-functions");
var express = require("express");
var platform_server_1 = require("@angular/platform-server");
var fs = require("fs");
var enableProdMode = require('@angular/core').enableProdMode;
enableProdMode();
var CategoryDoc = fs.readFileSync(__dirname + '/ssr/index.html', 'utf8');
var AppServerModuleNgFactoryCategory = require(__dirname + '/ssr/main.bundle').AppServerModuleNgFactory;
var app = express();
app.get('**', function (req, res) {
    var url = req.path;
    platform_server_1.renderModuleFactory(AppServerModuleNgFactoryCategory, { document: CategoryDoc, url: url })
        .then(function (html) {
        res.send(html);
    });
});
exports.ssr = functions.https.onRequest(app);

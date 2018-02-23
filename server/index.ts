import 'zone.js/dist/zone-node';
import * as functions from 'firebase-functions';
import * as express from 'express';
import { renderModuleFactory } from '@angular/platform-server';
import * as fs from 'fs';
const { enableProdMode } = require('@angular/core');
enableProdMode();
const index = fs.readFileSync(__dirname + '/ssr/index.html', 'utf8');
const AppServerModuleNgFactory = require(__dirname + '/ssr/main.bundle').AppServerModuleNgFactory;

const app = express();
app.get('**', (req, res) => {
    const url = req.path;
    renderModuleFactory(
        AppServerModuleNgFactory
        , { document: index, url })
        .then(html => {

            res.send(html);

        });
});

export let ssr = functions.https.onRequest(app);


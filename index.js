/**
 * Created by diatche on 12/11/14.
 */

'use strict';

var csv = require('csv'),
    Promise = require('promise');

csv.generator = csv.generate;
csv.generate = Promise.denodeify(csv.generate);

csv.parser = csv.parse;
csv.parse = Promise.denodeify(csv.parse);

csv.transformer = csv.transform;
//csv.transform = Promise.denodeify(csv.transform);

csv.stringifier = csv.stringify;
csv.stringify = Promise.denodeify(csv.stringify);

module.exports = csv;
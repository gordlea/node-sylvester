// Copyright (c) 2011, Chris Umbel

"use strict";
var gbl = (1,eval)('this');

exports.Vector = require('./vector');
gbl.$V = exports.Vector.create;
exports.Matrix = require('./matrix');
gbl.$M = exports.Matrix.create;
exports.Line = require('./line');
gbl.$L = exports.Line.create;
exports.Plane = require('./plane');
gbl.$P = exports.Plane.create;
exports.Line.Segment = require('./line.segment');
exports.Sylvester = require('./sylvester');

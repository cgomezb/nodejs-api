var _ = require('underscore');

// Require function order to resolve
/*
    Core Module
    File or folder
    node_modules folder
*/

const contains = _.contains([1, 2, 3], 3);
console.log(contains);

require('es6-promise').polyfill();
require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let calc = require('./parts/calc.js'),
        forms = require('./parts/forms.js'),
        slider = require('./parts/slider.js'),
        tabs = require('./parts/tabs'),
        timer = require('./parts/timer'),
        modal = require('./parts/modal');

    calc();
    slider();
    tabs();
    timer();
    modal();
    forms();
});
'use strict';

var $ = require('jquery');

var greetings = require('./greetings');
var reverse = require('./reverse');
var capitalizeWords = require('./capitalizeWords');

var name = 'Rose Tyler';
var reversedName = reverse(name);

$(document).ready(function() {
    appendParagraph('div', greetings(name));
    appendParagraph('div', 'Your name reversed is: ' + capitalizeWords(reversedName));
});

var appendParagraph = function(elementName, text) {
    return $(elementName).append($('<p>' + text + '</p>'));
};

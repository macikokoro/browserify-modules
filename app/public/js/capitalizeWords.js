'use strict';

module.exports = function capitalizeWords(text) {
    var words = text.toLowerCase().split(' ');

    return words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
};

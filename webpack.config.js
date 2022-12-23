const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        //input: './src/form.js'
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'main.js',
    },
    mode: 'production'
};
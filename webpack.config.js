const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/CarnivaleFront/'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
};
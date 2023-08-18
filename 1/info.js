// task runners: grunt, gulp, ...
// module bundlers: webPack, rollup

// npm init -y
// npm install webpack webpack-cli --save-dev

// folders (names are desire):
// src--> main codes, public/dist--> output of webpack
// add <<webpack.config.js>> in root directory, and code the configs:
/* const path = require("path");
module.exports = {
    mode: "production",    // development or production
    //////////// if you want to files names to be main //////////
    entry: path.resolve(__dirname, "src/index.js"),
    //////////// if you want to css files names to be x //////////
    entry: {
        x: path.resolve(__dirname, "src/index.js")
    },
    ///////////////////////////////////////////////////////
    output: {
        path: path.resolve(__dirname, "public/dist"),
        publicPath: "/dist/",
        filename: "[name].bundle.js",
        clean: true
    },
    plugins: [
        new HtmlWebpack({
            title: "webpack application",
            filename: path.join(__dirname, "public/index.html"),
            inject: "body", // head or body
        })
    ]
};  */

// -------------------------------------
// compiling:

// way 1:
// open terminal as administrator
// run this command:
// .\node_modules\.bin\webpack\

// way 2:
// in package.json scripts:
/* "scripts": {
    "dev": "webpack --mode development",
    "prod": "webpack --mode production"
}    */
// npm run dev    or npm run prod
// -------------------------------------

// for testing compiled (bundled) file:
// 1- use html-webpack-plugin (it will describe)
// 2- create an html file in public folder named index.html, link bundled file to it and test it.


// -------------------------------------
// using html-webpack-plugin:
// npm install html-webpack-plugin --dev

// in webpack.config.js add this:
// const HtmlWebpack = require("html-webpack-plugin");
/* plugins: [
    new HtmlWebpack({
        title: "webpack application",
        filename: path.join(__dirname, "public/index.html"),
        inject: "body", // head or body
    })
]   */

// -------------------------------------

// install webpack-dev-server (an auto compiler):
// npm install webpack-dev-server --save-dev

// in webpack.config.js:
/*
devServer: {
    static: {
        directory: "./public",
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
    }
*/

// in package.json:
/*
"scripts": {
    "dev": "webpack --mode development",
    "prod": "webpack --mode production",
    "serve": "webpack-dev-server" // or: "webpack serve"
}
*/

// localhost:9090/dist

// -------------------------------------

// loaders
// babel js is a transpiler (compiler)
// npm install babel-loader @babel/core @babel/preset-env --save-dev
// in webpack.config.js:
/*
module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                presets: [
                    ['@babel/preset-env']
                ]
            }
        }
    ]
},
*/

// -------------------------------------

// using html template:
// create index.html in src folder.
// in title tag: <title><%= htmlWebpackPlugin.options.title %></title>
// and in body write anything that you wanted.

// in webpack.config.js:
/*
plugins: [
    new HtmlWebpack({
        title: "webpack application",
        filename: path.join(__dirname, "public/index.html"),
        inject: "body", // head or body
        template: path.join(__dirname, "src", "index.html")
    })
]
*/

// -------------------------------------

// internal CSS:
// npm install css-loader style-loader --save-dev
// for external CSS:
// npm install mini-css-extract-plugin --save-dev


// in src/assets/css create a file named style.css
// in src/index.js import it:
// import "./assets/css/style.css";

// in package.json:
/*
// linux:
"scripts": {
    "dev": "NODE_ENV=development webpack --mode development",
    "prod": "NODE_ENV=production webpack --mode production",
    "serve": "webpack serve"
}
// windows:
"scripts": {
    "dev": "set NODE_ENV=development&& webpack --mode development",
    "prod": "set NODE_ENV=production&& webpack --mode production",
    "serve": "webpack serve"
},
*/

// in webpack.config.js:
/*
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const isDevMode = (process.env.NODE_ENV) === "development";

module: {
        rules: [
            {...},

            {
                test: /\.css$/i,
                use: [
                (isDevMode ? 'style-loader' : miniCssExtractPlugin.loader),
                'css-loader'
            ] // arrange is important
            },

            {
                test: /\.[png|jpe?g|svg|gif|eot|ttf|woff|woff2]$/i,
                type: "assets"
            }
        ]
    },

    plugins: [
        new HtmlWebpack(...),
        new miniCssExtractPlugin({
            fileName: "[name].[hash].css"
        })
    ],
*/

// -------------------------------------

// bootstrap:
// npm install bootstrap
// in src/index.js:
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

// -------------------------------------

// using css modules (import moduleName from "./name.css")
// just change this:
/*
{
    test: /\.css$/i,
    use: [
        (isDevMode ? 'style-loader' : miniCssExtractPlugin.loader),
        'css-loader'
    ]
} */

// to this:
/*
{
    test: /\.css$/i,
    use: [
        (isDevMode ? 'style-loader' : miniCssExtractPlugin.loader),
        {
            loader: "css-loader",
            options: {modules: true}
        }
    ]
} */
// -------------------------------------
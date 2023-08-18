// creating a react application: 
// npm install react react-dom
// npm install @babel/preset-react --save-dev

/*
{
    test: /\.js$/i,
        exclude: /node_modules/,
            use: {
        loader: "babel-loader",
            options: {
            presets: [
                ['@babel/preset-env', '@babel/preset-react']
            ]
        }
    },
},
*/

// ...

//-------------------------------------

// split codes:

// way 1 --->
// in webpack.config.js:
/*
entry: {
    index: {
        import: path.join(__dirname, "src", "index.js"),
        dependOn: "vendor"
    },

    vendor: ["react", "react-dom"]
}
*/

// way 1 --->
// in webpack.config.js:
/*
entry: {
        index: path.join(__dirname, "src", "index.js")
},

optimization: {
    minimize: true,
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[/\\]/,
                name: "vendor",
                chunks: "initial"
            }
        }
    }
},
*/

//-------------------------------------
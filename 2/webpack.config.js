const path = require("path");
const HtmlWebpack = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const isDevMode = (process.env.NODE_ENV === "development");

module.exports = {
    mode: "development",    // development or production
    // watch: true,
    // devtool: "source-map",

    //-------------------------------------------
    // entry: {
    //     index: path.join(__dirname, "src", "index.js")
    // },

    // optimization: {
    //     minimize: true,
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 test: /[\\/]node_modules[/\\]/,
    //                 name: "vendor",
    //                 chunks: "initial"
    //             }
    //         }
    //     }
    // },
    //-------------------------------------------

    entry: {
        index: {
            import: path.join(__dirname, "src", "index.js"),
            dependOn: "vendor"
        },

        vendor: ["react", "react-dom"]
    },


    output: {
        path: path.join(__dirname, "public", "dist"),
        publicPath: "/dist/",
        filename: "[name].bundle.js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                },
            },

            {
                test: /\.css$/i,
                use: [
                    (isDevMode ? 'style-loader' : miniCssExtractPlugin.loader),
                    {
                        loader: "css-loader",
                        options: {modules: true}
                    }
                ]
            },

            {
                test: /\.[png|jpe?g|svg|gif|eot|ttf|woff|woff2]$/i,
                type: "assets"
            }
        ]
    },

    plugins: [
        new HtmlWebpack({
            title: "webpack application",
            filename: path.join(__dirname, "public/index.html"),
            inject: "body", // head or body
            template: path.join(__dirname, "src", "index.html")
        }),

        new miniCssExtractPlugin({
            filename: "[name].[hash].css"
        }),
    ],

    devServer: {
        static: {
            directory: "./public",
        },

        port: 3000,
        // open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    }
};
module.exports = {
    entry: './src/js/app.js',
    mode: 'development',
    output: {
      path: `${__dirname}/dist`,
      filename: 'bundle.js',
    },
    devServer: {
      compress: true,
      hot: true,      
      port: 8081,
      publicPath: "/"
    },
    module:{
        rules:[
                {
                    test:/\.(s*)css$/,
                    use:['style-loader','css-loader', 'sass-loader']
                 }
         ]
      },    
  };
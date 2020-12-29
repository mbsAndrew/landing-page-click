module.exports = {
    entry: './src/js/app.js',
    mode: 'development',
    output: {
      path: `${__dirname}/dist`,
      filename: 'bundle.js',
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
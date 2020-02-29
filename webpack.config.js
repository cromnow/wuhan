module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
       {
           test: /\.jsx?$/,
           use: {
              loader: 'babel-loader',
              options: { presets: ['@babel/preset-react', '@babel/preset-env'], rootMode: "upward" }
              
           }
       },
       {
        test: /\.html$/,
        loader: 'html-loader'
       }
    ]
 }
};
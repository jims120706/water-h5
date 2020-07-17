module.exports = {
  presets: [[
    '@vue/cli-plugin-babel/preset',
    // {
    //   "useBuiltIns": "usage",
    //   "corejs": 3
    // }
  ]],
  plugins: [
    // 按需引入vant
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant',],
    // ["@babel/plugin-transform-runtime",
    //   {
    //     "absoluteRuntime": false,
    //     "corejs": 3,
    //     "helpers": true,
    //     "regenerator": true,
    //     "useESModules": false
    //   }]
  ]
}

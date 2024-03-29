module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: [['transform-remove-console', { exclude: ['error', 'warn'] }]]
    }
  },
  plugins: ['babel-plugin-styled-components', 'react-native-reanimated/plugin']
}

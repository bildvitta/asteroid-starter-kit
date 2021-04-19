const { complete } = require('./utils')
const escape = val => JSON.stringify(val).slice(1, -1)

module.exports = {
  prompts: {
    name: {
      type: 'string',
      message: 'Project name (internal usage for dev)',
      validate: val => val && val.length > 0
    },

    productName: {
      type: 'string',
      message: 'Project product name (must start with letter if building mobile apps)',
      default: 'Asteroid App',
      validate: val => val && val.length > 0,
      transformer: escape
    },

    description: {
      type: 'string',
      message: 'Project description',
      default: 'An Asteroid app',
      transformer: escape
    },

    author: {
      type: 'string',
      message: 'Author'
    },

    preset: {
      type: 'checkbox',
      message: 'Check the features needed for your project:',
      choices: [
        {
          name: 'Vuex',
          value: 'vuex'
        },
        {
          name: 'Axios',
          value: 'axios'
        },
        {
          name: 'Vue-i18n',
          value: 'i18n'
        },
        {
          name: 'IE11 support',
          value: 'ie'
        }
      ]
    }
  },

  filters: {
    'src/boot/axios.js': 'preset.axios',
    'src/boot/i18n.js': 'preset.i18n',
    'src/i18n/**/*.js': 'preset.i18n',
    'src/store/**/*.js': 'preset.vuex'
  },

  complete
};

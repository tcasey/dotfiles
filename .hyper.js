module.exports = {
  config: {
    fontSize: 12,
    fontFamily: 'OperatorMono Nerd Font',
    cursorColor: 'rgb(0, 175, 135)',
    cursorShape: 'BLOCK',
    foregroundColor: '#fff',
    backgroundColor: '#000',
    borderColor: '#333',
    css: '',
    termCSS: '',
    showHamburgerMenu: '',
    showWindowControls: '',
    padding: '12px 14px',
    colors: {
      black: '#000000',
      red: '#ff0000',
      green: '#33ff00',
      yellow: '#ffff00',
      blue: '#0066ff',
      magenta: '#cc00ff',
      cyan: '#00ffff',
      white: '#d0d0d0',
      lightBlack: '#808080',
      lightRed: '#ff0000',
      lightGreen: '#33ff00',
      lightYellow: '#ffff00',
      lightBlue: '#0066ff',
      lightMagenta: '#cc00ff',
      lightCyan: '#00ffff',
      lightWhite: '#ffffff'
    },
    shell: '',
    shellArgs: ['--login'],
    env: {},
    bell: 'SOUND',
    copyOnSelect: false
  },

  plugins: [
    'hyper-transparent',
    'hyperlayout',
    'hyper-tabs-enhanced',
    'hyperterm-cursor',
    'hyper-mac-controls',
    'hyper-dark-scrollbar',
    'hyper-blink',
  ],

  localPlugins: []
};

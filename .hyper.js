// -- hyper-stylesheet-hash:29e68156c08b81a0cb69178f13b4a888 --
module.exports = {
  config: {
    fontSize: 16,
    fontFamily: "'OperatorMono Nerd Font', 'Inconsolata for Powerline', 'monospace'",
    cursorColor: '#F2C38F',
    cursorShape: 'BLOCK',
    foregroundColor: '#fff',
    backgroundColor: '#000',
    borderColor: '#333',
    showHamburgerMenu: '',
    showWindowControls: '',
    padding: '12px 14px',
    hyperStatusLine: {
      dirtyColor: '#D18EC2',
      aheadColor: '#F2C38F',
      footerTransparent: true
    },
    hyperSpotify: {
      position: 'top'
    },
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
    // 'hyper-statusline',
    'hyper-search',
    'hyperterm-cursor',
    'hyper-blink',
    'hyper-spotify',
    'hypercwd',
    'hyperlayout',
    'hyper-tabs-enhanced',
    'hyper-mac-controls',
    'hyper-dark-scrollbar',
    'hyperterm-cobalt2-theme',
    // 'hyper-transparent-dynamic',
    'hyper-stylesheet'
  ],

  localPlugins: []
};
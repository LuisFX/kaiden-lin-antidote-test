import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle(() => ({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  html: {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    height: '100%',
    width: '100%',
    fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`,
    background: '#dbdee0'
  },
  body: {
    height: '100%',
    width: '100%'
  },
  '#root': {
    height: '100%',
    width: '100%'
  },
}));

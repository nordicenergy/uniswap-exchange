import React, { useEffect } from 'react'
import { createGlobalStyle, css, ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { checkSupportedTheme, getQueryParam } from '../utils'
import { SUPPORTED_THEMES } from '../constants'
import { useDarkModeManager } from '../contexts/LocalStorage'

export * from './components'

const MEDIA_WIDTHS = {
  upToSmall: 600,
  upToMedium: 960,
  upToLarge: 1280
}

const mediaWidthTemplates = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
  accumulator[size] = (...args) => css`
    @media (max-width: ${MEDIA_WIDTHS[size]}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

const white = '#FFFFFF'
const black = '#000000'

export default function ThemeProvider({ children }) {
  const [darkMode, toggleDarkMode] = useDarkModeManager()
  const themeURL = checkSupportedTheme(getQueryParam(window.location, 'theme'))
  const themeToRender = themeURL
    ? themeURL.toUpperCase() === SUPPORTED_THEMES.DARK
      ? true
      : themeURL.toUpperCase() === SUPPORTED_THEMES.LIGHT
      ? false
      : darkMode
    : darkMode
  useEffect(() => {
    toggleDarkMode(themeToRender)
  }, [toggleDarkMode, themeToRender])
  return <StyledComponentsThemeProvider theme={theme(themeToRender)}>{children}</StyledComponentsThemeProvider>
}

const theme = darkMode => ({
  white,
  black,
  textColor: darkMode ? white : ' #0d0d0d',
  greyText: darkMode ? white : '#f2f2f2',

  // for setting css on <html>
  backgroundColor: darkMode ? ' #18191b' : white,

  modalBackground: darkMode ? 'rgba(255, 204, 0)' : 'rgba(230, 184, 0)',
  inputBackground: darkMode ? '#18191b' : white,
  placeholderGray: darkMode ? '#d9d9d9' : '#f2f2f2',
  shadowColor: darkMode ? '#000' : '#E6B800',

  // grays
  concreteGray: darkMode ? '#333333' : '#fafafa',
  mercuryGray: darkMode ? '#333333' : ' #f2f2f2',
  silverGray: darkMode ? '#737373' : ' #b3b3b3',
  chaliceGray: darkMode ? '#7B7B7B' : '#AEAEAE',
  doveGray: darkMode ? ' #b3b3b3' : '#737373',
  mineshaftGray: darkMode ? ' #f2f2f2' : '#2B2B2B',
  activeGray: darkMode ? '#333333' : '#F7F8FA',
  buttonOutlineGrey: darkMode ? '#fafafa' : '#F2F2F2',
  tokenRowHover: darkMode ? '#262626' : '#F2F2F2',

  //blacks
  charcoalBlack: darkMode ? '#F2F2F2' : '#262626',
  // blues
  zumthorBlue: darkMode ? '#262626' : '#EBF4FF',
  malibuBlue: darkMode ? '#E6B800' : '#E6B800',
  royalBlue: darkMode ? '#E6B800' : '#E6B800',
  loadingBlue: darkMode ? '#666666' : '#666666',

  // purples
  wisteriaPurple: '#E6B800',
  // reds
  salmonRed: '#ffcc66',
  // orange
  pizazzOrange: '#B38F00',
  // yellows
  warningYellow: '#ffd633',
  // pink
  uniswapPink: '#E6B800',
  //green
  connectedGreen: '#27AE60',

  //branded
  metaMaskOrange: '#CCA300',

  //specific
  textHover: darkMode ? theme.uniswapPink : theme.doveGray,

  // connect button when loggedout
  buttonFaded: darkMode ? '#E6B800' : '#737373',

  // media queries
  mediaWidth: mediaWidthTemplates,
  // css snippets
  flexColumnNoWrap: css`
    display: flex;
    flex-flow: column nowrap;
  `,
  flexRowNoWrap: css`
    display: flex;
    flex-flow: row nowrap;
  `
})

export const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');
  html { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;    
  }

  body > div {
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}

  html {
    font-size: 16px;
    font-variant: none;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.backgroundColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`

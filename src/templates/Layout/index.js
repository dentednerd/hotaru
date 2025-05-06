import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import useDarkMode from '@fisch0920/use-dark-mode'
import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Footer from '../../organisms/Footer'
import Header from '../../organisms/Header'
import { colors, shadows } from '../../tokens'
import GlobalStyles from './GlobalStyles'

const StyledMain = styled.main`
  position: relative;
  z-index: 1;
  background-color: ${(props) => props.theme.bg1};
  color: ${(props) => props.theme.text};
  box-shadow: ${shadows.footer};
  margin-bottom: 100vh;
  overflow-x: hidden;
`

const Layout = (props) => {
  const { children } = props
  const [themeColors, setThemeColors] = useState(null)

  const isBrowser = () => typeof window !== 'undefined'
  const darkPreference =
    isBrowser() && window.matchMedia('(prefers-color-scheme: dark)').matches
  const darkMode = useDarkMode(darkPreference)

  const mainRef = useRef()

  useEffect(() => {
    mainRef.current?.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }, [mainRef])

  useEffect(() => {
    const theme = darkMode.value ? 'dark' : 'light'
    setThemeColors(colors[theme])
  }, [darkMode])

  if (!themeColors) return null

  return (
    <ThemeProvider theme={themeColors}>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>Joey Imlay, software engineer in Manchester</title>
        <meta
          name="description"
          content="Joey Imlay is a software engineer in Manchester, England."
        />
      </Helmet>
      <GlobalStyles theme={themeColors} />
      <Header darkMode={darkMode} />
      <StyledMain theme={themeColors} ref={mainRef}>
        {children}
      </StyledMain>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout

import React from 'react'
import { useTheme } from '@emotion/react'
import { ToggleIcon } from '../../assets/icons'

const DarkToggle = ({ darkMode }) => {
  const theme = useTheme()
  const handleClick = () =>
    darkMode.value ? darkMode.disable() : darkMode.enable()

  return <ToggleIcon theme={theme} darkMode={darkMode} onClick={handleClick} />
}

export default DarkToggle

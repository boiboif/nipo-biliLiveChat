'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import darkSvg from './dark.svg'
import lightSvg from './light.svg'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      onClick={() => {
        if (theme === 'dark') {
          setTheme('light')
        }
        if (theme === 'light') {
          setTheme('dark')
        }
      }}
    >
      {theme === 'light' && (
        <Image className="cursor-pointer" src={lightSvg} alt="" />
      )}

      {theme === 'dark' && (
        <Image className="cursor-pointer" src={darkSvg} alt="" />
      )}
    </div>
  )
}

export default ThemeSwitch

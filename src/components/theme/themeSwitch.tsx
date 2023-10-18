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
      className="cursor-pointer !bg-opacity-20 p-2 hover:bg-slate-300 dark:hover:bg-slate-500"
      onClick={() => {
        if (theme === 'dark') {
          setTheme('light')
        }
        if (theme === 'light' || theme === 'system') {
          setTheme('dark')
        }
      }}
    >
      <Image src={theme !== 'dark' ? lightSvg : darkSvg} alt="" />
    </div>
  )
}

export default ThemeSwitch

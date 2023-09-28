'use client'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { ConfigProvider } from 'antd'
import { useTheme } from 'next-themes'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { ConfigProviderProps } from 'antd/es/config-provider'

dayjs.locale('zh-cn')

const defaultTheme = {
  token: {
    fontSize: 16,
    colorPrimary: 'rgb(251, 113, 133)',
  },
}

const AntdProvider = (props: PropsWithChildren) => {
  const { theme } = useTheme()
  const [providerTheme, setProviderTheme] =
    useState<ConfigProviderProps['theme']>(defaultTheme)

  useEffect(() => {
    if (theme === 'dark') {
      setProviderTheme((pre) => ({
        ...pre,
        components: {
          Input: {
            colorTextPlaceholder: 'rgb(148 163 184)',
            colorText: '#fff',
            colorBgContainer: 'rgba(120,131,155, 0.2)',
            colorBorder: '#666',
          },
          Pagination: {
            colorText: 'rgb(148 163 184)',
            colorBgContainer: 'rgba(120,131,155, 0.2)'
          },
          Spin: {
            colorBgContainer: 'transparent'
          }
        },
      }))
    } else {
      setProviderTheme(defaultTheme)
    }
  }, [theme])

  return (
    <ConfigProvider locale={zhCN} theme={providerTheme}>
      {props.children}
    </ConfigProvider>
  )
}

export default AntdProvider

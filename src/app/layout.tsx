import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import classNames from 'classnames'
import StyledComponentsRegistry from '../lib/AntdRegistry'
import { AntdProvider, ThemeProvider } from '@/components'
import Script from 'next/script'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NipoChan直播弹幕查询',
  applicationName: 'NipoChan直播弹幕查询',
  description: 'bilibili直播历史弹幕查询',
  authors: [{ name: 'bbf', url: 'https://bbfbbf.cn' }],
  keywords: [
    'nipo',
    'nipochan',
    'bilibili',
    '直播弹幕查询',
    'bbf',
    'b站',
    '历史弹幕',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1LQF2FWSPR"
      ></Script>
      <script
        dangerouslySetInnerHTML={{
          __html: `  window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-1LQF2FWSPR');`,
        }}
      ></script>

      <body
        className={classNames([
          // inter.className,
          'dark:bg-slate-900 dark:text-slate-400',
        ])}
      >
        <ThemeProvider>
          <StyledComponentsRegistry>
            <AntdProvider>{children} </AntdProvider>
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  )
}

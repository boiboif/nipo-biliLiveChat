import { ThemeSwitch } from '@/components'
import { PropsWithChildren } from 'react'
import Image from 'next/image'
import avatar from '@/app/favicon.ico'
import { GithubOutlined } from '@ant-design/icons'

export default function MainLayout(props: PropsWithChildren) {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b border-rose-100 bg-white bg-opacity-60 px-4 backdrop-blur dark:border-rose-200 dark:bg-slate-900">
        <div className="flex h-16 items-center justify-between main-w">
          <div className="flex items-center gap-x-2 text-lg text-rose-400">
            <a
              href="https://space.bilibili.com/3494349161629839/"
              target="_blank"
            >
              <Image className="rounded-[50%]" width={40} src={avatar} alt="" />
            </a>
            <a href="https://live.bilibili.com/30868374" target="_blank">
              NipoChan直播弹幕查询
            </a>
          </div>
          <div className="flex items-center gap-x-1 sm:gap-x-2">
            <ThemeSwitch />
            <a
              href="https://github.com/boiboif/nipo-biliLiveChat"
              target="_blank"
            >
              <GithubOutlined className="cursor-pointer rounded !bg-opacity-20 p-2 text-lg hover:bg-slate-300 dark:hover:bg-slate-500" />
            </a>
          </div>
        </div>
      </header>
      <section className="flex-1 px-4">
        <div className="main-w">{props.children}</div>
      </section>
      <footer className="text-center text-xs text-slate-400 sm:text-sm">
        © 2023 BBF Powered by Next.js & Prisma & Tailwind.css
      </footer>
    </main>
  )
}

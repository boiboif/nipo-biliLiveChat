import { ThemeSwitch } from '@/components'
import { PropsWithChildren } from 'react'
import Image from 'next/image'
import avatar from '@/app/favicon.ico'

export default function MainLayout(props: PropsWithChildren) {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b border-rose-100 bg-white bg-opacity-60 px-4 backdrop-blur dark:border-rose-200 dark:bg-slate-900">
        <div className="flex h-16 items-center justify-between main-w">
          <div className="text-lg text-rose-400 flex items-center gap-x-2">
            <Image className="rounded-[50%]" width={40} src={avatar} alt="" />
            NipoChan直播弹幕查询
          </div>
          <div>
            <ThemeSwitch />
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

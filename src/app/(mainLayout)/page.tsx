'use client'
import { getDanmuList } from '@/cilentApi'
import { usePagination } from 'ahooks'
import Search from './components/search'
import { useState } from 'react'
import { DanmuListReqBody } from '../api/danmu/types'
import dayjs from 'dayjs'
import { Empty, Pagination, Spin, Tag, Grid } from 'antd'
import bugImg from '@/assets/img/bug.jpg'
import Image from 'next/image'

const { useBreakpoint } = Grid

export default function Home() {
  const [searchParams, setSearchParams] = useState<DanmuListReqBody>()
  const { data, loading, pagination } = usePagination(
    ({ current, pageSize }) =>
      getDanmuList({ page: current, size: pageSize, ...searchParams }).then(
        (res) => ({ list: res.data.list, total: res.data.total }),
      ),
    {
      refreshDeps: [searchParams],
      // ready: !!searchParams?.uid,
    },
  )

  const { xs } = useBreakpoint()

  return (
    <div className="pt-6">
      <Search onSearch={setSearchParams} />

      <div className="pt-0 sm:pt-2">
        <Spin spinning={loading}>
          {data?.list.map((item) => (
            <div
              className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-rose-50 py-3 text-xs last:mb-0 sm:flex-nowrap sm:text-base"
              key={item.id}
            >
              <div>
                {dayjs(item.sendTime).format('YYYY-MM-DD HH:mm:ss')}
              </div>
              <div className="flex items-center">
                {item.badge?.name && (
                  <Tag
                    className="flex !p-0 text-xs sm:text-base"
                    color={item.badge.active ? item.badge.color : '#ccc'}
                  >
                    <div className="px-2">{item.badge?.name}</div>{' '}
                    <div className="rounded-r bg-white px-1 text-slate-400">
                      {item.badge.level}
                    </div>
                  </Tag>
                )}

                {item.identity?.room_admin && <Tag color="pink">房</Tag>}
                <div>{item.user.uname}:</div>
              </div>
              <div className="w-full text-sm sm:w-auto sm:text-base">
                {item.content}
              </div>
            </div>
          ))}
          {(!data?.list || data.list.length === 0) && (
            <Empty
              image={
                <Image
                  priority
                  className="inline-block"
                  width={100}
                  src={bugImg}
                  alt=""
                />
              }
              description={<div className="dark:text-slate-400">暂无数据</div>}
              className="pt-20"
            />
          )}
        </Spin>
      </div>

      {data?.list && data.list.length > 0 && (
        <div className="flex justify-center py-10">
          <Pagination
            size={xs ? 'small' : 'default'}
            {...pagination}
            showTotal={(total) => `共 ${total} 条`}
          />
        </div>
      )}
    </div>
  )
}

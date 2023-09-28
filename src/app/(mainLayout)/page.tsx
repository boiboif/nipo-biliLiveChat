'use client'
import { getDanmuList } from '@/cilentApi'
import { usePagination } from 'ahooks'
import Search from './components/search'
import { useState } from 'react'
import { DanmuListReqBody } from '../api/danmu/types'
import dayjs from 'dayjs'
import { Empty, Pagination, Spin, Tag } from 'antd'

export default function Home() {
  const [searchParams, setSearchParams] = useState<DanmuListReqBody>()
  const { data, loading, pagination } = usePagination(
    ({ current, pageSize }) =>
      getDanmuList({ page: current, size: pageSize, ...searchParams }).then(
        (res) => ({ list: res.data.list, total: res.data.total }),
      ),
    {
      refreshDeps: [searchParams],
      ready: !!searchParams?.uid,
    },
  )

  return (
    <div className="pt-6">
      <Search onSearch={setSearchParams} />

      <div className="pt-2">
        <Spin spinning={loading}>
          {data?.list.map((item) => (
            <div
              className="mb-2 flex flex-wrap items-center gap-x-4 border-b border-rose-50 py-3 last:mb-0 sm:flex-nowrap"
              key={item.id}
            >
              <div className="text-sm">
                {dayjs(item.sendTime).format('YYYY-MM-DD HH:mm:ss')}
              </div>
              <div className="flex">
                <Tag
                  className="flex !p-0"
                  color={item.badge?.active ? item.badge?.color : '#ccc'}
                >
                  <div className="px-2">{item.badge?.name}</div>{' '}
                  <div className="rounded-r bg-white px-1 text-slate-400">
                    {item.badge?.level}
                  </div>
                </Tag>
                {item.identity?.room_admin && <Tag color="pink">房</Tag>}
                <div>{item.user.uname}:</div>
              </div>
              <div>{item.content}</div>
            </div>
          ))}
          {(!data?.list || data.list.length === 0) && (
            <Empty
              description={<div className="dark:text-slate-400">暂无数据</div>}
              className="pt-20"
            />
          )}
        </Spin>

        {data?.list && data.list.length > 0 && (
          <div className="flex justify-center py-10">
            <Pagination {...pagination} />
          </div>
        )}
      </div>
    </div>
  )
}

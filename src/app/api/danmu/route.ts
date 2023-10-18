import { prisma } from '@/prisma/client'
import { type NextRequest } from 'next/server'
import { res200, res500 } from '../utils'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = Number(searchParams.get('page') ?? '1')
  const size = Number(searchParams.get('size') ?? '10')
  const uid = searchParams.get('uid') || undefined

  try {
    if (size > 100) return res500(null, '每页条数最大为100条')

    const res = await prisma.comment.findMany({
      skip: (page - 1) * size,
      take: size,
      include: {
        user: true,
      },
      where: { uid },
      orderBy: {
        sendTime: 'desc',
      },
    })
    const total = await prisma.comment.count({
      where: { uid },
    })
    return res200({
      page,
      size,
      total,
      list: res ?? [],
    } as IPage)
  } catch (error) {
    console.log(error)
    return res500()
  }
}

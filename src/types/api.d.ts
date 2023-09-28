declare namespace API {
  enum GuardLevel {
    /** 无 */
    None = 0,
    /** 总督 */
    Zongdu = 1,
    /** 提督 */
    Tidu = 2,
    /** 舰长 */
    Jianzhang = 3,
  }

  type DanmuType = {
    originId: string
    id: number
    createdAt: string
    updatedAt: string
    /** 弹幕发送时间 */
    sendTime: string
    /** 弹幕内容 */
    content: string
    /** 用户uid */
    uid: number
    /** 用户牌子·*/
    badge?: {
      /** 是否点亮 */
      active: boolean
      /** 牌子名称 */
      name: string
      /** 牌子等级 */
      level: number
      /** 牌子颜色 */
      color: string
      /** 渐变色牌子，当用户长时间未消费，则会变为灰色，即 `#c0c0c0` */
      gradient?: [string, string, string]
      /** 主播信息 */
      anchor: {
        /** 主播uid */
        uid: number
        /** 主播用户名 */
        uname: string
        /** 主播房间号 */
        room_id: number
        /** 是否为本直播间 */
        is_same_room?: boolean
      }
    }
    /** 用户身份 */
    identity?: {
      /** 直播榜单排名 */
      rank: 0 | 1 | 2 | 3
      /** 大航海信息 */
      guard_level: GuardLevel
      /** 房管 */
      room_admin: boolean
    }
    /** 弹幕内小表情映射，key为表情文字，如"[妙]" */
    in_message_emoticon?: Record<
      string,
      {
        id: string
        emoticon_id: number
        height: number
        width: number
        url: string
        description: string
      }
    >
    user: {
      uid: number
      uname: string
    }
  }
}

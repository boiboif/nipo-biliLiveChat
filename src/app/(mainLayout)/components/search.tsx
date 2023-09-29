'use client'
import { Form, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

type FormValue = { uid: number }

interface SearchProps {
  onSearch: (val: FormValue) => void
  loading?: boolean
}

const Search = (props: SearchProps) => {
  const { onSearch } = props
  const [form] = Form.useForm<FormValue>()

  return (
    <Form form={form} className="max-w-md">
      <Form.Item
        name="uid"
        rules={[
          // { required: true, message: '请输入uid' },
          { pattern: /\d+/, message: '请输入正确的uid' },
        ]}
      >
        <Input.Search
          placeholder="输入UID查询弹幕"
          size="large"
          onSearch={async () => {
            const vals = await form.validateFields()
            onSearch(vals)
          }}
          enterButton={
            <div>
              <SearchOutlined />
            </div>
          }
        />
      </Form.Item>
    </Form>
  )
}

export default Search

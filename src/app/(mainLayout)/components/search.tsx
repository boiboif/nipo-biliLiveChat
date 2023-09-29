'use client'
import { Form, Input, Grid } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

type FormValue = { uid: number }

interface SearchProps {
  onSearch: (val: FormValue) => void
  loading?: boolean
}

const { useBreakpoint } = Grid;

const Search = (props: SearchProps) => {
  const { onSearch } = props
  const [form] = Form.useForm<FormValue>()
  const { xs } = useBreakpoint()
  

  return (
    <Form form={form} className="max-w-md" size={xs ? 'middle' : 'large'}>
      <Form.Item
        name="uid"
        rules={[
          // { required: true, message: '请输入uid' },
          { pattern: /\d+/, message: '请输入正确的uid' },
        ]}
      >
        <Input.Search
          placeholder="输入UID查询弹幕"
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

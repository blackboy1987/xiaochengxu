import {PageContainer} from "@ant-design/pro-layout";
import {Button, Card, Form, Input, Select} from "antd";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};

const Base=()=>{

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <PageContainer title={false}>
      <Card size='small' bordered={false}>
        <Form
          {...layout}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="签到奖励（积分）"
            name="name"
            rules={[{ required: true, message: '必填' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="签到奖励（红包）"
            name="appId"
            rules={[{ required: true, message: '必填' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="appSecret"
            name="appSecret"
            rules={[{ required: true, message: '必填' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="logo"
            name="appSecret"
            rules={[{ required: true, message: '必填' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="状态"
            name="status"
            rules={[{ required: true, message: '必填' }]}
          >
            <Select>
              <Select.Option value={0}>待审核</Select.Option>
              <Select.Option value={1}>审核中</Select.Option>
              <Select.Option value={2}>已审核</Select.Option>
              <Select.Option value={3}>已拒绝</Select.Option>
              <Select.Option value={4}>已关闭</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </PageContainer>
  );
}

export default Base;

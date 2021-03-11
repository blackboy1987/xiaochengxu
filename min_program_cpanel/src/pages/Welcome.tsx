import React, {useState} from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import {Card, Alert, Typography, Button} from 'antd';
import {download} from "@/services/ant-design-pro/api";

export default (): React.ReactNode => {

  const [loading,setLoading] = useState<boolean>(false);

  const handleDownload = async () =>{
    setLoading(true);
    const result = await download({});
    console.log(result);
  }

  return (
    <PageContainer title={false} breadcrumb={{}}>
      <Card>
        <Alert
          message='欢迎体验小程序'
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          您选择得是电影小程序<Button loading={loading} type='primary' style={{marginLeft:24}} onClick={handleDownload}>获取源码下载地址</Button>
        </Typography.Text>
      </Card>
    </PageContainer>
  );
};

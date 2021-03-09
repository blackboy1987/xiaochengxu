
import React  from 'react';

import styles from './index.less';
import {Steps} from "antd";
import {PageContainer} from "@ant-design/pro-layout";

const { Step } = Steps;

const Register: React.FC = () => {

  return (
    <div className={styles.container}>
      <PageContainer title={false} breadcrumb={{}}>
        <Steps current={2}>
          <Step title="基本信息" />
          <Step title="登录信息"/>
          <Step title="小程序模板"/>
        </Steps>
      </PageContainer>
    </div>
  );
};

export default Register;

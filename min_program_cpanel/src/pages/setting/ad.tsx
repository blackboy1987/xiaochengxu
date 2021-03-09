import {FooterToolbar, PageContainer} from "@ant-design/pro-layout";
import {Button, Card, Col, Form, Input, Row} from "antd";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const ads={
  "play":{"bannerId":"adunit-a677d814a70242ba","rewardedVideoAdId":"adunit-e9566ae9ffbf6ad8","interstitialAdId":"adunit-d73c982ac406d17a","videoAdId":"adunit-958e71b940f00867","videoFrontAdId":"adunit-03083c87b390182a","gridAdId":"adunit-215747ef06bf81a0","nativeAdId":"adunit-0bf49dd0064f27b1"},
  "other":{"bannerId":"adunit-a677d814a70242ba","rewardedVideoAdId":"adunit-e9566ae9ffbf6ad8","interstitialAdId":"adunit-d73c982ac406d17a","videoAdId":"adunit-958e71b940f00867","videoFrontAdId":"adunit-03083c87b390182a","gridAdId":"adunit-215747ef06bf81a0","nativeAdId":"adunit-0bf49dd0064f27b1"},
  "feiLei":{"bannerId":"adunit-a677d814a70242ba","rewardedVideoAdId":"adunit-e9566ae9ffbf6ad8","interstitialAdId":"adunit-d73c982ac406d17a","videoAdId":"adunit-958e71b940f00867","videoFrontAdId":"adunit-03083c87b390182a","gridAdId":"adunit-215747ef06bf81a0","nativeAdId":"adunit-0bf49dd0064f27b1"},
  "index":{"bannerId":"adunit-a677d814a70242ba","rewardedVideoAdId":"adunit-e9566ae9ffbf6ad8","interstitialAdId":"adunit-d73c982ac406d17a","videoAdId":"adunit-958e71b940f00867","videoFrontAdId":"adunit-03083c87b390182a","gridAdId":"adunit-215747ef06bf81a0","nativeAdId":"adunit-0bf49dd0064f27b1"},
  "topic":{"bannerId":"adunit-a677d814a70242ba","rewardedVideoAdId":"adunit-e9566ae9ffbf6ad8","interstitialAdId":"adunit-d73c982ac406d17a","videoAdId":"adunit-958e71b940f00867","videoFrontAdId":"adunit-03083c87b390182a","gridAdId":"adunit-215747ef06bf81a0","nativeAdId":"adunit-0bf49dd0064f27b1"},
  "detail":{"bannerId":"adunit-a677d814a70242ba","rewardedVideoAdId":"adunit-e9566ae9ffbf6ad8","interstitialAdId":"adunit-d73c982ac406d17a","videoAdId":"adunit-958e71b940f00867","videoFrontAdId":"adunit-03083c87b390182a","gridAdId":"adunit-215747ef06bf81a0","nativeAdId":"adunit-0bf49dd0064f27b1"},
  "woDe":{"bannerId":"adunit-a677d814a70242ba","rewardedVideoAdId":"adunit-e9566ae9ffbf6ad8","interstitialAdId":"adunit-d73c982ac406d17a","videoAdId":"adunit-958e71b940f00867","videoFrontAdId":"adunit-03083c87b390182a","gridAdId":"adunit-215747ef06bf81a0","nativeAdId":"adunit-0bf49dd0064f27b1"}};

const Ad=()=>{

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <PageContainer title={false}>

      <Form
        {...layout}
        onFinish={onFinish}
        initialValues={ads}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Card size='small' bordered={false} title='首页广告' style={{marginBottom:24}}>
              <Form.Item name={['index', 'bannerId']} label='Banner广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['index', 'rewardedVideoAdId']} label='激励式广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['index', 'interstitialAdId']} label='插屏广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['index', 'videoAdId']} label='视频广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['index', 'videoFrontAdId']} label='视频贴片广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['index', 'gridAdId']} label='格子广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['index', 'nativeAdId']} label='原生模板广告' extra='不填不启用'>
                <Input />
              </Form.Item>
            </Card>
          </Col>
          <Col span={12}>
            <Card size='small' bordered={false} title='分类页广告' style={{marginBottom:24}}>
              <Form.Item name={['feiLei', 'bannerId']} label='Banner广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['feiLei', 'rewardedVideoAdId']} label='激励式广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['feiLei', 'interstitialAdId']} label='插屏广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['feiLei', 'videoAdId']} label='视频广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['feiLei', 'videoFrontAdId']} label='视频贴片广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['feiLei', 'gridAdId']} label='格子广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['feiLei', 'nativeAdId']} label='原生模板广告' extra='不填不启用'>
                <Input />
              </Form.Item>
            </Card>
          </Col>
          <Col span={12}>
            <Card size='small' bordered={false} title='专题页广告' style={{marginBottom:24}}>
              <Form.Item name={['topic', 'bannerId']} label='Banner广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['topic', 'rewardedVideoAdId']} label='激励式广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['topic', 'interstitialAdId']} label='插屏广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['topic', 'videoAdId']} label='视频广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['topic', 'videoFrontAdId']} label='视频贴片广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['topic', 'gridAdId']} label='格子广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['topic', 'nativeAdId']} label='原生模板广告' extra='不填不启用'>
                <Input />
              </Form.Item>
            </Card>
          </Col>
          <Col span={12}>
            <Card size='small' bordered={false} title='我的页广告' style={{marginBottom:24}}>
              <Form.Item name={['wode', 'bannerId']} label='Banner广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['wode', 'rewardedVideoAdId']} label='激励式广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['wode', 'interstitialAdId']} label='插屏广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['wode', 'videoAdId']} label='视频广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['wode', 'videoFrontAdId']} label='视频贴片广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['wode', 'gridAdId']} label='格子广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['wode', 'nativeAdId']} label='原生模板广告' extra='不填不启用'>
                <Input />
              </Form.Item>
            </Card>
          </Col>
          <Col span={12}>
            <Card size='small' bordered={false} title='详情页广告' style={{marginBottom:24}}>
              <Form.Item name={['detail', 'bannerId']} label='Banner广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['detail', 'rewardedVideoAdId']} label='激励式广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['detail', 'interstitialAdId']} label='插屏广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['detail', 'videoAdId']} label='视频广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['detail', 'videoFrontAdId']} label='视频贴片广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['detail', 'gridAdId']} label='格子广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['detail', 'nativeAdId']} label='原生模板广告' extra='不填不启用'>
                <Input />
              </Form.Item>
            </Card>
          </Col>
          <Col span={12}>
            <Card size='small' bordered={false} title='播放页广告' style={{marginBottom:24}}>
              <Form.Item name={['play', 'bannerId']} label='Banner广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['play', 'rewardedVideoAdId']} label='激励式广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['play', 'interstitialAdId']} label='插屏广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['play', 'videoAdId']} label='视频广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['play', 'videoFrontAdId']} label='视频贴片广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['play', 'gridAdId']} label='格子广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['play', 'nativeAdId']} label='原生模板广告' extra='不填不启用'>
                <Input />
              </Form.Item>
            </Card>
          </Col>
          <Col span={12}>
            <Card size='small' bordered={false} title='其他页广告' style={{marginBottom:24}}>
              <Form.Item name={['other', 'bannerId']} label='Banner广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['other', 'rewardedVideoAdId']} label='激励式广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['other', 'interstitialAdId']} label='插屏广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['other', 'videoAdId']} label='视频广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['other', 'videoFrontAdId']} label='视频贴片广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['other', 'gridAdId']} label='格子广告' extra='不填不启用'>
                <Input />
              </Form.Item>
              <Form.Item name={['other', 'nativeAdId']} label='原生模板广告' extra='不填不启用'>
                <Input />
              </Form.Item>
            </Card>
          </Col>
        </Row>
        <FooterToolbar>
          <Button type="primary" htmlType="submit">保存</Button>
        </FooterToolbar>
      </Form>


    </PageContainer>
  );
}

export default Ad;

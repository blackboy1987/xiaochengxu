import * as React from 'react';
import {View, Button, Image, Ad} from 'remax/wechat';
import classNames from 'classnames';
import './index.css';

const user = {
    answernum:444,
    sign_total:12,
    friend_num:33,
    totalrightnum:234,
    ad_video_num:3,
};
const sysinfo = {
    sys_inviterid_card:3,
    sys_ad_video_id:'1234',
    sys_ad_video_watchnum:5,
    sys_ad_gezi_id:'1234',
};
const btn = {
    make_video_btn_time: 12,
    make_video_btn: true,
}


export default () => {
  return (
    <>
        <View style={{height:20}} />
        <View className="cashout_maina">
            <View className="h2">{user.answernum}</View>
            <View className="h3">我的答题卡（张）</View>
            <View className="cont clearfix">
                <View className="box">
                    <View className="p">签到：{user.sign_total}</View>
                </View>
                <View className="box">
                    <View className="p">邀请：{user.friend_num}</View>
                </View>
                <View className="box">
                    <View className="p">答对：{user.totalrightnum}</View>
                </View>
            </View>
        </View>
        <View className="get_answer_main">
            <View className="h2">每日任务(领答题卡)</View>
            <View className="box clearfix">
                <Image src="/images/icon_haoyou.png" />
                <View className="text">
                    <View className="h3">邀请好友</View>
                    <View className="p">新用户奖励+{sysinfo.sys_inviterid_card}张</View>
                </View>
                <Button className="btn" openType="share">邀请</Button>
            </View>
            <View className="box clearfix">
                <Image src="/Images/icon_sign.png" />
                <View className="text">
                    <View className="h3">每日签到</View>
                    <View className="p">奖励答题卡</View>
                </View>
                <Button className="btn">签到</Button>
            </View>
            {
                sysinfo.sys_ad_video_id ? (
                    <View className="box clearfix">
                        <Image src="/Images/icon_shipin.png" />
                        <View className="text">
                            <View className="h3">观看视频</View>
                            <View className="p">随机奖励1~5张</View>
                        </View>
                        <Button bindtap="make_videoad"
                                className={classNames(
                                    'btn',
                                    user.ad_video_num>=sysinfo.sys_ad_video_watchnum?'disabled':''
                                )}
                                disabled={user.ad_video_num>=sysinfo.sys_ad_video_watchnum}
                                wx:if="{{!btn.make_video_btn}}">观看({user.ad_video_num}/{sysinfo.sys_ad_video_watchnum})
                        </Button>
                        {
                            btn.make_video_btn ? (
                                <Button className="btn disabled" disabled>{btn.make_video_btn_time}s</Button>
                            ) : null
                        }

                    </View>
                ) : null
            }
            {
                sysinfo.sys_ad_gezi_id ? (
                    <View>
                        <Ad adType='grid' unitId={sysinfo.sys_ad_gezi_id} />
                    </View>
                ) : null
            }

        </View>
        
    </>
  );
};

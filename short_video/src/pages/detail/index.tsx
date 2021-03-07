import * as React from 'react';
import { View,Video,ScrollView} from 'remax/wechat';
// @ts-ignore
import classNames from 'classnames';
import {usePageEvent} from 'remax/macro';

import './index.css';
import {post} from "@/util/wxUtils";
import {useState} from "react";

export default () => {
    const [data,setData] = useState<{[key:string]: any}>();
    const [list,setList] = useState<{[key:string]: any}[]>([]);
    usePageEvent('onLoad',(e)=>{
        post('short_video/detail',e,data=>{
            setData(data);
        })
    })

  return (
    <View className='app'>
        <Video
            className='video'
            src='https://bootx-video.oss-cn-hangzhou.aliyuncs.com/49159288/49159288.mp4'
            showFullscreenBtn={false}
        />
        <View className='content'>
            <View className='title'>{data?.title}</View>
        </View>
    </View>
  );
};

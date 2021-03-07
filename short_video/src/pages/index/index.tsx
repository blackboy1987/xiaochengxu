import * as React from 'react';
import { View, Text, Image,ScrollView } from 'remax/wechat';
// @ts-ignore
import classNames from 'classnames';
import {usePageEvent} from 'remax/macro';
import './index.css';
import {useState} from "react";
import BlankPage from "@/components/BlankPage";
import {post} from "@/util/wxUtils";

export type TabItem = {
    id: number;
    name: string;
}

export default () => {
    const [activeTab,setActiveTab] = useState<number>(3);
    const [data,setData] = useState<any[]>([]);
    const [tabs,setTabs] = useState<TabItem[]>([]);
    const [page,setPage] = useState<number>(1);

    const list =(id: number,page:number)=>{
        if(page===1){
            setData([]);
        }
        post("short_video/list",{
            categoryId:id,
            page:page||1,
        },res=>{
            setData([
                ...data,
                ...res,
            ]);
            setPage(page||1);
        })
    }

    const category = () =>{
        post("short_video/category",{},data=>{
            setTabs(data);
        })
    }

    usePageEvent('onLoad',()=>{
        category();
        list(activeTab,1);
    });

    /**
     * 分享
     */
    usePageEvent("onShareAppMessage",()=>{

    });

    usePageEvent('onReachBottom',()=>{
        list(activeTab,page+1);
    })

    usePageEvent('onPullDownRefresh',()=>{
        list(activeTab,1);
    })

  return (
    <View>
        <View className='tabs'>
            <View className='tabs-bar'>
                <ScrollView scrollX scrollIntoView={`item_${activeTab-3}`} scrollWithAnimation>
                    <View className='tabs-bar-content'>
                        {
                            tabs.map(item=>(
                                <View onClick={()=>{
                                    setActiveTab(item.id);
                                    list(item.id,1);
                                }} key={item.id} id={`item_${item.id}`} className={classNames('tabs-bar-content-item',activeTab==item.id?'active':'')}><View>{item.name}</View></View>
                            ))
                        }

                    </View>
                </ScrollView>
            </View>
            <View className='content'>
                {
                    data.length<=0 ? (<BlankPage />) : (
                        <>
                            {
                                data.map(video=>(
                                    <View className="list" key={video.id}>
                                        <View>
                                            <View>
                                                <Text className="video-txt">{video.title}</Text>
                                            </View>
                                            <View className="video-link">
                                                <Image className="video-img" src={video.videoImage} />
                                                <Text className="play-btn" />
                                                <Text className="list-video-time">{video.time}</Text>
                                            </View>
                                            <View className="video-footer">
                                                <View className="share-panel">分享</View>
                                            </View>
                                        </View>
                                    </View>
                                ))
                            }
                        </>
                    )
                }

            </View>
        </View>
    </View>
  );
};

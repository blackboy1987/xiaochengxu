// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import {Constants} from "@/utils/constants";

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.CurrentUser>(Constants.baseUrl+'currentUser', {
    method: 'POST',
    requestType:'form',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

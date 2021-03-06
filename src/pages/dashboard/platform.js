/*
 * @Author: Dad
 * @Date: 2020-07-14 17:23:44
 * @LastEditors: Dad
 * @LastEditTime: 2020-07-29 15:54:23
 */
import React from 'react';
import { Icon } from 'antd';
import UNXX from '@/assets/images/dashboard/Unxx.png';
import { createHashHistory } from 'history';
const history = createHashHistory();

const platform = () => {
  return (
    <div className="platform">
      <div className="platform-title">
        平台公告
        <span
          className="content-left--right"
          onClick={() => history.push('/admin/message')}
        >
          更多消息
          <Icon type="right-circle" style={{ marginLeft: 5 }} />
        </span>
      </div>
      <div className="content-sj">
        <img src={UNXX} alt="" />
        <div className="content-sj--data">暂无消息</div>
      </div>
    </div>
  );
};
export default platform;

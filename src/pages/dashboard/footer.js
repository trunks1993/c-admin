/*
 * @Author: Dad
 * @Date: 2020-07-14 16:22:59
 * @LastEditors: Dad
 * @LastEditTime: 2020-07-27 14:13:25
 */
import React, { useState } from 'react';

import GONGNENG from '@/assets/images/dashboard/gongneng.png';
import SHOP from '@/assets/images/dashboard/shop.png';
import DINDAN from '@/assets/images/dashboard/dindan.png';
import LIUSHUI from '@/assets/images/dashboard/liushui.png';
import JIAOYI from '@/assets/images/dashboard/jiaoyi.png';
import { createHashHistory } from 'history';
const history = createHashHistory();

const footer = () => {
  return (
    <div className="dashboard-footer">
      <div className="dashboard-footer--leftImg">
        <img src={GONGNENG} alt="" />
      </div>
      <div
        className="dashboard-footer--rightImg"
        onClick={() => history.push('/admin/shop/home')}
      >
        <div className="dashboard-footer--Img">
          <img src={SHOP} alt="" />
        </div>
        <p className="dashboard-footer--text">权益商城</p>
      </div>
      <div
        className="dashboard-footer--rightImg"
        onClick={() => history.push('/admin/shop/purchaseOrder')}
      >
        <div className="dashboard-footer--Img">
          <img src={DINDAN} alt="" />
        </div>
        <p className="dashboard-footer--text">采购订单</p>
      </div>
      <div
        className="dashboard-footer--rightImg"
        onClick={() => history.push('/admin/fund/cashFlow')}
      >
        <div className="dashboard-footer--Img">
          <img src={LIUSHUI} alt="" />
        </div>
        <p className="dashboard-footer--text">资金流水</p>
      </div>
      <div
        className="dashboard-footer--rightImg"
        onClick={() => history.push('/admin/operations/transaction/order')}
      >
        <div className="dashboard-footer--Img">
          <img src={JIAOYI} alt="" />
        </div>
        <p className="dashboard-footer--text">交易订单</p>
      </div>
    </div>
  );
};
export default footer;

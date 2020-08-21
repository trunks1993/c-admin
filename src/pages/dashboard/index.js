/*
 * @Date: 2020-07-01 11:32:59
 * @LastEditTime: 2020-08-21 11:43:26
 */
import React, { useEffect } from 'react';
import { connect } from 'dva';
import Title from './title';
import Content from './content';
import Footer from './footer';
import User from './user';
import Platform from './platform';

const dashboard = (props) => {
  const { list, amountInfo, dispatch } = props;
  useEffect(() => {
    dispatch({ type: 'account/setAmount' });
    dispatch({ type: 'account/setUser' });
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-left">
        <Title />
        <Content list={amountInfo} />
        <Footer />
      </div>
      <div className="dashboard-right">
        <User list={list} />
        <Platform />
      </div>
    </div>
  );
};

export default connect(({ account }) => ({
  list: account.user,
  amountInfo: account.amountInfo,
}))(dashboard);

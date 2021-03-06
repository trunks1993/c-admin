/*
 * @Date: 2020-06-30 11:25:08
 * @LastEditTime: 2020-07-22 09:57:26
 */

import request from '@/utils/request';
import md5 from 'js-md5';

/**
 * @name: 登录
 * @param {data}
 */
export async function fakeAccountLogin(data) {
  return request('/user/login', {
    method: 'POST',
    data,
  });
}

/**
 * @name: 获取用户信息
 * @param {type}
 */
export async function getUserInfo() {
  return request('/user/getUserInfo', {
    method: 'POST',
  });
}

/**
 * @name: 获取余额信息
 * @param {type}
 */
export async function getAccountInfo() {
  return request('/account/getAccount', {
    method: 'POST',
  });
}

/**
 * @name: 获取购物车
 * @param {type}
 */
export async function getCarData() {
  return request('/cart/loadCart', {
    method: 'POST',
  });
}

/**
 * @name: 修改密码
 * @param {type}
 */
export async function updatePassword({ newPassword, oldPassword }) {
  return request('/user/updatePassword', {
    method: 'POST',
    data: {
      newPassword: md5(newPassword),
      oldPassword: md5(oldPassword),
    },
  });
}

/**
 * @name: 修改资料
 * @param {type}
 */
export async function updateInfo(data) {
  return request('/user/updateUserInfo', {
    method: 'POST',
    data,
  });
}

/**
 * @name: 获取登录验证码
 * @param {type}
 */
export async function getLoginValidCode(data) {
  return request('/user/sendLoginValidateCode', {
    method: 'POST',
    data,
  });
}

/**
 * @name: 获取重置密码验证码
 * @param {type}
 */
export async function getResetPwdValidCode(data) {
  return request('/user/sendForgetPasswordValidateCode', {
    method: 'POST',
    data,
  });
}

/**
 * @name: 获取注册验证码
 * @param {type}
 */
export async function getSignUpValidCode(data) {
  return request('/user/sendRegisterValidateCode', {
    method: 'POST',
    data,
  });
}

/**
 * @name: 重置密码
 * @param {type}
 */
export async function resetPassword({ password, code, telephone }) {
  return request('/user/forgetPassword', {
    method: 'POST',
    data: {
      password: md5(password),
      code,
      telephone,
    },
  });
}

/**
 * @name: 重置密码
 * @param {type}
 */
export async function signUp({ aliasName, code, password, telephone }) {
  return request('/user/register', {
    method: 'POST',
    data: {
      password: md5(password),
      code,
      telephone,
      aliasName,
    },
  });
}

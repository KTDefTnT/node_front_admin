export default {
  emailValidator (rule: Array<object> | object, value: string, callback: Function) {
    if (!value) {
      callback(new Error('请输入邮箱地址'));
    }
    const reg = new RegExp(
      '^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$',
    ); //正则表达式
    if (!reg.test(value)) {
      callback(new Error('请输入正确的邮箱地址'))
    }
    callback();
  }
};
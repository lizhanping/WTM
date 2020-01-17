import enus from './en-US/default';
import zhcn from './zh-CN/default';
import lodash from 'lodash';
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import en_US from 'ant-design-vue/lib/locale-provider/en_US';
const locales = {
    'zh-CN': lodash.merge({}, zh_CN, zhcn),
    'en-US': lodash.merge({}, en_US, enus),
};
/**
 * 获取当前配置语言 的 value
 *
 * @export
 * @param {string} key 
 * @param {*} [defaultValue] 默认值
 * @returns
 */
export function getLocalesValue(key: string, defaultValue?) {
    return lodash.get('', key, defaultValue)
}
/**
 *
 *获取当前配置语言 的 value 格式化模板 
 * @export
 * @param {*} key
 * @param {*} values
 * @param {*} [defaultValue]
 * @returns
 */
export function getLocalesTemplate(key, values, defaultValue?) {
    return lodash.template(getLocalesValue(key, defaultValue), { interpolate: /{([\s\S]+?)}/g })(values)
}
export default locales
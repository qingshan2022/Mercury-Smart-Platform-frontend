const BACKEND_DOMAIN: string = "localhost";
// 用于gitee登录
const CLIENT_ID: string = 'b362ff5e6876e63ab4bc217f94bf0d05158f20f1ceadad0c8be8fd90299a7c44';
export const BASE_URL: string = `http://blog.${BACKEND_DOMAIN}:8899/api`;
const REDIRECT_URI: string = `${BASE_URL}/member/oauth2.0/gitee/success`;
export const BI_PATH: string = `http://120.53.236.156`;
export const WEB_SOCKET_PATH: string = `ws://blog.${BACKEND_DOMAIN}:8666`;
export const GITEE_OAUTH_URL: string = `https://gitee.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`
//OSS的外链域名
export const OSS_DOMAIN: string = "sawr9xqqu.hb-bkt.clouddn.com";

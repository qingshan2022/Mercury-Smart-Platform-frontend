import {DefaultFooter} from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
import {IconFont} from "@/utils";
import {BulbOutlined ,EyeInvisibleOutlined} from "@ant-design/icons";

const Footer: React.FC = () => {
  const defaultMessage = '水星智慧平台';
  const currentYear = new Date().getFullYear();

  if(location.pathname === '/notification'){
    return null;
  }

  return (

      <DefaultFooter
        style={{
          background: 'none',
        }}
        copyright={`${currentYear} ${defaultMessage}`}
        links={[
          {
            key: 'gitee',
            title: <span style={{margin: '0 8px'}}>
              <BulbOutlined style={{fontSize: 18}}/> 水星智慧平台系列:青山BI
            </span>,
            href: 'http://120.53.236.156/',
            blankTarget: true,
          },
          {
            key: 'beian',
            title: <span style={{margin: '0 8px'}}>
              <EyeInvisibleOutlined style={{fontSize: 18}}/> 没钱备案，谢邀
            </span>,
            href: 'https://beian.miit.gov.cn/',
            blankTarget: true,
          },
        ]}
      />
  );
};
export default Footer;

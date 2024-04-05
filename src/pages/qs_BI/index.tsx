import React from "react";
import {Card, Skeleton} from "antd";
import {history} from '@umijs/max';
import {BI_PATH} from "@/utils/constants";

const qs_BI: React.FC = ()=>{
  history.push(BI_PATH);

  return <Card style={{width: 1180, margin: '0 auto'}}>
    <Skeleton paragraph={{rows: 10}}/>
  </Card>
}

export default qs_BI

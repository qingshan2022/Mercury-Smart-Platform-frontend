import {history} from "@@/exports";
import React from 'react';
import Search from "antd/es/input/Search";

function onSearch(value: string) {
  history.push(`/search?type=blog&keyword=${value}`);
}

const HeaderSearch: React.FC = () => {
  return (
    <Search placeholder="搜索一下，你就知道" allowClear onSearch={onSearch} style={{marginRight: 24, width: 210}}/>
  );
};
export default HeaderSearch;

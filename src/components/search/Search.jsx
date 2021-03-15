import React, { Component } from "react";
import searchimg from "assets/img/search.png";
import { SearchWrap } from "./styledSearch";

export default class Search extends Component {
  render() {
    return (
      <SearchWrap width="0">
        <div>
          <img src={searchimg} alt="" />
          <span>想吃什么搜什么，如川菜</span>
        </div>
      </SearchWrap>
    );
  }
}

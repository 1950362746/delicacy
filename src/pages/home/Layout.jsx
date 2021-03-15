import { TabBar } from "antd-mobile";
import React, { Component } from "react";
import cookbook from "../../assets/img/cookbook.png";
import cookbookActive from "../../assets/img/cookbook-active.png";

import location from "../../assets/img/location.png";
import locationActive from "../../assets/img/location-active.png";

import menu from "../../assets/img/menu.png";
import menuActive from "../../assets/img/menu-active.png";

import more from "../../assets/img/more.png";
import moreActive from "../../assets/img/more-active.png";

import Cookbook from "./cookbook/Cookbook";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "cookbook",
      hidden: false,
      fullScreen: true,
    };
  }

  renderContent(pageText) {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          textAlign: "center",
        }}
      >
        <div style={{ paddingTop: 60 }}>
          Clicked “{pageText}” tab， show “{pageText}” information
        </div>
        <a
          style={{
            display: "block",
            marginTop: 40,
            marginBottom: 20,
            color: "#108ee9",
          }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a
          style={{ display: "block", marginBottom: 600, color: "#108ee9" }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
  }

  render() {
    return (
      <div
        style={
          this.state.fullScreen
            ? { position: "fixed", height: "100%", width: "100%", top: 0 }
            : { height: 400 }
        }
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="美食大全"
            key="cookbook"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${cookbook}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${cookbookActive}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            selected={this.state.selectedTab === "cookbook"}
            onPress={() => {
              this.setState({
                selectedTab: "cookbook",
              });
            }}
            data-seed="logId"
          >
            <Cookbook></Cookbook>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${menu}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${menuActive}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            title="分类"
            key="menu"
            selected={this.state.selectedTab === "menu"}
            onPress={() => {
              this.setState({
                selectedTab: "menu",
              });
            }}
            data-seed="logId1"
          ></TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${location}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background: `url(${locationActive}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            title="美食地图"
            key="location"
            selected={this.state.selectedTab === "location"}
            onPress={() => {
              this.setState({
                selectedTab: "location",
              });
            }}
          ></TabBar.Item>
          <TabBar.Item
            icon={{
              uri: `${more}`,
            }}
            selectedIcon={{
              uri: `${moreActive}`,
            }}
            title="更多"
            key="more"
            selected={this.state.selectedTab === "more"}
            onPress={() => {
              this.setState({
                selectedTab: "more",
              });
            }}
          ></TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

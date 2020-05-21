import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import data from './data';



const { SubMenu } = Menu;

class Sider extends React.Component {

    state = data;

  handleClick = (e) => {
    console.log("click ", e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <MailOutlined />
              <span>Notebook</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title={this.state[0].notebookTitle}>
            <Menu.Item key="1">{this.state[0].notes[0].notesTitle}</Menu.Item>
            <Menu.Item key="2">{this.state[0].notes[1].notesTitle}</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title={this.state[1].notebookTitle}>
            <Menu.Item key="3">{this.state[1].notes[0].notesTitle}</Menu.Item>
            <Menu.Item key="4">{this.state[1].notes[1].notesTitle}</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g3" title={this.state[2].notebookTitle}>
            <Menu.Item key="5">{this.state[2].notes[0].notesTitle}</Menu.Item>
            <Menu.Item key="6">{this.state[2].notes[1].notesTitle}</Menu.Item>
          </Menu.ItemGroup>
         
        </SubMenu>
        {/* <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <SettingOutlined />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu> */}
      </Menu>
    );
  }
}

export default Sider;

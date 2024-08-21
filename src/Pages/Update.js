import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

import { DiDatabase } from "react-icons/di";

import { Button, Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} width={250}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <Link to="/create">Tambah Kartu Keluarga</Link>,
            },
            {
              key: "2",
              icon: <DiDatabase />,
              label: <Link to="/read">List Kartu Keluarga</Link>,
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: <Link to="/update">Edit Kartu Keluarga</Link>,
            },
            {
              key: "4",
              icon: <UploadOutlined />,
              label: <Link to="/delete">Hapus Kartu Keluarga</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Update
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;

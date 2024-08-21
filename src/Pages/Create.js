import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

import { DiDatabase } from "react-icons/di";

import db from "../Config/firebas";
import {
  query,
  where,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  orderBy,
  deleteDoc,
} from "firebase/firestore";

import { Button, Layout, Menu, theme, Input } from "antd";

const { Header, Sider, Content } = Layout;
const App = () => {
  const [nomor, setNomor] = useState("");

  const submitDataKK = async () => {
    setNomor("");
    try {
      const docRef = await addDoc(collection(db, "KK"), {
        nomor: nomor,
        submitDate: new Date(),
      });

      await updateDoc(doc(db, "KK", docRef.id), {
        id: docRef.id,
        key: docRef.id,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

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
            padding: 10,
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
          <h3>Input Kartu Keluarga</h3>
          <Input
            value={nomor}
            onChange={(e) => setNomor(e.target.value)}
            size="large"
            placeholder="Masukkan nomor KK"
            prefix={<UserOutlined />}
          />
          <Button
            onClick={submitDataKK}
            style={{ marginTop: "20px" }}
            type="primary"
          >
            Submit KK
          </Button>

          <h3>Input Data Kartu Keluarga</h3>
          <Input
            size="large"
            placeholder="Masukkan nomor KK"
            prefix={<UserOutlined />}
          />
          <br />
          <br />
          <Input
            size="large"
            placeholder="Masukkan nomor NIK"
            prefix={<UserOutlined />}
          />
          <br />
          <br />
          <Input
            size="large"
            placeholder="Masukkan Nama Kepala Keluarga"
            prefix={<UserOutlined />}
          />
          <br />
          <br />
          <Input
            size="large"
            placeholder="Masukkan Tanggal Lahir"
            prefix={<UserOutlined />}
          />
          <br />
          <br />
          <Input
            size="large"
            placeholder="Masukkan Alamat"
            prefix={<UserOutlined />}
          />
          <Button style={{ marginTop: "20px" }} type="primary">
            Primary Button
          </Button>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;

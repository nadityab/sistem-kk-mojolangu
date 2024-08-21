import React, { useState, useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
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

import { Button, Layout, Menu, theme, Table, Space, Tag, Image } from "antd";
const { Header, Sider, Content } = Layout;

const App = () => {
  const [dataKKFromDB, setDataKKFromDB] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const columns = [
    {
      title: "No KK",
      dataIndex: "nomor",
      key: "id",
    },
  ];

  const columnsDetail = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a onClick={() => setVisible(true)}>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const dataDetail = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const [visible, setVisible] = useState(false);

  const fetchDataKK = async () => {
    let querySnapshot = await getDocs(
      query(collection(db, "KK"), orderBy("submitDate", "asc"))
    );
    const dataFromDB = querySnapshot.docs.map((doc) => doc.data());
    setDataKKFromDB(dataFromDB);
  };

  useEffect(() => {
    fetchDataKK();
  }, []);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={250}
        height="100%"
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["2"]}
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
          Read
          <Table
            columns={columns}
            expandable={{
              expandedRowRender: (record) => (
                <>
                  <Table columns={columnsDetail} dataSource={dataDetail} />
                  <Image
                    width={200}
                    style={{
                      display: "none",
                    }}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                    preview={{
                      visible,
                      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                      onVisibleChange: (value) => {
                        setVisible(value);
                      },
                    }}
                  />
                </>
              ),
              rowExpandable: (record) => record.name !== "",
            }}
            dataSource={dataKKFromDB}
          />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;

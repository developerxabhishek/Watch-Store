import "./Product.css";
import { FaFilter, FaSort } from "react-icons/fa";
import ProductCard from "../../Components/common/ProductCard/ProductCard";

import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


const sideritem=[
  {
    label:"Sort",
    key:"Sort",
    icon:<FaSort/>,
    children:[
      {
        label:"Bestsellers",
        key:"Bestsellers"
      },
      {
        label:"Price Low to High",
        key:"Price Low to High"
      },
      {
        label:"Price High to Low",
        key:"Price High to Low"
      },
      {
        label:"New Arrivals",
        key:"New Arrivals"
      },
    ]
  },
  {
    label:"Filter",
    key:"Filter",
    icon:<FaFilter/>,
    children:[
      {
        label:"color",
        key:"color",
        children:[
          {
            label:"Red",
            key:"Red"
          },
          {
            label:"Black",
            key:"Black"
          },
          {
            label:"Brown",
            key:"Brown"
          },
          {
            label:"Blue",
            key:"Blue"
          },
        ]
      },
      {
        label:"Price",
        key:"Price",
        children:[
          {
            label:"Below 2000 ",
            key:"Below 2000"
          },
          {
            label:"2000 - 5000 ",
            key:"2000 - 5000"
          },
          {
            label:"5000-20000 ",
            key:"5000-20000"
          },
          {
            label:"20000-50000 ",
            key:"20000-50000"
          },
          {
            label:"More than 50000",
            key:"More than 50000"
          }  
        ]
      }
    ]
  }
]



const Product = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{height:"100vh"}}>
      
      <Content
        style={{
          padding: '0 10px 0 0',
          overflow:"hidden"
        }}
      >
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
              paddingTop:"6vh",
              height:"100vh",
              position:"sticky",
    

            }}
            width={230}
            className="product-sider"
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
                backgroundColor:"black",
                color:"white",
                overflow:"scroll",
                fontSize:"1.5rem",
                paddingBottom:"2rem"
              }}
              className="product-sidebar-menu"
              items={sideritem}
            />
          </Sider>
          <Content
            style={{
              padding: '10vh 0',
              minHeight: 280,
              display:"flex",
              flexWrap:"wrap",
              justifyContent:"space-around",
              height:"100vh",
            }}
            className="product-content"
          >
            <ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/>
          </Content>
        </Layout>
      </Content>
      
    </Layout>
  );
};
export default Product;
import React from "react";
import Articles from "../components/articles";
//import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import Restaurants from "../components/restaurants";
import NextImage from "../components/image";
import { black, red, volcano, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta, grey } from '@ant-design/colors';

import { Button, DatePicker, Layout, Breadcrumb, Menu, Divider, Space } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const Home = ({ restaurants, articles, categories, homepage }) => {
    //console.log(yellow);

  return (
      <Layout className="layout" theme="dark" style={{backgroundColor: yellow.primary}}>
        <Seo seo={homepage.attributes.seo} />
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            {new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
          </Menu>
        </Header>
        <h1 style={{ textAlign: 'center' }}>{homepage.attributes.hero.title}</h1>
          <Space direction="vertical" size={50}>
              <Content style={{ padding: '0 50px' }}>
                  <div className="site-layout-content" style={{ textAlign: 'center' }}>

                          <Restaurants restaurants={restaurants} />
                          <Articles articles={articles} />
                  </div>
              </Content>
              <Footer style={{ textAlign: 'center', backgroundColor: 'black', color: 'yellow' }}>Yellow ©2022 Created by Yellow</Footer>
          </Space>
      </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, restaurantsRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/restaurants", { populate: ["picture"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      restaurants: restaurantsRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;

/*
      <Layout restaurants={restaurants}>
        <Seo seo={homepage.attributes.seo} />
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>{homepage.attributes.hero.title}</h1>
            <Restaurants restaurants={restaurants} />
            <Articles articles={articles} />
            <DatePicker/>
            <Button>Default Button</Button>
          </div>
        </div>
      </Layout>

*/
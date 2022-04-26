import React, { useState, useEffect } from 'react'

import { Layout, Breadcrumb, Menu, message, Dropdown, Space } from 'antd';
import { DownOutlined, UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import './layout.css'
import { Link, Route, Switch } from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
/**
* @author
* @function DefaultLayout
**/

export const DefaultLayout = ({ routers }) => {

    // function handleButtonClick(e) {
    //     message.info('Click on left button.');
    //     console.log('click left button', e);
    // }

    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                1st menu item
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                2nd menu item
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
                3rd menu item
            </Menu.Item>
        </Menu>
    );

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header className="header">
                <div className="logo" >
                    <img src="http://ims.data-annotation.ai/images/logoinfi.png" style={{ width: 83, objectFit: 'none' }} />
                </div>
                <Space wrap>
                    <Dropdown.Button overlay={menu} icon={<UserOutlined />}>
                        Dropdown
                    </Dropdown.Button>
                </Space>
            </Header>
            <Layout>
                <Sider width={175} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        {routers.map(menu => {
                            return menu.children && menu.children.length != 0 ? (
                                <SubMenu key={menu.path} icon={menu.icon} title={menu.title}>
                                    {
                                        menu.children.map(subMenu => {
                                            return <Menu.Item key={subMenu.path} icon={subMenu.icon}><Link to={subMenu.path}></Link>{subMenu.title}</Menu.Item>
                                        })
                                    }
                                </SubMenu>
                            ) : (
                                <Menu.Item key={menu.path}><Link to={menu.path}></Link>{menu.title}</Menu.Item>
                            )
                        })
                        }
                    </Menu>
                </Sider>
                <Layout style={{ color: 'green', height: '100%', padding: '0 24px 24px' }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            {
                                routers.map(router => {
                                    return router.children && router.children.length != 0 ? (
                                        router.children.map(subRouter => {
                                            return <Route exact={router.exact} path={subRouter.path}>
                                                {subRouter.component}
                                            </Route>
                                        })
                                    ) : (
                                        <Route exact={router.exact} path={router.path}>
                                            {router.component}
                                        </Route>
                                    )
                                })
                            }
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

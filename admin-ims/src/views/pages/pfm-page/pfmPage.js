import './style.css'
import { AddPfmsAction } from '../../../redux/actions/pfm';

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table, Input, Typography, Form, Descriptions, Badge, Dropdown, Button, Menu, message, DatePicker, Space, Modal, Cascader, TimePicker, InputNumber } from 'antd';
import { DownOutlined, UserOutlined, PlusOutlined, } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import moment from 'moment';

const { Text } = Typography

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
};
/**
* @author
* @function PfmPage
**/

export const PfmPage = (props) => {

    // function handleButtonClick(e) {
    //     message.info('Click on left button.');
    //     console.log('click left button', e);
    //   }

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

    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    //pop-up
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const [date, setDate] = useState('--:--:--')
    const [name, setName] = useState('')

    const options = [
        {
            value: 'FT',
            label: 'FT',
        },
        {
            value: 'PT',
            label: 'PT',
        },
    ];

    function onChange(value) {
        console.log(value);
    }


    useEffect(() => {
        setDate(new Date().toLocaleDateString())
    }, [])

    //
    // const [pageSize, setPageSize] = useState(10)
    // const [current, setCurrent] = useState(1)
    const [form] = useForm();
    const [columns] = useState([
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Start Time',
            dataIndex: 'startTime',
            key: 'startTime',
        },
        {
            title: 'End Time',
            dataIndex: 'endTime',
            key: 'endTime',
        },
        {
            title: 'Pfm',
            key: 'pfm',
            dataIndex: 'pfm'
        }
    ])
    const dispatch = useDispatch()

    const { success, loading, message, data } = useSelector((state) => {
        return state.pfms.addPfms
    })
    
    useEffect(() => {
        if (success) {
            onReset()
        }
    }, [success])

    // khi submit form thì thực thi
    const onFinish = (values) => {
        dispatch(AddPfmsAction(values))
    };

    const onReset = () => {
        form.resetFields();
    };


    return (
        <>
            <Descriptions title="User Info" bordered>
                <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
                <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
                <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
                <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
                <Descriptions.Item label="Usage Time" span={2}>
                    2019-04-24 18:00:00
                </Descriptions.Item>
                <Descriptions.Item label="Status" span={3}>
                    <Badge status="processing" text="Running" />
                </Descriptions.Item>
                <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
                <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
                <Descriptions.Item label="Config Info">
                    Data disk type: MongoDB
                    <br />
                    Database version: 3.4
                    <br />
                    Package: dds.mongo.mid
                    <br />
                    Storage space: 10 GB
                    <br />
                    Replication factor: 3
                    <br />
                    Region: East China 1<br />
                </Descriptions.Item>
            </Descriptions>
            <br />
            <h4>Daily performance</h4>
            <div >
                <div className="dropdown">
                    <div className="dropdown-container">
                        <p>Record</p>
                        <Dropdown overlay={menu}>
                            <Button>
                                All <DownOutlined />
                            </Button>
                        </Dropdown>
                    </div>
                    <div className="dropdown-container">
                        <p>WFH</p>
                        <Dropdown overlay={menu}>
                            <Button>
                                All <DownOutlined />
                            </Button>
                        </Dropdown>
                    </div>
                    <div className="dropdown-container">
                        <p>approve</p>
                        <Dropdown overlay={menu}>
                            <Button>
                                All <DownOutlined />
                            </Button>
                        </Dropdown>
                    </div>
                    <div className="dropdown-container">
                        <p>Date</p>
                        <Space direction="vertical">
                            <DatePicker onChange={onChange} />
                        </Space>
                    </div>
                    <Button type="primary" onClick={showModal}><PlusOutlined /></Button>
                    <Form form={form} onFinish={onFinish} title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000} >
                        <p>{date}</p>
                        <p>{name}</p>
                        <Form.Item name="role" options={options} onChange={onChange} defaultValue={["FT"]} rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="startTime" defaultValue={moment('08:00', 'HH:mm')} rules={[{ required: false }]}>
                            <Input  />
                        </Form.Item>
                        <Form.Item name="endTime" defaultValue={moment('17:00', 'HH:mm')} rules={[{ required: false }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="pfm" min={1} max={10} defaultValue={3} onChange={onChange} rules={[{ required: false }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Text type={success ? "success" : "danger"}>{message}</Text>
                            <br /> <br />
                            <Button type="primary" htmlType="submit" loading={loading}>
                                Add
                            </Button>
                            <Button htmlType="button" onClick={onReset}>
                                Reset
                            </Button>
                        </Form.Item>
                        <Table className="table"
                            columns={columns}
                            dataSource={data}
                        />
                    </Form>

                </div>
                <br />
                <Button type="primary">Search</Button>
            </div>

        </>
    )
}

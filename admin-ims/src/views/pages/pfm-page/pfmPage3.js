
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table, Input, Typography, Form, Descriptions, Badge, Dropdown, Button, Menu, message, DatePicker, Space, Modal, Cascader, TimePicker, InputNumber } from 'antd';
import { DownOutlined, UserOutlined, PlusOutlined, } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import moment from 'moment';

import './style.css'
// import { AddPfmsAction } from '../../../redux/actions/addpfm';
// import { FetchPfmsAction } from '../../../redux/actions/pfm';

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
* @function PfmPage3
**/

export const PfmPage3 = (props) => {

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
    const [pageSize, setPageSize] = useState(2)
    const [current, setCurrent] = useState(1)
    const [form] = useForm();
    const [columns] = useState([
        {
            title: 'NO',
            dataIndex: 'no',
            key: 'no',
            render: text => <a>{text}</a>,

        },
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

    // const { loading, data, total } = useSelector((state) => {
    //     return state.pfms.fetchPfms
    // })

    // const { addPfmLoading, success, message } = useSelector((state) => {
    //     return state.addpfms.addPfms
    // })

    // useEffect(() => {
    //     dispatch(FetchPfm3Action({ _page: current, _limit: pageSize }))
    // }, [current, pageSize])

    // khi submit form thì thực thi
    // const onFinish = (values) => {
    //     dispatch(AddPfm3Action(values))
    // };

    const onReset = () => {
        form.resetFields();
    };

    const onPageChange = (value) => {
        setCurrent(value)
    }

    return (
        <>
            <h4>Daily performance 3</h4>
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
                    <Form form={form} title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000} >
                        <p>{date}</p>
                        <p>{name}</p>
                        <Form.Item name="role" options={options} onChange={onChange} defaultValue={["FT"]} rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="startTime" defaultValue={moment('08:00', 'HH:mm')} rules={[{ required: false }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="endTime" defaultValue={moment('17:00', 'HH:mm')} rules={[{ required: false }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="pfm" min={1} max={10} defaultValue={3} onChange={onChange} rules={[{ required: false }]}>
                            <Input />
                        </Form.Item>

                        {/* <Form.Item {...tailLayout}>
                            <Text type={success ? "success" : "danger"}>{message}</Text>
                            <Button type="primary" htmlType="submit" loading={addPfmLoading}>
                                Add pfm
                            </Button>
                            <Button htmlType="button" onClick={onReset}>
                                Reset
                            </Button>
                        </Form.Item> */}
                        {/* <Table className="table"
                            columns={columns}
                            dataSource={data}
                            loading={loading}
                            pagination={{
                                pageSize,
                                current,
                                onChange: onPageChange,
                                total
                            }}
                        /> */}
                    </Form>
                </div>
                <br />
                <Button type="primary">Search</Button>
            </div>
        </>
    )
}


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Input, Typography, Form, Button, Select, DatePicker, Space } from 'antd';
import { useForm } from 'antd/es/form/Form';
import moment from 'moment';

import './style.css'
import { AddPfm1Action } from '../../../redux/actions/page1Action';
import { FetchPfm1Action } from '../../../redux/actions/page1Action';
import { FetchUserAction } from '../../../redux/actions/user';
import { DeletePfm1Action } from '../../../redux/actions/page1Action';

const { Text } = Typography

const tailLayout = {
    wrapperCol: { offset: 10, span: 8 },
};
/**
* @author
* @function PfmPage1
**/

export const PfmPage1 = () => {

    const [pageSize, setPageSize] = useState(6)
    const [current, setCurrent] = useState(1)
    const [form] = useForm();
    const [columns] = useState([
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
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
        },
        {
            title: 'Actions',
            key: 'actions',
            dataIndex: 'actions',
            render: (data) => (
                <Space>
                    <a>Edit</a>
                    <a onClick={() => deleteAction(data)}>Delete</a>
                </Space>
            )
        }

    ])
    const dispatch = useDispatch()

    // lấy data trong pfm
    const { loading, data, total } = useSelector((state) => {
        return state.pfm1.fetchPfm1
    })

    // lấy data lúc add pfm
    const { addPfmLoading, success, message } = useSelector((state) => {
        return state.pfm1.addPfm1
    })

    // fetch pfm
    useEffect(() => {
        dispatch(FetchPfm1Action({ _page: current, _limit: pageSize }))
    }, [current, pageSize])

    // fetch username
    useEffect(() => {
        dispatch(FetchUserAction())
    }, [])

    // lấy tên user  
    const { nameOfUser } = useSelector((state) => {
        return state.user.fetchUser
    })

    // khi submit form thì thực thi add pfm
    const onFinish = (values) => {
        dispatch(AddPfm1Action(values))
    };

    // delete pfm

    const deleteAction = (data) => {
        console.log(data);
        dispatch(DeletePfm1Action(data.id))
    }


    const onReset = () => {
        form.resetFields();
    };

    const onPageChange = (value) => {
        setCurrent(value)
    }
    return (
        <>
            <h2>Daily performance 1</h2>   
            {nameOfUser}       
            <div>
                <div className="dropdown">
                    <Form form={form} onFinish={onFinish} title="Basic Modal" width={1000} labelCol={{ span: 6 }}
                        wrapperCol={{ span: 12 }}
                        layout="horizontal">
                        <Form.Item name="date" label="Date" rules={[{ required: true }]}>
                            <DatePicker value={Array.from(moment().utc()).splice(10)} />
                        </Form.Item>
                        <Form.Item name="name" label="Name" rules={[{ required: true }]} initialValue={nameOfUser}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="role" label="Role" rules={[{ required: true }]}>
                            <Select>
                                <Select.Option value="Annotator">Annotator</Select.Option>
                                <Select.Option value="Modify">Modify</Select.Option>
                                <Select.Option value="QA">QA</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="startTime" label="Start Time" rules={[{ required: true }]} initialValue="08:00">
                            <Input />
                        </Form.Item>
                        <Form.Item name="endTime" label="End Time" rules={[{ required: true }]} initialValue="17:00">
                            <Input />
                        </Form.Item>
                        <Form.Item name="pfm" label="Performance" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Text type={success ? "success" : "danger"}>{message}</Text>
                            <div>
                                <Button type="primary" htmlType="submit" loading={addPfmLoading} >
                                    Add pfm
                                </Button>
                                <Button htmlType="button" onClick={onReset}>
                                    Reset
                                </Button>
                            </div>
                        </Form.Item>
                        <Table className="table"
                            columns={columns}
                            dataSource={data}
                            loading={loading}
                            pagination={{
                                pageSize,
                                current,
                                onChange: onPageChange,
                                total
                            }}
                        />
                    </Form>
                </div>
            </div>
        </>
    )
}

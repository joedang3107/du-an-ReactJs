import React, { useState, useEffect } from 'react'
import { Table, Tag, Space, Layout, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectsAction } from '../../../../redux/actions/projects';
import { PfmPage } from '../../pfm-page/pfmPage1'
import { useHistory } from "react-router"
import { Link, Switch, Route, Router, } from 'react-router-dom'
import { debounce } from '../../../../helpers'

const { Header, Content, Sider } = Layout;
const { Search } = Input;
/**
* @author
* @function Projects
**/



export const Projects = (props) => {

    const history = useHistory()

    const [columns] = useState([
        {
            title: 'PROJECT CODE ',
            dataIndex: 'code',
            key: 'code',
            render: (text, data) => (
                <a onClick={() => performance(data)}>{text}</a>
            )
        },
        {
            title: 'PROJECT NAME',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'PROJECT TYPE',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'START DATE',
            dataIndex: 'startDate',
            key: 'startDate',
        },
        {
            title: 'END DATE',
            dataIndex: 'endDate',
            key: 'endDate',
        },
        {
            title: 'SOURCE',
            dataIndex: 'source',
            key: 'source',
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'status',
        },
    ]);

    const performance = (data) => {
        const { id } = data
        history.push(`/project/performance/${id}`)
    }


    const [pageSize, setPageSize] = useState(2)
    const [current, setCurrent] = useState(1)
    const [keyword, setKeyword] = useState("")

    const { loading, message, data, total } = useSelector(state => {
        return state.projects.projects
    })

    // search
    let dispatch = useDispatch()

    const onPageChange = (value) => {
        setCurrent(value)
    }

    const onSearch = value => {
        searchDebounce({ keyword: value })
    }

    const onSearchChange = event => {
        setTimeout(() => {
            let value = event.target.value
            searchDebounce({ keyword: value })
        }, 500);
    }

    const search = ({ keyword }) => {
        setCurrent(1)
        // lưu lại giá trị của keyword
        setKeyword(keyword)
        dispatch(fetchProjectsAction({ _page: current, _limit: pageSize, keyword }))
    }

    const searchDebounce = debounce(search, 500)

    useEffect(() => {
        dispatch(fetchProjectsAction({ _page: current, _limit: pageSize, keyword }))
    }, [current, pageSize])

    return (
        <div id="project-list">
            <div className="search-input">
                <Search placeholder="input search text" onSearch={onSearch} onChange={onSearchChange} enterButton />
            </div>
            <Table columns={columns} dataSource={data} loading={loading} pagination={{
                pageSize,
                current,
                onChange: onPageChange,
                total
            }}
            />
        </div>

    )
}

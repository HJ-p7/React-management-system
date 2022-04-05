import React, { memo, useState, useEffect } from 'react'
import {Card, Table} from 'antd'
import axios from 'axios'

export default memo(function Index() {
    const [data, setData] = useState()
    /* useEffect(async() => {
        // 请求发起,当我们需要写很多async/await请求的时候，我们可以用这种写法
        const getData = () => {
            return axios.get('http://localhost:3001/user')
        }
        const getData2 = () => {
            return axios.get('http://localhost:3001/user')
        }
        let a = await getData()
        let a2 = await getData2()
        console.log(a)
        console.log(a2)
    }) */
    useEffect(() => {
        // 我们的请求比较少的时候,直接这样写就行
        const getData = async () => {
            const { data } = await axios.get('http://localhost:3001/user')
            console.log(data)
            const { user } = { ...data }
            setData(user)
        }
        getData()
    }, [])
    const colums = [
        {
            title: 'id',
            dataIndex: 'id'
        },
        {
            title: '姓名',
            dataIndex: 'name'
        },
        {
            title: '年龄',
            dataIndex: 'age'
        },
        {
            title: '性别',
            dataIndex: 'isMale',
            render(isMale) {
                return isMale === true ? '男' : '女'
            }
        },
        {
            title: '地址',
            dataIndex: 'address'
        },
        {
            title: '手机号',
            dataIndex: 'phone'
        }
    ]
    return (
        <div>
            <Card title='基础表格'>
                <Table dataSource={data} columns={colums} />
            </Card>
        </div>
    )
})

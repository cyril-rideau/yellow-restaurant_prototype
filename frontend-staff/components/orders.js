import React from "react";
import { Table, Badge, Menu, Dropdown, Space, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Cookie from "js-cookie";

const OrderList = ({ orders, slug }) => {
    const dataSource = [];

    const menu = (
        <Menu>
            <Menu.Item>Action 1</Menu.Item>
            <Menu.Item>Action 2</Menu.Item>
        </Menu>
    );

    const expandedRowRender = (record) => {
        const columnsNested = [
            { title: 'Dish', dataIndex: 'name', key: 'name' },
            { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
        ];

        const data = [];
        record.dishes.forEach((dish) => {
            data.push({
                name: dish.dish.data.attributes.name,
                quantity: dish.quantity,
            })
        })
        return <Table columns={columnsNested} dataSource={data} pagination={false} />;
    };

    orders.forEach((order) => {
        if (slug != order.attributes.restaurant.data.attributes.Slug || order.attributes.done) {
            return
        }
        dataSource.push({
            id: order.id,
            totalPrice: order.attributes.totalPrice,
            username: order.attributes.user.data.attributes.username,
            done: order.attributes.done,
            dishes: order.attributes.dishes,
        });
    });

    const validate = (id) => {
        const token = Cookie.get("token");
        fetch("http://localhost:1337/api/orders/" + id, {
            method: 'PUT',
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                data: {
                    done: true
                }
            })
        })
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Total Price',
            dataIndex: 'totalPrice',
            key: 'totalPrice',
        },
        {
            title: 'User',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Done',
            dataIndex: 'done',
            key: 'done',
        },
        {
            title: 'Validate',
            dataIndex: 'validate',
            key: 'action',
            render: (text, record) => (
                <Button type="primary" id={record.id} onClick={() => validate(record.id)}>
                    Validate Order
                </Button>
            )
        },
    ];

    return (
    <div>
        <Table
            className="components-table-demo-nested"
            id="orders"
            columns={columns}
            expandable={{ expandedRowRender }}
            dataSource={dataSource}
        />
    </div>)
};

export default OrderList;

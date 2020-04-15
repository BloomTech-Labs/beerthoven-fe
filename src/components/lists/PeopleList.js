import React from 'react';
import { Table, Button, Empty } from 'antd';

const PeopleList = ({ list, onDelete, onEdit }) => {

    // define the columns of the table
    const columns = [
        {
            title: 'First',
            dataIndex: 'first_name'
        },
        {
            title: 'Last',
            dataIndex: 'last_name'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        },
        {
            title: 'City',
            dataIndex: 'city'
        },
        {
            title: 'Zip',
            dataIndex: 'zip'
        },
        // actions/buttons
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: row => (
                <>
                    <Button type="link" onClick={() => onEdit(row.id)}>Edit</Button> |
                    <Button type="link" onClick={() => onDelete(row.id)}>Delete</Button>
                </>
            )
        }
    ];

    // define the data of the table
    const data = list.map(item => {
        return { ...item, key: item.id };
    });

    // define the table
    return (
        <Table
            columns={columns}
            dataSource={data}
            locale={{ emptyText: <Empty /> }}
        />
    );

};

export default PeopleList;

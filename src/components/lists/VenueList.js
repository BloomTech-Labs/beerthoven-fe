import React from 'react';
import { Table, Button } from 'antd';

const VenueList = ({ list, onDelete, onEdit }) => {

    // define the columns of the table
    const columns = [
        {
            title: 'Date Created',
            dataIndex: 'date_created'
        },
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Venue Type',
            dataIndex: 'venue_type'
        },
        {
            title: 'Address',
            dataIndex: 'address'
        },
        {
            title: 'City',
            dataIndex: 'city'
        },
        {
            title: 'State',
            dataIndex: 'state'
        },
        {
            title: 'Zip',
            dataIndex: 'zip'
        },
        {
            title: 'Max Capacity',
            dataIndex: 'max_capacity'
        },
        {
            title: 'Min Income',
            dataIndex: 'min_income'
        },
        {
            title: 'Deposit Amount',
            dataIndex: 'deposit_amount'
        },
        {
            title: 'Smoking Allowed',
            dataIndex: 'smoking_allowed'
        },
        {
            title: 'Under 21 Allowed',
            dataIndex: 'under21_allowed'
        },
        {
            title: 'Under 18 Allowed',
            dataIndex: 'under18_allowed'
        },
        {
            title: 'Wheelchair Accessible',
            dataIndex: 'wheelchair_accessible'
        },
        {
            title: 'Food Served',
            dataIndex: 'food_served'
        },
        {
            title: 'Indoor Venue',
            dataIndex: 'indoor_venue'
        },
        {
            title: 'Tab C Certified',
            dataIndex: 'tabc_certified'
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
        />
    );

};

export default VenueList;

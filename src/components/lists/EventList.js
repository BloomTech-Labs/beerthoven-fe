import React from 'react';
import { Table, Button, Empty } from 'antd';

const EventList = ({ list, onDelete, onEdit }) => {
	// define the columns of the table
	const columns = [
		{
			title     : 'Event Name',
			dataIndex : 'event_name',
        },
        {
            title: 'Event Type',
            dataIndex: 'event_type',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'City',
            dataIndex: 'city',
        },
        {
            title: 'State',
            dataIndex: 'state',
        },
        {
            title: 'Zip',
            dataIndex: 'zip',
        },
        {
            title: 'Event Description',
            dataIndex: 'event_description',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: row => (
                <>
                    <Button type='link' onClick={() => onEdit(row.id)}>Edit</Button>
                    <Button type='link' onClick={() => onDelete(row.id)}>Delete</Button>
                </>
            )
        }
	];

	const data = list.map(item => {
		return { ...item, key: item.id };
	});

    return (
        <Table
            columns={columns}
            dataSource={data}
            locale={{ emptyText: <Empty /> }}
        />);
};

export default EventList;

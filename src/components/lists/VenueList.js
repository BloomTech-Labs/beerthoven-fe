import React from "react";
import { Table, Button, Empty } from "antd";

const VenueList = ({ list, onDelete, onEdit }) => {
  // define the columns of the table
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Venue Type",
      dataIndex: "venue_type",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "City",
      dataIndex: "city",
    },
    {
      title: "State",
      dataIndex: "state",
    },
    {
      title: "Zip",
      dataIndex: "zip",
    },

    // actions/buttons
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (row) => (
        <>
          <Button type="link" onClick={() => onEdit(row.id)}>
            Edit
          </Button>{" "}
          |
          <Button type="link" onClick={() => onDelete(row.id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  // define the data of the table
  const data = list.map((item) => {
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

export default VenueList;

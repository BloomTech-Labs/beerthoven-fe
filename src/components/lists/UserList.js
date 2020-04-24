import React from "react";
import { Table, Button, Empty } from "antd";

const UserList = ({ list, onDelete, onEdit }) => {
  // define the columns of the table
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Date created",
      dataIndex: "date_created",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
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

export default UserList;

import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import { Button } from "antd";

const CRUD = ({
  route,
  data,
  onEdit,
  onDelete,
  onSubmit,
  listComponent: List,
  formComponent: Form,
}) => {
  return (
    <div>
      <Switch>
        <Route path={`/${route}/form/:id?`}>
          <Form onSubmit={onSubmit} />
        </Route>
        <Route>
          <Link to={`/${route}/form`}>
            <Button type="primary">Add</Button>
          </Link>
          {(!data || !data.length) && <p>Loading...</p>}
          {data && data.length && (
            <List list={data} onEdit={onEdit} onDelete={onDelete} />
          )}
        </Route>
      </Switch>
    </div>
  );
};

export default CRUD;

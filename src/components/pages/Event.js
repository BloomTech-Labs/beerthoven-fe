import React from "react";
import EventForm from "../forms/EventForm";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import { Button } from "antd";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "../graphql/mutations";
import { ALL_EVENTS } from "../graphql/queries";
import {
  updateAfterEventCreate,
  updateAfterEventChange,
  updateAfterEventDelete,
} from "../graphql/cache";
import EventList from "../lists/EventList";

/**
 * This component should have internal routing to both a list of
 * event and a form to add/edit event
 */

const Event = () => {
  const history = useHistory();

  const [createEvent] = useMutation(CREATE_EVENT, {
    update: updateAfterEventCreate, // updates the local apollo cache
  });

  const [updateEvent] = useMutation(UPDATE_EVENT, {
    update: updateAfterEventChange,
  });

  const [deleteEvent] = useMutation(DELETE_EVENT, {
    update: updateAfterEventDelete,
  });

  const { loading, data } = useQuery(ALL_EVENTS);

  const onSubmit = (formData, eventId) => {
    console.log("data", data);

    if (eventId) {
      const params = {
        variables: {
          id: eventId,
          updates: formData,
        },
      };
      updateEvent(params);
    } else {
      createEvent({
        variables: { newEvent: formData },
      });
    }
  };

  const onEdit = (eventId) => {
    history.push(`/event/form/${eventId}`);
  };

  const onDelete = (eventId) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      deleteEvent({
        variables: { id: eventId },
      });
    }
  };

  return (
    <div>
      <Switch>
        <Route path="/event/form/:id?">
          <EventForm onSubmit={onSubmit} />
        </Route>
        <Route>
          <Link to="/event/form">
            <Button type="primary">Add</Button>
          </Link>
          {loading && <p>Loading...</p>}
          {data && data.events.length && (
            <EventList list={data.events} onEdit={onEdit} onDelete={onDelete} />
          )}
        </Route>
      </Switch>
    </div>
  );
};

export default Event;

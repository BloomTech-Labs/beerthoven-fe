import React from "react";
import EventForm from "../forms/EventForm";
import { useHistory } from "react-router-dom";
import CRUD from "./CRUD";
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

  const { data } = useQuery(ALL_EVENTS);

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
    <CRUD
      route="event"
      data={data ? data.events : null}
      onSubmit={onSubmit}
      onEdit={onEdit}
      onDelete={onDelete}
      listComponent={EventList}
      formComponent={EventForm}
    />
  );
};

export default Event;

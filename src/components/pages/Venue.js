import React from "react";
import { useHistory } from "react-router-dom";
import VenueForm from "../forms/VenueForm";
import VenueList from "../lists/VenueList";
import { Link, Route, Switch } from "react-router-dom";
import { Button } from "antd";
import CRUD from "./CRUD";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { CREATE_VENUE, UPDATE_VENUE, DELETE_VENUE } from "../graphql/mutations";
import { ALL_VENUES } from "../graphql/queries";
import {
  updateAfterVenueCreate,
  updateAfterVenueChange,
  updateAfterVenueDelete,
} from "../graphql/cache";

/**
 * This component should have internal routing to both a list of
 * venues and a form to add/edit venue
 */

const Venue = () => {
  // redirects to /form or /form/:id routes
  const history = useHistory();

  const [createVenue] = useMutation(CREATE_VENUE, {
    //when created updates the cache
    update: updateAfterVenueCreate,
  });

  const [updateVenue] = useMutation(UPDATE_VENUE, {
    //venue is updated
    update: updateAfterVenueChange,
  });

  const [deleteVenue] = useMutation(DELETE_VENUE, {
    //when venue is deleted update cache
    update: updateAfterVenueDelete,
  });

  const { loading, data } = useQuery(ALL_VENUES);

  const onSubmit = (formData, venueId) => {
    console.log("data", data);

    if (venueId) {
      //venue is updated
      updateVenue({
        variables: {
          id: venueId,
          updates: formData,
        },
      });
    } else {
      //venue is created
      createVenue({
        variables: { newVenue: formData },
      });
    }
  };

  const onEdit = (venueId) => {
    history.push(`/venue/form/${venueId}`); //redirect to page id
  };

  const onDelete = (venueId) => {
    console.log("delete this venue", venueId);
    if (
      window.confirm("Are you sure you want to delete this from the record?")
    ) {
      console.log("delete venue variables", JSON.stringify({ id: venueId }));
      deleteVenue({
        variables: { id: venueId },
      });
    }
  };
console.log(data)
  return (
    <div>
      <CRUD
        route="venue"
        data={data ? data.venues : null}
        onSubmit={onSubmit}
        onEdit={onEdit}
        onDelete={onDelete}
        listComponent={VenueList}
        formComponent={VenueForm}
      />
    </div>
  );
};

export default Venue;

import React from "react";
import { render } from "@testing-library/react";
import PeopleList from "./PeopleList";
import { list } from "../../test-data/people";

// test data

test("renders an empty list", () => {
  const { getByText } = render(<PeopleList list={[]} />);
  expect(getByText("No Data")).toBeInTheDocument();
});

test("renders a list with length", () => {
  const { getByText } = render(<PeopleList list={list} />);

  // expect first array item to be in the document
  expect(getByText(list[0].first_name)).toBeInTheDocument();

  // expect last array item to be in the document
  expect(getByText(list[list.length - 1].first_name)).toBeInTheDocument();
});

test("edit button works", () => {
  const onEdit = jest.fn();
  const singleItemList = [list[0]];
  const { getByText } = render(
    <PeopleList list={singleItemList} onEdit={onEdit} />
  );

  // get and click button
  const editBtn = getByText("Edit");
  editBtn.click();

  expect(onEdit).toHaveBeenCalledTimes(1);
  expect(onEdit).toHaveBeenCalledWith(singleItemList[0].id);
});

test("delete button works", () => {
  const onDelete = jest.fn();
  const singleItemList = [list[0]];
  const { getByText } = render(
    <PeopleList list={singleItemList} onDelete={onDelete} />
  );

  // get and click button
  const deleteBtn = getByText("Delete");
  deleteBtn.click();

  expect(onDelete).toHaveBeenCalledTimes(1);
  expect(onDelete).toHaveBeenCalledWith(singleItemList[0].id);
});

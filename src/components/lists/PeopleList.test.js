import React from 'react';
import { render } from '@testing-library/react';
import PeopleList from './PeopleList';

// test data
const list = [
	{
		id           : 'ck91ki0u350rj0814lrdhd9ge',
		date_created : '2020-04-15T16:47:02.331Z',
		first_name   : 'Darius',
		last_name    : 'Davis',
		email        : 'Megane.Bayer@hotmail.com',
		phone        : '512-218-6343 x280',
		address      : '131 Millie Rapid',
		address2     : 'Apt. 919',
		city         : 'East Deshawnchester',
		state        : 'SC',
		zip          : '97465-2044',
	},
	{
		id           : 'ck91ki1q250ss0814lcgwo1mm',
		date_created : '2020-04-15T16:47:03.482Z',
		first_name   : 'Garland',
		last_name    : 'Weber',
		email        : 'Kylie.Farrell65@hotmail.com',
		phone        : '339-791-0143',
		address      : '8093 Krajcik Crest',
		address2     : 'Apt. 611',
		city         : 'Arielletown',
		state        : 'NM',
		zip          : '84037',
	},
	{
		id           : 'ck91ki2t450u108145wza5ms4',
		date_created : '2020-04-15T16:47:04.888Z',
		first_name   : 'Morton',
		last_name    : 'Cole',
		email        : 'Kamren_Casper65@hotmail.com',
		phone        : '354-998-4209',
		address      : '6758 Elton Plaza',
		address2     : 'Apt. 776',
		city         : 'North Angelicaview',
		state        : 'TX',
		zip          : '99972-5185',
	},
	{
		id           : 'ck91ki3vr50va08142dx4pdty',
		date_created : '2020-04-15T16:47:06.279Z',
		first_name   : 'Luther',
		last_name    : 'Huel',
		email        : 'Elisha_Mitchell@gmail.com',
		phone        : '634-263-3323 x3675',
		address      : '215 Adah Prairie',
		address2     : 'Apt. 720',
		city         : 'Port Marian',
		state        : 'MA',
		zip          : '74068',
	},
];

test('renders an empty list', () => {
	const { getByText } = render(<PeopleList list={[]} />);
	expect(getByText('No Data')).toBeInTheDocument();
});

test('renders a list with length', () => {
	const { getByText } = render(<PeopleList list={list} />);

	// expect first array item to be in the document
	expect(getByText(list[0].first_name)).toBeInTheDocument();

	// expect last array item to be in the document
	expect(getByText(list[list.length - 1].first_name)).toBeInTheDocument();
});

test('edit button works', () => {
	const onEdit = jest.fn();
	const singleItemList = [
		list[0],
	];
	const { getByText } = render(<PeopleList list={singleItemList} onEdit={onEdit} />);

	// get and click button
	const editBtn = getByText('Edit');
	editBtn.click();

	expect(onEdit).toHaveBeenCalledTimes(1);
	expect(onEdit).toHaveBeenCalledWith(singleItemList[0].id);
});

test('delete button works', () => {
	const onDelete = jest.fn();
	const singleItemList = [
		list[0],
	];
	const { getByText } = render(<PeopleList list={singleItemList} onDelete={onDelete} />);

	// get and click button
	const deleteBtn = getByText('Delete');
	deleteBtn.click();

	expect(onDelete).toHaveBeenCalledTimes(1);
	expect(onDelete).toHaveBeenCalledWith(singleItemList[0].id);
});

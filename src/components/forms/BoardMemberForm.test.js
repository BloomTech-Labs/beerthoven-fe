import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import BoardMemberForm from './BoardMemberForm';
import mockBoardMember from '../../test-data/boardmember';

beforeEach(cleanup);

test('all data is submitted', async () => {
    const onSubmit = jest.fn();
    
    const { getByLabelText, getByText } = render(<BoardMemberForm onSubmit={onSubmit} />);

    // get nodes
    const boardServiceDatesNode = getByLabelText('Board service dates');
    const specialSkillsNode = getByLabelText('Special Skills');
    const officerNode = getByLabelText('Officer');
    const committeeChairNode = getByLabelText('Committee chair');
    const committeesServedNode = getByLabelText('Committees Served');
    const businessWebsiteNode = getByLabelText('Business website');
    const businessStreetAddress = getByLabelText('Business street address');
    const businessEmailNode = getByLabelText('Business email');
    const businessPhoneNode = getByLabelText('Business phone number');

    const submitBtn = getByText('Submit');

    // set field values
    fireEvent.change(boardServiceDatesNode, { target: { value: mockBoardMember.board_service_dates } });
    fireEvent.change(specialSkillsNode, { target: { value: mockBoardMember.special_skills } });
    fireEvent.change(officerNode, { target: { value: mockBoardMember.officer } });
    fireEvent.change(committeeChairNode, { target: { value: mockBoardMember.committee_chair } });
    fireEvent.change(committeesServedNode, { target: { value: mockBoardMember.committees_served } });
    fireEvent.change(businessWebsiteNode, { target: { value: mockBoardMember.business_website } });
    fireEvent.change(businessStreetAddress, { target: { value: mockBoardMember.business_address } });
    fireEvent.change(businessEmailNode, { target: { value: mockBoardMember.business_email } });
    fireEvent.change(businessPhoneNode, { target: { value: mockBoardMember.business_phone_number } });

    // submit form
    fireEvent.submit(submitBtn);

    // because the antd form onFinish is async, wait for our
    // submit to be called
    await wait(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith(mockBoardMember);
    });

});
import React from 'react';
import BoardMemberForm from '../forms/BoardMemberForm';
import { Link, Route, Switch } from 'react-router-dom';
import { Button } from 'antd';

/**
 * This component should have internal routing to both a list of 
 * board members and a form to add/edit board members
 */

const BoardMember = () => {

    const onSubmit = data => {
		console.log('data', data);
	};

    return (
        <div>
            <Switch>
                <Route path="/boardmember/form">
                    <BoardMemberForm onSubmit={onSubmit} />
                </Route>
                <Route>
                    <Link to="/boardmember/form">
                        <Button type="primary">Add</Button>
                    </Link>
                    <p>Board member list here</p>
                </Route>
            </Switch>
        </div>
    );
};

export default BoardMember;

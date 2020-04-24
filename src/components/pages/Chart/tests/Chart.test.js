import React from 'react';
import Chart from '../Chart';
import { render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { Router } from 'react-router'
import { createMemoryHistory } from "history";
import { ApolloProvider } from 'react-apollo';
import client from '../../../graphql/client';

const onSubmit = jest.fn()


describe(`People Form Component`, () => {
    beforeEach(cleanup);

    it(`renders a component that uses withRouter`, async () => {
        const history = createMemoryHistory()
        const route = '/some-route'
        history.push(route)
        const { container } = render(
            <ApolloProvider client={client}>
                <Router history={history}><Chart /></Router>
            </ApolloProvider>
        )

        expect(container.firstChild).toMatchSnapshot();
    })
})

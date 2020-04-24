import React from 'react';
import ChartPie from '../ChartPie';
import { render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { Router } from 'react-router'
import { createMemoryHistory } from "history";
import { ApolloProvider } from 'react-apollo';
import client from '../../../graphql/client';

it('renders without crashing given the required props', () => {

    const history = createMemoryHistory()
    const route = '/some-route'
    history.push(route)
    const { container } = render(
        <ApolloProvider client={client}>
            <Router history={history}><ChartPie /></Router>
        </ApolloProvider>
    )

    expect(container.firstChild).toMatchSnapshot();

  })

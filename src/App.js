import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import oktaConfig from "./okta-config";
import OktaApolloProvider from "./components/utils/OktaApolloProvider";
import LogoutButton from "./components/LogoutButton";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import People from "./components/pages/People";
import Event from "./components/pages/Event";
import Venue from "./components/pages/Venue";
import User from "./components/pages/User";
const { Sider, Content } = Layout;

function App() {
  return (
    <div className="App" data-testid="app">
      <Router>
        <Security {...oktaConfig}>
          <OktaApolloProvider>
            <Layout>
              <Sider
                style={{
                  overflow: "auto",
                  height: "100vh",
                  position: "fixed",
                  left: 0,
                }}
              >
                <Menu theme="dark">
                  <Menu.ItemGroup key="h1" title="Manage">
                    <Menu.Item key="1">
                      <Link to="/">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link to="/people">People</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Link to="/event">Events</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                      <Link to="/venue">Venues</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                      <Link to="/user">Users</Link>
                    </Menu.Item>
                  </Menu.ItemGroup>
                </Menu>
                <div
                  style={{
                    paddingTop: "30px",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <LogoutButton />
                </div>
              </Sider>
              <Layout
                style={{
                  marginLeft: 200,
                  height: "100vh",
                }}
              >
                <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
                  <Switch>
                    <SecureRoute path="/login" component={Login} />
                    <SecureRoute path="/people" component={People} />
                    <SecureRoute path="/event" component={Event} />
                    <SecureRoute path="/venue" component={Venue} />
                    <SecureRoute path="/user" component={User} />
                    <Route
                      path={oktaConfig.callbackPath}
                      component={LoginCallback}
                    />
                    <SecureRoute exact path="/" component={Dashboard} />
                  </Switch>
                </Content>
              </Layout>
            </Layout>
          </OktaApolloProvider>
        </Security>
      </Router>
    </div>
  );
}

export default App;

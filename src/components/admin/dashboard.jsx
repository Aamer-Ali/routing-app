import React, { Component } from "react";
import { Route } from "react-router-dom";
import Posts from "./posts";
import SideBar from "./sidebar";
import Users from "./users";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <SideBar />
        <Route path="/admin/users" component={Users} />
        <Route path="/admin/posts" component={Posts} />
      </div>
    );
  }
}

export default Dashboard;

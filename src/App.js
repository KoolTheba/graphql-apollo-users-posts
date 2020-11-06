import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

// components, styling
import Navbar from './components/Navbar'
import UsersList from './components/UsersList'
import UserDetail from './components/UserDetail'
import PostComments from './components/PostComments'
import ChangeUserDetails from './components/ChangeUserDetails'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
          <header className="App-header">
          <Navbar />
          </header>
          <Switch>
              <Route exact path="/">
                <UsersList />
              </Route>
              <Route exact path="/user/:id">
                <UserDetail />
              </Route>
              <Route exact path="/user/:id/edit">
                <ChangeUserDetails />
              </Route>
              <Route exact path="/user/:id/post/:postId/comments">
                <PostComments />
              </Route>
              <Redirect to="/" />
          </Switch>
      </div>
    </Router>
  );
}

export default App

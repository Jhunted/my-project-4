import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import AnimePage from '../../pages/AnimePage/AnimePage';
import postAPI from '../../services/posts-api';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      user: userService.getUser(),
      posts: []
     }
  }
  
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  };


  handleAddPost = async newPostData => {
    const newPost = await postAPI.create(newPostData);
    this.setState(state => ({
      posts: [...state.posts, newPost]
    }), () => this.props.history.push('/'));
  }

  handleUpdatePost = async updatedPostData => {
    const updatedPost = await postAPI.update(updatedPostData);
    const newPostsArray = this.state.posts.map(p =>
      p._id === updatedPost._id ? updatedPost : p
    );
    this.setState(
      {posts: newPostsArray},
      () => this.props.history.push('/')
    );
  }

  handleDeletePost = async id => {
    await postAPI.deleteOne(id);
    this.setState(state => ({
      posts: state.posts.filter(p => p._id !== id)
    }), () => this.props.history.push('/'));
  }

  async componentDidMount() {
    const posts = await postAPI.getAll();
    this.setState({posts});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <strong>Post Page</strong>
        </header>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
          <NavBar 
            className="NavBar"
            user={this.state.user}
            handleLogout={this.handleLogout}
            />
            )}
          />
          <Route
            exact
            path='/signup'
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
            />
            )}
            />
            <Route
            exact
            path='/login'
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          :
          <Redirect to='/login' />
          }/>
        </Switch>
        <div className="Body">
          <AnimePage 
            className="AnimePage" 
            user={this.state.user}
            handleDeletePost={this.handleDeletePost}
            handleAddPost={this.handleAddPost}
            handleUpdatePost={this.handleUpdatePost}
            handleSignupOrLogin={this.handleSignupOrLogin}
            />
        </div>
        <footer className="App-footer">(C) 2019 Joseph Hunt </footer>
      </div>
    )
  };
};

export default App;
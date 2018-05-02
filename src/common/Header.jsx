import React from 'react';
import { Link } from 'react-router-dom'

const Header = ({isAuthenticated}) => (
  <div className="navbar text-center">
    <div className="navbar-inner">
      <div className="container">
        <nav className="navbar navbar-default">
          {isAuthenticated ? <Link className="btn btn-navbar" to="/">Home</Link> : null}
          {isAuthenticated ? <Link className="btn btn-navbar" to="library">Library</Link> : null}
          {isAuthenticated ? <Link className="btn btn-navbar" to="todo">Todo</Link> : null}
          {isAuthenticated ? null : <Link className="btn btn-navbar" to="auth/login">Log In</Link>}
          {isAuthenticated ? null : <Link className="btn btn-navbar" to="auth/sign-up">Sign Up</Link>}
          {isAuthenticated ?
            <Link className="btn btn-navbar"
              to={{ pathname:"auth/logout", state: {logout: true}}}>Logout</Link>
            : null
            }
          {isAuthenticated ? <Link className="btn btn-navbar" to="instagram/owner">instagram Profile</Link> : null}
          {isAuthenticated ? <Link className="btn btn-navbar" to="study/react-context">React Context</Link> : null}
        </nav>
      </div>
    </div>
  </div>
);

export default Header;

import React from 'react';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const LoginControl = ({isLoggedIn , currentUser, handleLoginClick, handleLogoutClick}) => {
    
    
        if (isLoggedIn) {
            return <LogoutButton currentUser={this.props.currentUser} handleLogoutClick={this.props.handleLogoutClick}/>;
          } else {
            return <LoginButton handleLoginClick={this.props.handleLoginClick} />;
          }
    
};

export default LoginControl;






















  
  
 
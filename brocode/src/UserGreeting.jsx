

function UserGreating(props){

    return(props.isLoggedIn?<h1 className="welcome-message">welcome {props.username}</h1> :
                            <h1 className="login-prompt">please logged in to continue</h1>)
    }
 
   
   
   
UserGreating.defaultProps = {
    isLoggedIn: false,
    username: 'guest',
}

export default UserGreating;
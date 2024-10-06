import HeadLine from './HeadLine';
import './LoginFormStyle.css'

function LoginForm(){
    return(
        <>
            <div>
            <HeadLine/>
            <h3>Login</h3>
            <form>
                <label>Username  
                <input typeof="text" placeholder="Enter Username"></input><br/>
                </label>
                <label>Password  
                <input typeof="password" placeholder="Password"></input>
                </label><br/>
                <input type="submit" value="Submit" />
            </form>
            </div>

        </>
    )
}

export default LoginForm;
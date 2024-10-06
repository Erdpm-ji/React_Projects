import AppName from "./AppName";
import Style from "./LoginApp.module.css";
import LoginForm from "./LoginForm";

const LoginApp = () => {

    const users = [{
        gmail : "deepakpatidar@gmail.com",
        password: "+9181092@Gudu"
    },{
        gmail : "poojapatidar@gmail.com",
        password: "+9181092@pooja"
    }];

    return(
        <div className={Style.container}>
            <AppName Style={Style}/>
            <LoginForm Style={Style} users={users}></LoginForm>
        </div>
    )
}

export default LoginApp;
import Users from "../userprofile/Users";
import Greeting from "./Greeting";

function GreetingMain(){
    return(
        <>
            {Users.map((user) =>(
                <Greeting key={user.id} user={user}/>

            ))}
        </>
    )
}

export default GreetingMain;
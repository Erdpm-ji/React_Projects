import 'bootstrap/dist/css/bootstrap.min.css';
import User from './User';
import Users from './Users';

const UserProfile = ()=>{


    return (
        <>
          <h1>User's Profile</h1>
          <div className="d-flex justify-content-between flex-wrap">
                {Users.map((user) => (
                    <User key={user.id} detail={user} />
                ))}</div>
        </>
      )
};
export default UserProfile;
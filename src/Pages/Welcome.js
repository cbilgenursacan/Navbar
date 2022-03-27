import { Route } from "react-router-dom";

const Welcome = () =>{
    return(
        <div>
            <h1>Welcome</h1>
            <Route path="/welcome/new-user">
                <p>Welcome newbie! Do not forget to sign up for more content.</p>
            </Route>
        </div>
    );
}

export default Welcome;

import './index.css';


function Login() {
    return (
        <div class="login-form">
            <form action="/frontend/user/authenticate" method="post">
                <h2 class="text-center">Log in</h2>
                <div class="form-group">
                    <input type="text" class="form-control" name="user" placeholder="Username" required="required" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" name="password" placeholder="Password" required="required" />
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block">Log in</button>
                </div>
                <div class="clearfix">
                    <label class="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                    <a href="#" class="pull-right">Forgot Password?</a>
                </div>
            </form>
            <p class="text-center"><a href="/frontend/signup">Create an Account</a></p>
        </div>

    )

};

export default Login;
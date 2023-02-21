import React from 'react';
class Loginbox  extends React.Component{
    render ( ){
        return (
        <section>
        <header classNameName="hero-section"/>
      
    <div classNameName="wrapper">
      <div classNameName="title">sign in</div>
      <form action="#">
        <div classNameName="field">
          <input type="text" required/>
          <label>Email Address</label>
        </div>
        <div classNameName="field">
          <input type="password" required/>
          <label>Password</label>
        </div>
        <div classNameName="content">
          <div classNameName="checkbox">
            <input type="checkbox" id="remember-me"/>
            <label for="remember-me">Remember me</label>
          </div>
          <div classNameName="pass-link"><a href="#">Forgot password?</a> </div>
        </div>
        <div className="field">
          <input type="submit" value="Login"/>
        </div>
        <div className="signup-link">Not a member? <a href="pages/signup.html">Signup now</a></div>
      </form>
    </div>
        </section>
        );
        }
}
export default Loginbox;
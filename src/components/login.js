import React from 'react'
import Nav from '../header/nav'
import Footer from '../footer/footer'

const login = () => {
    return (
        <div>
        {/* <Nav /> */}
        <section className="signin-page account" style={{backgroundColor:"#FFDE59"}}>
    <div className="container">
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div className="block">
                    <h2 className="text-center" style={{color:"black"}}>Sign In to Sunny</h2>
                    
                    <form className="text-left clearfix mt-50" action="home" >
                        <div className="form-group">
                            <input type="email" className="form-control"  placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-main" >Sign In</button>
                        
                    </form>
                    <p className="mt-20" style={{color:"black"}}>New in this site ?<a href="signin.html" style={{color:"black"}}> Create New Account</a></p>
                    <p><a href="forget-password.html" style={{color:"black"}}> Forgot your password?</a></p>
                </div>
            </div>
        </div>
    </div>
</section>
        {/* <Footer /> */}
        </div>

    )
}

export default login

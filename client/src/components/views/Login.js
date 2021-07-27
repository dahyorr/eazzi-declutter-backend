import { useEffect } from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import loginBg from '../../static/login-bg.png'
import LoginForm from '../forms/LoginForm'
import {loginUser} from '../../actions'

const Login = ({history, loginUser, isAuthenticated})=>{
    useEffect(() => {
        if(isAuthenticated) history.push('/')
    })
    const onFormSubmit = async (values) => {
        await loginUser(values.email, values.password)
        // setShowModal(res)
    }
    return (
        <div className='Login bg-primary flex'>
            <div className='back' onClick={()=>history.goBack()}><i className="fas fa-arrow-left fa-2x"></i></div>
            <div className="container content">

                <div className="left">
                    <div className="inner">
                        <div className="text">
                            <p>Welcome Back!</p>
                            <Link to='/'><h1>EazziDeclutter</h1></Link>
                        </div>
                    </div>

                    <div className="img-container">
                        <img src={loginBg} alt=""/>
                    </div> 
                </div>

                <div className="right flex">
                <div className="form-container">
                        <div className="form-selector">
                            <div className="left active"><Link to='/login'>Sign in</Link></div>
                            <div className="right"><Link to='/signup'>Sign up</Link></div>
                        </div>
                        <LoginForm onFormSubmit={onFormSubmit}/>
                    </div>
                </div>
            </div>

            <div className="form-container mobile">
                        <div className="form-selector">
                            <div className="left active"><Link to='/login'>Sign in</Link></div>
                            <div className="right"><Link to='/signup'>Sign up</Link></div>
                        </div>
                        <LoginForm onFormSubmit={onFormSubmit}/>
                    </div>

        </div>
    )
}

const mapStateToProps = (state) =>({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {loginUser})(withRouter(Login))
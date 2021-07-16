import {useEffect, useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import loginBg from '../../static/login-bg.png'
import SignupForm from '../forms/SignupForm'
import FullScreenModal from "../FullScreenModal";
import {signupUser} from '../../actions'

const Signup = ({history, isAuthenticated, signupUser}) => {
    const [showModal, setShowModal] = useState(true)
    const onModalClose = () =>{
        setShowModal(false)
    }
    const onFormSubmit = async (values) => {
        const res = await signupUser(values.name, values.email, values.password)
    }

    useEffect(() => {
        if(isAuthenticated) history.push('/')
    })
    return(
        <div className='Login bg-primary flex'>
            <div className='back' onClick={()=>history.goBack()}><i className="fas fa-arrow-left fa-2x"/></div>

            <div className="content">

                <div className="left">
                    <div className="inner">
                        <div className="text">
                            <p>Welcome</p>
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
                            <div className="left"><Link to='/login'>Sign in</Link></div>
                            <div className="right active"><Link to='/signup'>Sign up</Link></div>
                        </div>
                        <SignupForm onFormSubmit={onFormSubmit} />
                    </div>
                </div>
            </div>

            <div className="form-container mobile">
                        <div className="form-selector">
                            <div className="left"><Link to='/login'>Sign in</Link></div>
                            <div className="right active"><Link to='/signup'>Sign up</Link></div>
                        </div>
                        <SignupForm onFormSubmit={onFormSubmit} />
                    </div>
            { showModal && <FullScreenModal onClose={onModalClose}>
                <p>User Created Successfully</p>
                <p>Check your mail to verify your account</p>
            </FullScreenModal> }
        </div>
    )
}

const mapStateToProps = (state) =>({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {signupUser})(withRouter(Signup))
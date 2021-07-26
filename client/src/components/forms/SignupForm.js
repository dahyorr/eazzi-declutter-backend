import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Formik, Form, Field, ErrorMessage} from 'formik' 
import * as Yup from 'yup'
import ngFlag from '../../static/nigeria-flag.png'

const SignupForm = ({ formError, onFormSubmit}) => {
    const phoneRegex = /^([0]|\+?234)([7-9])([0|1])([\d])([\d]{7})$/g
    return(
        <Formik
                        initialValues={{ 
                            email: '', 
                            password: '',
                            confirmPassword: '',
                            name: '',
                            phone: '',
                        }}
                        onSubmit={values => {
                            onFormSubmit(values)
                        }}
                        validationSchema={Yup.object({
                            name: Yup.string().required('You must provide a Name'),
                            email: Yup.string().email('Please provide a vaild email').required('You must provide a valid email'),
                            password: Yup.string().required('You must provide a password'),
                            confirmPassword: Yup.string().required('Please confirm your password').oneOf([Yup.ref('password'), null], 'Passwords must match'),
                            phone: Yup.string().matches(phoneRegex, 'Phone number is not valid').required('Please enter a phone number')
                        })}
                    >
                        <Form className='Form'>
                            <p className="form-error">{formError}</p>
                            
                            <div className="input-container">
                                <p className={'form-error'}><ErrorMessage name='name'/></p>
                                <label htmlFor="name">Name</label>
                                <Field type="text" name='name' />
                            </div>
                            
                            <div className="input-container">
                                <p className={'form-error'}><ErrorMessage name='email'/></p>
                                <label htmlFor="email">Email</label>
                                <Field type="email" name='email' />
                            </div>

                            <div className="input-container">
                                <p className={'form-error'}><ErrorMessage name='phone'/></p>
                                <label htmlFor="phone">Phone Number</label>
                                <div className={'ngFlag'}>
                                    <img src={ngFlag} alt="flag"/>
                                    <Field type="tel" name='phone' placeholder={'+2348000000000'} />
                                </div>
                            </div>

                            <div className="input-container">
                                <p className={'form-error'}><ErrorMessage name='password'/></p>
                                <label htmlFor="password">Password</label>
                                <Field type="password" name='password' />
                            </div>

                            <div className="input-container">
                                <p className={'form-error'}><ErrorMessage name='confirmPassword'/></p>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <Field type="password" name='confirmPassword' />
                            </div>

                            <button type="submit" className='btn btn-primary' > Sign Up </button>
                            <p>Have an account? <Link to='/login' className='text-primary'>Click here</Link></p>
                        </Form>
                    </Formik>
    )
}

const mapStateToProps = (state) =>({
    formError: state.auth.error
})

export default connect(mapStateToProps)(SignupForm)
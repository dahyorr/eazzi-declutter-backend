import {withRouter} from 'react-router-dom' 
import {Formik, Form, Field, ErrorMessage} from 'formik' 
import * as Yup from 'yup'

const Login = ({history}) => {
    return(
        <div className='AdminLayout'>
        <div className='Login flex'>
            <div className="modal flex">
                <div className='modal-content flex'>
                    <h1 className="text-secondary">Admin Login</h1>
                    <Formik
                        initialValues={{ 
                            email: '', 
                            password: '', 
                        }}
                        onSubmit={values => {
                            console.log('submit', values)
                        }}
                        validationSchema={Yup.object({
                            email: Yup.string().email('Please provide a vaild email').required('You must provide a valid email'),
                            password: Yup.string().required('You must provide a password')
                        })}
                    >
                        <Form>
                            <div className="form-input">
                                <p className={'form-error'}><ErrorMessage name='email'/></p>
                                <label htmlFor="email">Email</label>
                                <Field type="email" name='email' />
                            </div>
                            <div className="form-input">
                                <p className={'form-error'}><ErrorMessage name='password'/></p>
                                <label htmlFor="password">Password</label>
                                <Field type="password" name='password' />
                            </div>
                            <p className='forgot-password'>Forgot your password?</p>
                            <button type="submit" className='btn btn-primary' onClick={() => history.push('/admin')}> Login </button>
                        </Form>
                    </Formik>
                    
                </div>
            </div>
        </div>
        </div>
    )
}
export default withRouter(Login)
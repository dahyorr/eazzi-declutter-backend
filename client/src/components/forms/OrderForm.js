import {connect} from 'react-redux'
import {Formik, Form, Field, ErrorMessage} from 'formik' 
import * as Yup from 'yup'

const OrderForm = ({onFormSubmit, formError, user, children}) => {
    // const {name, phoneNumber} = user
    const phoneRegex = /^([0]|\+?234)([7-9])([0|1])([\d])([\d]{7})$/g

    return(
        <Formik
                        initialValues={{ 
                            name: '',
                            address: '',
                            state: '',
                            phone: '',
                            deliveryMethod: '',
                        }}
                        onSubmit={values => {
                            onFormSubmit(values)
                        }}
                        validationSchema={Yup.object({
                            name: Yup.string().required('You must provide a name'),
                            address: Yup.string().required('You must provide an address'),
                            state: Yup.string().required('You must provide a state'),
                            phone: Yup.string().matches(phoneRegex, 'Phone number is not valid').required('Please enter a    phone number'),
                            deliveryMethod: Yup.string().required('Please select a Delivery method')
                        })}
                    >
                        <Form className=''>
                            <p className="form-error">{formError}</p>
                            <div className="address">
                                <h4>1. Address Details</h4>
                                <div className="input-container">
                                    <p className={'form-error'}><ErrorMessage name='name'/></p>
                                <Field type="text" placeholder='Name' name='name' />
                                </div>
                                <div className="input-container">
                                    <p className={'form-error'}><ErrorMessage name='address'/></p>
                                    <Field as='textarea' placeholder= 'Address' name='address' />
                                </div>

                                <div className="input-container">
                                    <p className={'form-error'}><ErrorMessage name='state'/></p>
                                    <Field type="text" placeholder= 'State' name='state' />
                                </div>

                                <div className="input-container">
                                    <p className={'form-error'}><ErrorMessage name='phone'/></p>
                                    <Field type="tel" placeholder='Phone Number' name='phone' />
                                </div>
                            </div>

                            <div className="delivery-method">
                                <h4>2. Delivery Method</h4>
                                <p className={'form-error'}><ErrorMessage name='deliveryMethod'/></p>
                                <div className="input-group">
                                        <Field type="radio" value="homeDelivery" id='home' name="deliveryMethod" selected/>
                                        <label htmlFor="home">Home Delivery</label>
                                    </div>

                                    <div className="input-group">
                                        <Field value="pickUp" type='radio' id='pickup' name="deliveryMethod"/>
                                        <label htmlFor="pickup">Pick Up</label>
                                    </div>
                            </div>
                            {children}
                            <button className="place-order" type='submit'> Place Order</button>
                        </Form>
                    </Formik>
    )
}

const mapStateToProps = ({auth}) =>({
    formError: auth.error,
})

export default connect(mapStateToProps)(OrderForm)
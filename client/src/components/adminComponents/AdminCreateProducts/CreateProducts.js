import {Formik, Form, Field, ErrorMessage} from 'formik' 
import * as Yup from 'yup'
import { categories } from '../../../productData'

const CreateProducts = () =>{
    return (
        <div className="CreateProducts">
            <div className="form-container">
                <Formik
                    initialValues={{ 
                        productName: '', 
                        price: '',
                        category: '',
                        description: '', 
                    }}
                    onSubmit={values => {
                        console.log('submit', values)
                    }}
                    validationSchema={Yup.object({

                        productName: Yup.string().required('You must provide a Name'), 
                        price: Yup.number().required('You must provide a Price'),
                        category: Yup.string().required('Pick a category'),
                        description: Yup.string().required('Provide a Description'), 
                    
                    })}
                >
                    <Form>
                        <div className="content"style={{backgroundColor: '', height: '110px'}}>
                            <div className="form-input">
                                <label htmlFor="productName" title='Product Name'></label>
                                <Field type="file" name='image' placeholder='Image Upload'/>
                            </div>
                        </div>
                        <div className="content">
                            <p className={'form-error'}><ErrorMessage name='productName'/></p>
                            <div className="form-input">
                                <label htmlFor="productName" title='Product Name'></label>
                                <Field type="text" name='productName' placeholder='Product Name'/>
                            </div>

                            <p className={'form-error'}><ErrorMessage name='category'/></p>
                            <div className="form-input">
                                <label htmlFor="category" title='Category'></label>
                                <Field as="select" name='category' placeholder='Category' title='Category'>
                                    <option value="" disabled>Select a Category</option>
                                    {categories.map((item) => <option key={item.value} value={item.value}>{item.name}</option>)}
                                </Field>
                            </div>

                            <p className={'form-error'}><ErrorMessage name='price'/></p>
                            <div className="form-input">
                                <label htmlFor="price" title="price"></label>
                                <span className="input-addon"><p>₦</p></span>
                                <Field type="number" name='price' placeholder='Price' />
                            </div>

                            <p className={'form-error'}><ErrorMessage name='description'/></p>
                            <div className="form-input">
                                <label htmlFor="description" title="Description"></label>
                                <Field as="textarea" name='description' placeholder='Description' />
                            </div>

                            <button type="submit"> Create </button>
                        </div>
                        
                    </Form>
                </Formik>
            </div>
        </div>  
    )
}

export default CreateProducts

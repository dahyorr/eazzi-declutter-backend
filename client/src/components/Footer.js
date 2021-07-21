import {Link} from 'react-router-dom'

const Footer = () => {
    return(
        <div className="Footer">
            <div className="wrapper container">
                <div className="about-us section">
                    <h2>ABOUT US</h2>
                    <div className='foot-logo flex'>
                        <p>
                            <span className="text-primary">Eazzi</span>
                            <span className="text-secondary">Declutter</span>
                        </p>
                    </div>
                    <p>EazziDeclutter was founded in 2019. 
                        it is your one stop hub for all your 
                        quality and affordable deals on furniture, 
                        electronics, home and office equipment, 
                        household items, computer...
                    </p>
                    <Link to="/about">Read more...</Link>
                </div>


                <div className="popular-tags section">
                    <h2>POPULAR TAGS</h2>
                    <div className="flex">
                        <div className="tag">Furniture</div>
                        <div className="tag">Electric Cooker</div>
                        <div className="tag">Electronics</div>

                        <div className="tag">Air Conditioner</div>
                        <div className="tag">Home & Office</div>
                        <div className="tag">Home</div>

                        <div className="tag">Generator</div>
                        <div className="tag">Kitchen</div>
                        <div className="tag">Offices</div>

                        <div className="tag">Furniture</div>
                        <div className="tag">Electric Cooker</div>
                        <div className="tag">Electronics</div>

                        <div className="tag">Air Conditioner</div>
                        <div className="tag">Home & Office</div>
                        <div className="tag">Home</div>
                    </div>
                </div>


                <div className="follow-us section">
                    <h2>FOLLOW US</h2>
                    <div className="flex">
                        <div className="social">
                            <i className="fab fa-facebook-f fa-2x"></i> Facebook
                        </div>
                        <div className="social">
                            <i className="fab fa-twitter fa-2x"></i> Twitter
                        </div>
                        <div className="social">
                            <i className="fab fa-linkedin fa-2x"></i> Linkedin
                        </div>
                        <div className="social">
                            <i className="fab fa-instagram fa-2x"></i> Instagram
                        </div>
                        <Link className="social text-secondary" style={{cursor: 'pointer'}} to='/admin/login'>
                            <i className="far fa-user fa-2x"></i> Admin
                        </Link>
                    </div>
                </div>
                <div className="contact section">
                    <h2>CONTACT</h2>
                    
                    <div>
                        <h3>ADDRESS</h3>
                        <p>64, Adeniyi Jones Avenue, Ikeja, Lagos State.</p>
                    </div>
                    
                    <div>
                        <h3>EMAIL</h3>
                        <p>helpdesk@easydeclutter.com</p>
                    </div>
                    
                    <div>
                        <h3>PHONE NUMBER</h3>
                        <p>+(234)8032761011</p>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
export default Footer
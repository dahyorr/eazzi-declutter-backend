import Footer from "../Footer"
import ContactForm from "../forms/ContactForm"
import Header from "../Header"

const Contact = () => {
    return(
        <div className='Contact'>
            <Header/>
            <h1 className='text-center'>CONTACT US</h1>
            <div className='content container flex'>
                <div className="left">
                <div>
                    <div className='contact-info'>
                        <i className="fas fa-map-marker-alt text-secondary"></i><h3>Address</h3>
                        <p>9B, Abah Johnson Cresent, Harmony Enclave estate<br/> off Adeniyi Jones, Ikeja</p>
                    </div>

                    <div className='contact-info'>
                        <i className="fas fa-phone text-secondary"></i><h3>Phone Number</h3>
                        <p>+(234) 9024542134</p>
                    </div>

                    <div className='contact-info'>
                        <i className="fas fa-envelope text-secondary"></i><h3>Email</h3>
                        <p>help@eazzideclutter.com</p>
                    </div>
                </div>

                    <div className="form-container">
                        <ContactForm/>
                    </div>
                </div>
                <div className="right">
                    <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1892.6936100333992!2d3.3468398156865597!3d6.613332757585025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93d271c3da75%3A0x95a7fe4b97ec69b0!2s9%20Abba%20Johnson%20Cres%2C%20Oba%20Akran%2C%20Ikeja!5e0!3m2!1sen!2sng!4v1626276942484!5m2!1sen!2sng" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Contact
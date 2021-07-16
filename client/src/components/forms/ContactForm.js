const ContactForm = () =>{
    return(
        <div className="Form">
            <div className="input-container">
                <label htmlFor='name'>Full Name</label>
                <input type="text" name='name'/>
            </div>

            <div className="input-container">
                <label htmlFor='email'>Email</label>
                <input type="email" name='email'/>
            </div>
            <div className="input-container">
                <label htmlFor='message'>Message</label>
                <textarea name='message'></textarea>
            </div>
            <button type='submit' className='contact-submit'>Send</button>
        </div>
    )
}
export default ContactForm
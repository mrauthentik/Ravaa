import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div className="contact">
        <div className="contact-block">
            <div className="contact-text">
                <h1>Get in touch with us</h1>
                <p>Ready to collaborate and drive sustainable development? <br />
                    <br />Contact us today to explore how our expertise can 
                    <br />support your organization&apos;s goals.</p>
            </div>
            <form action="#">
                <input type="text" placeholder="Full name" name="" id="" />
                <input type="email" placeholder="Email address" name="" id="" />
                <input type="tel" placeholder="Phone number" name="" id="" />
                <textarea name="" id="" cols='50' rows={4} placeholder="Message" ></textarea>
                <button type="submit" className="form-btn"> Submit inquiry</button>
            </form>
        </div>
    </div>
  )
}

export default Contact

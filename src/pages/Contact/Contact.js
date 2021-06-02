import React from 'react';
import { IoPhonePortrait } from 'react-icons/io5';

import {IoMailIcon} from '../../shared/icons';

import MainLogoSVG from '../../components/SVGs/MainLogoBodySVG';
import styles from './Contact.module.css';

const Contact = props => {
  return (
    <div className={styles.ContactPageContainer} >
      {/* <form className={styles.ContactFormContainer +" col-md-4 ml-5 mr-5"}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="email"
            className="form-control"
            placeholder="Please enter your name"
          />
        </div>
        <div className="form-group">
          <label >Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Please enter your email"
          />
        </div>
        <div className="form-group">
          <label >Your Message</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Please enter your message"

          />
        </div>
      </form> */}
      <div className={styles.ContactTextContainer}>
      <MainLogoSVG/>
      <h4 style={{marginTop: "30px"}} >Contact Details</h4>
      <div className={styles.ContactMailTextContainer} >
      <IoPhonePortrait />
      <p className="text-nextTo-icon"><a className="ob_link" href="tel:+905073919815">+90 507 391 9815</a></p>
      </div>
      <div className={styles.ContactMailTextContainer} >
      <IoMailIcon />
      <p className="text-nextTo-icon">info@mathartsoft.com</p>
      </div>
      </div>
    </div>
  );
};

export default Contact;

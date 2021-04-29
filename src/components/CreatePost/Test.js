import React from 'react';
import "./test.css"
import Buttons from './Buttons';
import { FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';


function Test(props) {
    const submitPost = (e) => {}


    return (
      <form onSubmit={submitPost} className="main-ext stretched">
        <div className="required">* Required fields</div>
        <div class="text-field">
          <input className="tf" type="text" required />
          <label className="tfl">Title *</label>
        </div>
        <div class="text-field">
          <input className="tf" type="text" required />
          <label className="tfl">Input field 2</label>
        </div>
        <div class="text-field">
          <input className="tf" type="text" required />
          <label className="tfl">Location</label>
        </div>
        <div class="text-field">
          <input className="tf" type="datetime-local" required />
          <label className="tfl date">Start Date/Time</label>
        </div>
        <div class="text-field">
          <input className="tf" type="datetime-local" required />
          <label className="tfl date">End Date/Time</label>
        </div>
        <div class="text-field">
          <textarea className="tf" rows="4" required ></textarea>
          <label className="tfl">Description</label>
        </div>
        <div className="attached">
          <div className="media-buttons">Attached Pic<br />
          <FAIcon icon={faImages} color="blue" size="2x" /></div>
          <div className="media-buttons">Record Video<br />
          <FAIcon icon={faVideo} color="red" size="2x" /></div>
        </div>
        <Buttons></Buttons>
      </form>
    )
}

export default Test

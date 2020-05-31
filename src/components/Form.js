import React from 'react';
import {Link} from 'react-router-dom';

export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: '', email: '' };
  this.setFeedback = this.setFeedback.bind(this);
  this.setName = this.setName.bind(this);
  this.setEmail= this.setEmail.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
  	<form className="contact-form">
    	<div>
        <p>Full Name:</p>
        <input
          name = "name"
          type = "text"
          placeholder = "Full Name" 
          onChange = {this.setName}/>
        <p>Email Address:</p>
          <input 
          name = "email"
          type = "text"
          placeholder = "Email Address" 
          onChange = {this.setEmail}/>
        <p>Message</p>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.setFeedback}
        	placeholder="Please leave your feedback here!"
        	required
        	value={this.state.feedback}
        	style={{width: '100%', height: '150px'}}
      	/>
    	</div>
      <Link to="/success">
    	  <input type="button" value="Submit" className="submit-btn" onClick={this.handleSubmit} />
      </Link>
  	</form>
	)
  }
  setFeedback(event) {
    this.setState({feedback: event.target.value})
  }

  setName(event) {
    this.setState({name: event.target.value})
  }

  setEmail(event) {
    this.setState({email: event.target.value})
  }

  handleSubmit (event) {
    const templateId = 'template_IVA7hSRl';
    this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email});
  }
  
    sendFeedback (templateId, variables) {
    window.emailjs.send(
      'gmail', templateId,
      variables
      ).then(res => {
        console.log('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
  }
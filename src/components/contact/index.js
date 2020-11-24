import React from "react";

function Contact() {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
            <form>
    <div className="form-group">
      <label for="formGroupExampleInput">LinkedIn:</label>
      <br/>
      <a href="url"> https://www.linkedin.com/in/myramr/</a>
    </div>
    <div className="form-group">
      <label for="formGroupExampleInput2">Github:</label>
      <br/>
      <a href="url"> https://github.com/Myra-R</a>
    </div>
    <div className="form-group">
      <label for="formGroupExampleInput2">Contact Info:</label>
      <p>
        Myra Rozmiarek
        <br/>
        11marozmi@gmail.com
        <br/>
        414-334-5642
        
      </p>

   
    </div>
  </form>
            </div>
        </div>
     
    </div>
  );
}

export default Contact;

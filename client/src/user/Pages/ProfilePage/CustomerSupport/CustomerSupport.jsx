import "./CustomerSupport.css";
const CustomerSupport = () => {
  return (
    <>
        <div style={{padding:"12vh 0 2vh 0"}}>
    <div class="contain">

<div class="wrapper">

  <div class="form">
    <h4>GET IN TOUCH</h4>
    <h2 class="form-headline">Send us a message</h2>
    <form id="submit-form" action="">
      <p>
        <input id="name" class="form-input" type="text" placeholder="Your Name*"/>
        <small class="name-error"></small>
      </p>
      <p>
        <input id="email" class="form-input" type="email" placeholder="Your Email*"/>
        <small class="name-error"></small>
      </p>
      <p class="full-width">
        <input id="company-name" class="form-input" type="text" placeholder="Company Name*" required/>
        <small></small>
      </p>
      <p class="full-width">
        <textarea  minlength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
        <small></small>
      </p>
      {/* <p class="full-width">
        <input type="checkbox" id="checkbox" name="checkbox" checked/> 
      </p> */}
      <p class="full-width">
        <input type="submit" class="submit-btn" value="Submit" onclick="checkValidations()"/>
        <button class="reset-btn" onclick="reset()">Reset</button>
      </p>
    </form>
  </div>

  <div class="contacts contact-wrapper">

    <ul>
     <li>How can we help you ?</li>
      <span class="hightlight-contact-info">
        <li class="email-info"><i class="fa fa-envelope" aria-hidden="true"></i> @watchstore.com</li>
        <li><i class="fa fa-phone" aria-hidden="true"></i> <span class="highlight-text">+91 9564895214</span></li>
      </span>
    </ul>
  </div>
</div>
</div>
</div>
    </>
  )
}

export default CustomerSupport

import React from "react";
import emailjs from 'emailjs-com';
function Contactus() {
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm(
      'service_upn6mjd', 
      'template_v6deeyf',
      e.target,
      '63hjkYtjTOCyYqllo'
      ).then(res=>{
        console.log(res);
        alert("Thanks for connecting With Us")
      }).catch(err=>{
        console.log(err)
        alert("Sorry Contact us Via contact@blockxtechnologies.com")
      })
  }
    
  return (
    <>
     <div className="About"> 
      <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="why">
              <h1>
                <span>Get In</span> <br />
                <strong>Touch !!!</strong>
              </h1>
            </div>
          </div>
          <div className="opacity container-fluid col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <h1>Contact</h1>
          </div>
        </div>
        </div>
      <div className="container" id="Contact">
        <form onSubmit={sendEmail}>
          
          <div className="container contact">
            <div className="row">
              <div className="col-lg-6 col-sm-12 mt-3">
                <label className="mb-3">Name</label>
                <br />
                <input
                type="text"
                name="name"
                  className=" col-xs-12 col-lg-12 col-md-12 col-sm-12 input-area"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="col-lg-6 col-sm-12 mt-3">
                <label className="mb-3">Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  className=" col-xs-12 col-lg-12 col-md-12 col-sm-12 input-area"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="col-lg-6 col-sm-12 mt-3">
                <label className="mb-3 mt-4">Mobile Number</label>
                <br/>
                <input
                 type="number"
                 name="number"
                  className=" col-xs-12 col-lg-12 col-md-12 col-sm-12 input-area"
                  placeholder="Enter your Mobile Number"
                  required
                />
              </div>
              <div className="col-lg-12 mt-5">
                <label className="mb-3">Your message</label>
                <br />
                <div className="text-style">
                  <textarea 
                  name="message"                   
                    className="col-lg-12 text"
                    placeholder="Enter your massage"
                    required
                  ></textarea>                   
                </div>
               
              </div>
              <div className="radio-btn">
                <label className="mt-5">Your interest</label>
                <div className="radio-input col-lg-8">
                  <div>
                    <input
                    className="m-2"
                      type="radio"
                      id="Blockchain Development"
                      name="fav_language"
                      value="Blockchain Development"
                       required
                    />
                    <label for="Blockchain Development">
                      Blockchain Development
                    </label>
                  </div>
                  <div>
                    <input
                     className="m-2"
                      type="radio"
                      id="Marketing"
                      name="fav_language"
                      value="Marketing"
                    />
                    <label for="Marketing">Marketing</label>
                  </div>
                  <div>
                    <input
                     className="m-2"
                      type="radio"
                      id="Join our Team"
                      name="fav_language"
                      value="Join our Team"
                    />
                    <label for="Join our Team">Join our Team</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 mt-4">
                  <p>How Did You Hear About Us?</p>
                  <select
                    type="select"
                    name="select"          
                    class="form-select"
                    aria-label="Default select example"
                    required
                  >
                    <option selected>Choose your answer</option>
                    <option value="Search engines">Search engines</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Word of Mouth">Word of Mouth</option>
                    <option value="Dribble/Behance">Dribble/Behance</option>
                    <option value="Listings(Clutch, GoodFirms etc.)">Listings(Clutch, GoodFirms etc.)</option>
                  </select>
                </div>
              </div>
              <div className="check mr-3 mt-4">
                  <input type="checkbox"
                  name="checkbox" required/> I agree to BlockX Technology <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className=" mt-3">
                <input className="btn-submit" type="Submit" value="Submit"/>
              </div>
            </div>
          </div>
          </form>        
      </div>
    </>
  );
}

export default Contactus;

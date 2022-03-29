import React from "react";
import { useFormik } from "formik";
import axios from "axios";

function Contactus() {
  // let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      text: "",
      checkbox: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name){
        errors.name = "Please Enter the name";
      }
      if (!values.email) {
        errors.email = "Please Enter the email";        
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      } if (!values.checkbox) {
        errors.checkbox = 'Field must be checked';
      }
      if (!values.number) {
        errors.number = 'Please Enter the Number';
      }

      return errors;
    },
    onSubmit: async (values) => {
      console.log(values);
      
      try {
        await axios.post(`https://61f531ae62f1e300173c4040.mockapi.io/api/list`,values)
      alert("Thanks for register")
      } 
      catch (error) {
        console.log("Error");
      }
    },
  });
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
        {/* <div className="heading col-lg-12">
          <h1>Get In <strong>Touch </strong>!!</h1>
        </div> */}
        <form  method="post" action="mailto:contact@blockxtechnologies.com">
          <form  onSubmit={formik.handleSubmit}>
          <div className="container contact">
            <div className="row">
              <div className="col-lg-6 col-sm-12 mt-3">
                <label className="mb-3">Name</label>
                <br />
                <input
                  className=" col-xs-12 col-lg-12 col-md-12 col-sm-12 input-area"
                  placeholder="Enter your name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  name="name"
                  type="text"
                />
                {formik.errors.name ? <div style={{color: "red"}}>{formik.errors.name}</div> : null}
              </div>
              <div className="col-lg-6 col-sm-12 mt-3">
                <label className="mb-3">Email</label>
                <br />
                <input
                  className=" col-xs-12 col-lg-12 col-md-12 col-sm-12 input-area"
                  placeholder="Enter your email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name="email"
                  type="email"
                />
                {formik.errors.email ? <div style={{color: "red"}}>{formik.errors.email}</div> : null}
              </div>
              <div className="col-lg-6 col-sm-12 mt-3">
                <label className="mb-3">Mobile Number</label>
                <br/>
                <input
                  className=" col-xs-12 col-lg-12 col-md-12 col-sm-12 input-area"
                  placeholder="Enter your Mobile Number"
                  onChange={formik.handleChange}
                  value={formik.values.number}
                  name="number"
                  type="number"
                />
                {formik.errors.number ? <div style={{color: "red"}}>{formik.errors.number}</div> : null}
              </div>
              <div className="col-lg-12 mt-3">
                <label className="mb-3">Your message</label>
                <br />
                <div className="text-style">
                  <textarea
                    
                    className="col-lg-12 text"
                    onChange={formik.handleChange}
                  value={formik.values.text}
                  type="text"
                  name="text"
                    placeholder="Enter your massage"
                  ></textarea>
                   
                </div>
               
              </div>
              <div className="radio-btn">
                <label className="mt-3">Your interest</label>
                <div className="radio-input col-lg-8">
                  <div>
                    <input
                    className="m-2"
                      type="radio"
                      id="Blockchain Development"
                      name="fav_language"
                      value="Blockchain Development"
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
                <div className="col-lg-6 mt-3">
                  <p>How Did You Hear About Us?</p>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Choose your answer</option>
                    <option value="1">Search engines</option>
                    <option value="2">Social Media</option>
                    <option value="3">Word of Mouth</option>
                    <option value="1">Dribble/Behance</option>
                    <option value="2">Listings(Clutch, GoodFirms etc.)</option>
                  </select>
                </div>
              </div>
              <div className="check mr-3 mt-3">
                  <input type="checkbox"
                    onChange={formik.handleChange}
                  value={formik.values.checkbox}
                  name="checkbox"/> I agree to BlockX Technology <a href="#">Privacy Policy</a>
                   {formik.errors.checkbox ? <div style={{color: "red"}}>{formik.errors.checkbox}</div> : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className=" mt-3">
                <input className="btn-submit" type="Submit" value="Send"/>
              </div>
            </div>
          </div>
          </form>
        </form>
      </div>
    </>
  );
}

export default Contactus;

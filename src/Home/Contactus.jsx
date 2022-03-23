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
      if (!values.name) {
        errors.name = "Please Enter the name";
      }
      if (!values.email) {
        errors.email = "Please Enter the email";        
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      } if (!values.textarea) {
        errors.text = 'Please Enter the text';
      } if (!values.checkbox) {
        errors.checkbox = 'Field must be checked';
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
      <div className="container">
        <div className="heading col-lg-12">
          <h1>Got a project</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="container contact">
            <div className="row">
              <div className="col-lg-6 col-sm-12 mt-3">
                <label>Name</label>
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
                <label>Email</label>
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
              <div className="col-lg-12 mt-3">
                <label>Your message</label>
                <br />
                <div className="text-style">
                  <textarea
                    type="text"
                    className="col-lg-12 text"
                    onChange={formik.handleChange}
                  value={formik.values.text}
                  name="text"
                    placeholder="Enter your massage"
                  ></textarea>
                  
                </div>
                {formik.errors.text ? <div style={{color: "red"}}>{formik.errors.text}</div> : null}
              </div>
              <div className="radio-btn">
                <label className="mt-3">Your interest</label>
                <div className="radio-input col-lg-8">
                  <div>
                    <input
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
                      type="radio"
                      id="Marketing"
                      name="fav_language"
                      value="Marketing"
                    />
                    <label for="Marketing">Marketing</label>
                  </div>
                  <div>
                    <input
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
              <div className="check m-3">
                  <input type="checkbox"
                    onChange={formik.handleChange}
                  value={formik.values.checkbox}
                  name="checkbox"/> I agree to Devox Software <a href="#">Privacy Policy</a>
                   {formik.errors.checkbox ? <div style={{color: "red"}}>{formik.errors.checkbox}</div> : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className=" mt-3">
                <input className="btn-submit" type="Submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contactus;

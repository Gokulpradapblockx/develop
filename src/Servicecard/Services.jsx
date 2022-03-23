import React from 'react'
import web from "../Assets/web.svg";
import mobile from "../Assets/mobiles.svg";
import cms from "../Assets/cms.svg";
import graphic from "../Assets/graphic-tool.svg";
import research from "../Assets/research.svg";
const Services = () => {
  return (
    <>
    <div className="srv-card">
      <div className="row space">
        <div className="col-2 card1">
          <div class="maincontainer">
            <div class="thecard">
              <div class="thefront">
                <div className="card-size">
                  <div className="png1">
                    <h1>01</h1>
                  </div>
                  <img src={web} alt="" />
                  <h5>Software Оutsourcing</h5>
                </div>
              </div>
              <div class="theback">
                <div className="back">
                  <div className="card-size1">
                    <img src={web} alt="web" />
                    <p>
                    We take care of your product on the development stage. Our IT outsourcing company creates custom web dev solutions for startups and enterprises. We listen to your ideas carefully and deliver the exact result.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 card1">
          <div class="maincontainer">
            <div class="thecard">
              <div class="thefront">
                <div className="card-size">
                  <div className="png2">
                    <h1>02</h1>
                  </div>
                  <img src={mobile} alt="" />
                  <h5>Dedicated Team</h5>
                </div>
              </div>
              <div class="theback">
                <div className="back">
                  <div className="card-size1">
                    <img src={mobile} alt="web" />
                    <p>
                    Convert more clients by reaching out to your target audience via mobile apps. Our software development company will help you with building iOS, Android and cross-platform mobile development solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 card1">
          <div class="maincontainer">
            <div class="thecard">
              <div class="thefront">
                <div className="card-size">
                  <div className="png3">
                    <h1>03</h1>
                  </div>
                  <img src={research} alt="" />
                  <h5>Staff Augmentation</h5>
                </div>
              </div>
              <div class="theback">
                <div className="back">
                  <div className="card-size1">
                    <img src={research} alt="web" />
                    <p>
                    Quality is our priority. We have a team of QA engineers who will check if your software is bug-free right in the course of development. Alternatively, they will test your ready app before release.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 card1">
          <div class="maincontainer">
            <div class="thecard">
              <div class="thefront">
                <div className="card-size">
                  <div className="png4">
                    <h1>04</h1>
                  </div>
                  <img src={graphic} alt="" />
                  <h5>R&D Office</h5>
                </div>
              </div>
              <div class="theback">
                <div className="back">
                  <div className="card-size1">
                    <img src={graphic} alt="web" />
                    <p>
                    Quality is our priority. We have a team of QA engineers who will check if your software is bug-free right in the course of development. Alternatively, they will test your ready app before release.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 card1">
          <div class="maincontainer">
            <div class="thecard">
              <div class="thefront">
                <div className="card-size">
                  <div className="png5">
                    <h1>05</h1>
                  </div>
                  <img src={cms} alt="" />
                  <h5>Business Process</h5>
                </div>
              </div>
              <div class="theback">
                <div className="back">
                  <div className="card-size1">
                    <img src={cms} alt="web" />
                    <p>
                    Ensure the risk-free and cost-effective release of your application. Our DevOps specialists will secure a smooth and continuous deployment process and provide ongoing support of your software.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Services;
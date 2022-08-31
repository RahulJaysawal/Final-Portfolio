import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
<section id="contact">

       <header >

          <div className="row banner">
            <div className="banner-text">


              <h2 style={{ color: '#fff', fontFamily: 'sans-serif', marginTop: "50px " , fontWeight:'30'}}>Contact Details
              </h2>
              <hr />



                <div className=" columnsd centered">
                  <div className="columnd">
                    <p className="">
                      <span style={{ color: '#fff', fontFamily: 'sans-serif'}}>MY WORKSHOP</span>
                      <br></br>
                      <span>
                      227, SJBIT Boys Hostel, Kengeri. 560060
                      </span>
                      <br></br>
                    </p>
                  </div>



                  <div className="columnd">
                    <p className="">
                      <span  style={{ color: '#fff', fontFamily: 'sans-serif'}}>EMAIL</span>
                      <br></br>
                      <span>
                      <li><a href={"mailto:rahuljaiswalvns111@gmail.com"} target="_blank">rahuljaiswalvns111@gmail.com</a></li>

                        {/* rahuljaiswalvns001@gmail.com */}
                      </span>
                      <br></br>
                    </p>
                    
                  </div>

                  <div className="columnd">
                    <p className="">
                      <span style={{ color: '#fff', fontFamily: 'sans-serif'}}>My Website</span>
                      <br></br>
                      <span>
                      <li><a href={"www.rahuljaysawal.online"} target="_blank">www.rahuljaysawal.online</a></li>
                      </span>
                      <br></br>
                    </p>
                  </div>

                </div>

            </div>
          </div>
        </header>
        </section>
 
      </React.Fragment>
      
    );
  }
}
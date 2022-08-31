import React, { Component } from 'react';
export default  class Skills extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="skills">

         
        



         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {/* {resumeData.skillsDescription} */}
               </p>

   				<div className="bars">

   				   {/* <ul className="skills"> */}
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                  // <h5>fff</h5>
                  <img src={`${item.imgurl}`} className="item-img1"/>

                    )
                  })
                }

   					{/* </ul> */}

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}
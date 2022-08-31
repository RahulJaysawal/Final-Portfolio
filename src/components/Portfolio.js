import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Project.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                  {/* <a href={`${item.imgurl}`} target="_blank"> */}

                  {/* <img src={`${item.imgurl}`} onClick="https://google.com" /> */}


                  {/* <a href={window.open((item.link))} > */}
                  <button type="submit" onClick={() => { (window.open(item.link)) }}>
                  {/* <a style={{display: "table-cell"}} href={window.open(item.link)} target="_blank" > */}
          <img
            src="https://bobbyhadz.com/images/blog/react-prevent-page-refresh-on-form-submit/thumbnail.webp"
            alt="example"
          />
        {/* </a> */}

                  {/* <a href={item.link}><img src={`${item.imgurl}`} onClick="https://google.com" /></a> */}

                    {/* <a href={item.link}> */}
                      {/* <img src={`${item.imgurl}`} className="item-img"/> */}
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    {/* </a> */}
                    </button>
                  </div>
                </div>
                
              )
            })
          }
          </div>
        </div>
      </div>
      {/* <h1>hello</h1> */}
  </section>
        );
  }
}
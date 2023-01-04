import React, { Component } from "react";

export class NewsItem extends Component {
  

  render() {
    let {title,desc,imageUrl,newsUrl, author, time,source}=this.props;

    return (
      <div className="card" style={{width: "22rem" , margin:"5px"}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"80%", zIndex:"1"}}>
    {source}
  </span>
        <img src={imageUrl} className="card-img-top" alt="..." style={{height:"15rem"}}/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">
            {desc}...
          </p>
          <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(time).toUTCString()}</small></p>
          <a href={newsUrl} target="_blank" className="btn btn-primary" rel="noreferrer" >
            Read more
          </a>
        </div>
      </div>
      
    );
  }
}

export default NewsItem;

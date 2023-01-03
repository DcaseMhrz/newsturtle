import React, { Component } from "react";

export class NewsItem extends Component {
  

  render() {
    let {title,desc,imageUrl,newsUrl}=this.props;

    return (
      <div className="card" style={{width: "22rem" , margin:"5px"}}>
        <img src={imageUrl} className="card-img-top" alt="..." style={{height:"15rem"}}/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">
            {desc}...
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-primary" rel="noreferrer" >
            Read more
          </a>
        </div>
      </div>
      
    );
  }
}

export default NewsItem;

import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{height: '500px',}} ><span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{ left: '90%', zIndex:'1'}}>
              {source}
            </span>
          <img src={imageUrl ? "https://ichef.bbci.co.uk/news/976/cpsprodpb/A507/production/_125374224_gettyimages-96612187.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{!description ? "No description provided" : description}</p>
            <p className="card-text"><small className="text-primary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-dark"> Read More </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem 

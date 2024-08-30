import React from 'react'

const NewsItem =(props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card" style={{height: '500px'}}>
        <div style={{ 
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0'}} >
        <span className="badge rounded-pill bg-success">
          {source}
        </span></div>
        <img src={imageUrl ? "https://ichef.bbci.co.uk/news/976/cpsprodpb/A507/production/_125374224_gettyimages-96612187.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{!description ? "No description provided" : description}</p>
          <p className="card-text"><small className="text-primary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-dark"> Read More </a>
        </div>
      </div>
      </div >
    )
  
}

export default NewsItem 

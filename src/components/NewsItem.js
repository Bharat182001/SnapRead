import React from 'react'

const NewsItem = (props) => {
  let {title, description, imageUrl, newsUrl, author, date} = props; 
  return (
    <div className="my-3">
      <div className="card" >
        <img src={!imageUrl ? "https://thehill.com/wp-content/uploads/sites/2/2023/05/homes_pa_042823ap_debt-home-buyers.jpg?w=1280" : imageUrl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toUTCString()}</small></p>
          <a rel="noreferrer noopener" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem

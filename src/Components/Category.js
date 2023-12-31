import React  from 'react'

export default function Category(props) {
  return (
    <div className="my-5">
      <div className="card" style={{width: '18rem'}}>
  <img src={props.image} className="card-img-top" alt="..." height="250"/>
  <div className="card-body">
    <h5 className="card-title">{props.name} Book</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href={props.link} className="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
  )
}

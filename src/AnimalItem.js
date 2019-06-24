import React from 'react';
import './App.css';



class AnimalItem extends React.Component {
  render() {
  return (
  
    <div className=" col-lg-3 col-md-6 mb-4">
    <div className="card h-100">
      <a href="animal.html"><img src={this.props.animal.Imagen} className="card-img-top" alt="FotoBrownie" /></a>
      <div className="card-body">
        <h4 className="card-title">
          <a href="animal.html" className="cardname">{this.props.animal.name}</a>
        </h4>
        <p className="card-text">{this.props.animal.descripcion}
        </p>
      </div>
      <div className="card-footer">
        <input className="btn btn-sm btn-block btn-search" type="submit" defaultValue="saber mas" href="animal.html" />
      </div>
    </div>
  </div>
      );
  }
}
export default AnimalItem;


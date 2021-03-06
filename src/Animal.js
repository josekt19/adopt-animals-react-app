import React from 'react';
import './App.css';



class AnimalCard extends React.Component {
  render() {
    return (

      <div className="container">
        <br />
            <br />

        <div className="card">
          <br />
            <h1><b>Firulay</b></h1>
            <div className="container ficha">

              <div className="row">
                <div className="col-sm-8">
                  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner fichamascota">
                      <div className="carousel-item active">
                        <img ssrc={this.props.animalItem.picture} className="d-block w-100" alt="Firulay1" />
              </div>
                        <div className="carousel-item">
                          <img src={this.props.animalItem.picture} className="d-block w-100" alt="Firulay3" />
              </div>

                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                    </div>

                    <div className="col-sm-4 ficharegistro">

                      <div className="container Registro-animal">
                        <br />
                          <ul>
                            <li>
                              <h4><b>Tipo</b></h4>
                            </li>
                            <dd className="Name">{this.props.animalItem.name}</dd>
                          <li>
                            <h4><b>Sexo</b></h4>
                          </li>
                          <dd className="txt">{this.props.animalItem.sex}</dd>
                          <li>
                            <h4><b>Color de ojos y Pelo</b></h4>
                          </li>
                          <dd className="txt">Marron, Pelo Negro</dd>
                          <li>
                          <h4><b>Barrio</b></h4>
                          </li>
                          <dd className="txt">{this.props.animalItem.zone}</dd>
                          <li>
                            <h4><b>Edad</b></h4>
                          </li>
                          <dd className="txt">{this.props.animalItem.breed}</dd>
                          <li>
                            <h4><b>Raza</b></h4>
                          </li>
                          <dd className="txt">Labrador Retriever</dd>
            </ul>
            



                      </div>

                    </div>

                  </div>



                  <div className="card-body">

                    <p className="card-text">{this.props.animalItem.description}</p>


                    <a href="#" className="btn btn-block btn-search">Adoptar</a>
                  </div>
                </div>

              
            </div>
            <br />
            <br />
            </div>
            
            );
        }
      }
      export default AnimalCard;
    

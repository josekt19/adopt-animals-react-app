import React from 'react';
import './App.css';


class Filters extends React.Component {
  render() {
    return (
      <section className="search-sec">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-12 p-0 filters">
                  <select className="form-control-filter filter " id="FiltroEdad">
                    <div className="filter-group">
                      <option disabled selected>Edad</option>
                      <option>0-1</option>
                      <option>2-5</option>
                      <option>6-9</option>
                      <option>8-12</option>
                      <option>13-16</option>
                      <option>17 o mas</option>
                    </div>
                  </select>
                </div>

                <div className="col-lg col-md-3 col-sm-12 p-0 filters">
                  <select className="form-control-filter filter" id="FiltroTipo">
                    <option disabled selected>Tipo</option>
                    <option>Perro</option>
                    <option>Gato</option>
                    <option>Aves</option>
                    <option>Reptiles</option>
                    <option>Peces</option>
                    <option>todas las opciones</option>
                    <option>Vaca</option>
                  </select>
                </div>

                <div className="col-lg col-md-3 col-sm-12 p-0 filters">
                  <select className="form-control-filter filter" id="FiltroRaza">
                    <option disabled selected>Raza</option>
                    <option>Beagle</option>
                    <option>bulldog</option>
                    <option>Golden</option>
                    <option>chihuaua</option>
                    <option>Puddle</option>
                    <option>Sin especificar</option>
                  </select>
                </div>

                <div className="col-lg col-md-3 col-sm-12 p-0 filters">
                  <select className="form-control-filter filter" id="FiltroNombre">
                    <option disabled selected>Nombre</option>
                    <option>Blanca</option>
                    <option>Candy</option>
                    <option>Pinky</option>
                    <option>Enzo</option>
                    <option>Brownie</option>
                    <option>Vicente</option>
                    <option>Sin nombre</option>
                    
                  </select>
                </div>

                <div className="col-lg col-md-3 col-sm-12 p-0 filters">
                  <select className="form-control-filter filter" id="FiltroBarrio">
                    <option disabled selected>Barrio</option>
                    <option>La Blanqueada</option>
                    <option>Pocitos</option>
                    <option>parque Battle</option>
                    <option>Centro</option>
                    <option>Buceo</option>
                    <option>Todos</option>
                  </select>
                </div>

                <div className="col-lg-2 col-md-3 col-sm-12 p-0 filters">
                  <select className="form-control-filter filter" id="FiltroPelo">
                    <option disabled selected>Color de pelo</option>
                    <option>blanco</option>
                    <option>Negro</option>
                    <option>Marron</option>
                    <option>Beige</option>
                    <option>con manchas</option>
                    <option>Todos</option>
                  </select>
                </div>

                <div className="col-lg-1 col-md-3 col-sm-12 p-0 filters">
                  <button type="reset" className="btn btn-search ">Filtrar</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>


  </section>

    );
  }
}

export default Filters;

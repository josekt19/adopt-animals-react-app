import React from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer';
import Carrousel from './Carrousel';
import Filters from './Filters';
import AnimalItem from './AnimalItem';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AnimalsList: [
        {
          Imagen: "Assets/pinky.jpeg",
          name: "Pinky",
          sexo: "Hembra",
          edad: "5 años",
          descripcion: "Gato &#x2022 Adulto &#x2022 Hembra &#x2022 Pequeña &#x2022 Naranja y blanco",
        },
      {
        Imagen: "Assets/brownie.jpeg",
        name: "Brownie",
        sexo: "Macho",
        edad: "2 años",
        descripcion: "Gato &#x2022 Adulto &#x2022 Hembra &#x2022 Pequeña &#x2022 Naranja y blanco",
      },
      {
        Imagen: "Assets/dog_3.jpg",
        name: "Blanca",
        sexo: "Hembra",
        edad: "1 año",
        descripcion: "Gato &#x2022 Adulto &#x2022 Hembra &#x2022 Pequeña &#x2022 Naranja y blanco",
      },
      {
        Imagen: "Assets/enzo.jpeg",
        name: "Enzo",
        sexo: "Macho",
        edad: "3 años",
        descripcion: "Gato &#x2022 Adulto &#x2022 Hembra &#x2022 Pequeña &#x2022 Naranja y blanco",
      },
      {
        Imagen: "Assets/gladys.png",
        name: "Gladys",
        sexo: "Hembra",
        edad: "7 años",
        descripcion: "Gato &#x2022 Adulto &#x2022 Hembra &#x2022 Pequeña &#x2022 Naranja y blanco",
      },
      {
        Imagen: "Assets/candy.jpeg",
        name: "Candy",
        sexo: "Hembra",
        edad: "9 años",
        descripcion: "Gato &#x2022 Adulto &#x2022 Hembra &#x2022 Pequeña &#x2022 Naranja y blanco",
      },
      {
        Imagen: "Assets/firulay1.jpg",
        name: "Firulay",
        sexo: "Hembra",
        edad: "6 años",
        descripcion: "Gato &#x2022 Adulto &#x2022 Hembra &#x2022 Pequeña &#x2022 Naranja y blanco",
      },

      ]
      
    };
    
  }

  

  render() {
    return (
      <div>
        <Header />
        <Carrousel />
        <Filters />
        
          <div className="row">

            {this.state.AnimalsList.map(item => <AnimalItem animal={item} key={item.name} />)}
          </div>
        <form />
        <Footer />


      </div>
    );
  }
}

export default App;

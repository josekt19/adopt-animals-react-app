import React from 'react';
import './App.css';


class Form extends React.Component {
  render() {
    return (
      <div class="container Registro">

  <br> </br>
  <br> </br>
  <h2>Datos de mascota</h2>
  <br> </br>
  <form>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="animaltype">Tipo de animal</label>
        <input type="text" class="form-control" id="animaltype" placeholder="Tipo de animal">
      </div>
      <div class="form-group col-md-6">
        <label for="name">Nombre de animal</label>
        <input type="text" class="form-control" id="animalname" placeholder="Opcional">
      </div>

      <div class="form-group col-md-6">
        <label for="inputAddress">Barrio</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Ingrese direccion">
      </div>
      <div class="form-group col-md-6">
        <label for="inputRaza">Raza</label>
        <input type="text" class="form-control" id="Raza" placeholder="Raza">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEdad">Edad</label>
        <input type="text" class="form-control" id="Edad" placeholder="Edad">
      </div>
      <div class="form-group col-md-4">
        <label for="inputSexo">Sexo</label>
        <select id="inputSexo" class="form-control" placeholder="Sexo">
          <option selected disabled>Seleccione Sexo</option>
          <option>Macho</option>
          <option>Hembra</option>
        </select>
      </div>
      <div class="form-group col-md-2">
        <label for="inputColor">Color de Pelo y ojos</label>
        <input type="text" class="form-control" id="inputColor">
      </div>

      <div class="form-group col-md-12">
        <label for="inputDescripcion">Descripcion</label>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroupFileAddon01">Cargar imagen</span>
      </div>
      <div class="custom-file">
        <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
        <label class="custom-file-label" for="inputGroupFile01">Cargar Imagen</label>
      </div>
    </div>
    <section class="contacto">
      <br> </br>
      <h2>Datos de contacto</h2>
    </section>
    <form>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="contacto">Nombre y apellido</label>
          <input type="text" class="form-control" id="ContactName" placeholder="Nombre de contacto">
        </div>
        <div class="form-group col-md-4">
          <label for="telefo">Telefono de contacto</label>
          <input type="tel" class="form-control" id="ContactTel" placeholder="ingrese Telefono"
            pattern="[0-9]{3}[0-9]{3}[0-9]{3}" required>
          <span class="note">Formato: 09x123456</span>
        </div>
        <div class="form-group col-md-4">
          <label for="Email">Email</label>
          <input type="Email" class="form-control" id="ContactEmail" placeholder="Email">
        </div>



      </div>
      <br> </br>
      <button type="submit" class="btn btn-lg btn-block btn-search">Registrar nueva adopcion</button>
    </form>
    <br> </br>

</div>
    );
  }
}

export default Form;

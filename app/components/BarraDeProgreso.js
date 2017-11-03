/*Cuando una clase va a extender a otra, */
import React, { Component } from 'react'

class BarraDeProgreso extends Component {
  // vamos a ver el estado local, para eso se usa el constructor, está definido como clase, y esa utilización será con una instancia
  /*state es un atributo, cuando queramos trabajar con la clase se usará el this*/
  /*progreso es un estado que se define una sola vez*/

  constructor(props) {
    super(props)
    /*react maneja métodos para todos, si tocamos el estado con:
    this.state.contador--, se modifica pero no debería ser así pq puedo arruina mi app, ya que existe el método de setState:
    this.setState el cual recibe un objeto con ciertas propiedads q se va a modificar _____ ver *1*/
    this.state ={
      progreso: 0,
      contador: 0
    }
  }

  /*
  render() {
    console.log(this.props)
    return (
      <div />
    )
  }*/
  render() {
    const { progreso } = this.state
    const backgroundColor =
      progreso <= 50 ? 'green' : progreso <= 80 ? 'yellow' : 'red'
    const style = {
      width: `${progreso}%`,
      backgroundColor,
      textAlign: 'center'
    }
    return (
      <div />
    )
  }
}

export default BarraDeProgreso
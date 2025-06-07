import React from "react";

const LisatutMateriaalit = (props) => {

    let lista = props.lista
  
    if (lista.length > 0){
      const listItems = lista.map((d) => <tr key={d.materiaali}>
        <td>{d.materiaali}</td>       
        <td>neliöitä: {d.maara}</td>   
        <td>co2: {(d.maara*d.co2)}</td>
        </tr>);
      return (
        <table>
          <tbody>{listItems}</tbody>
          </table>
      )
    }
    return (
      <div>
        <p>Aloita lisäämään materiaaleja</p>
      </div>
    )
  
  }

export default LisatutMateriaalit
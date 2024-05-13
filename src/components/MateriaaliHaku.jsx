import React from "react";

const MateriaaliHaku = (props) => {
    let data = props.data
  
    let lista = props.lista
  
    const onSubmit = (e) => {
      e.preventDefault();
      
      //lisää materiaali listaan
  
      props.tila([
        ...lista,
        {'materiaali' : document.getElementById('materiaalit').value.split('co2')[0] ,
        'maara' : document.getElementById('numero').value ,
        'co2' : document.getElementById('materiaalit').value.split(':')[1]}
      ]);
  
      document.getElementById('materiaalit').value = '';
      document.getElementById('numero').value = '';
  
    }
  
    if (data != null) {
      const listaMater = data.Resources.filter((d) => d.Names.FI.toLowerCase().includes(props.haku)).map((d) => <option key={d.Resources}>{d.Names.FI} co2/m2:{d.ConservativeDataConversionFactor * d.DataItems.DataValueItems[0].Value}</option>);
      return (
          <form id='sisalto'>
            <label htmlFor='materiaalit'>materiaali:</label>
            <select name='materiaalit' label='materiaali:' id='materiaalit'>{listaMater}</select>
            <label htmlFor='numero'>neliöitä:</label>
            <input id='numero' name='numero' type='number' label='numero' required/>
            <button onClick={onSubmit}>lisää</button>
          </form>
    )
    }
    return (
      <div>
        lataa...
      </div>
    )
  
  }

export default MateriaaliHaku
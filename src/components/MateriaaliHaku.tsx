import React from "react";
import projectService from '../services/project'

const MateriaaliHaku = ({data, lista, haku, setLista, projectName, id}) => {
  
    const onSubmit = (e) => {
      e.preventDefault();
      
      //lisää materiaali listaan
      if (document.getElementById('numero').value == 0) {
        alert('lisää neliömäärä')
        return
      }

      const materialId = Math.random().toString(16).slice(2)
  
      setLista([
        ...lista,
        {'id': materialId,
        'materiaali' : document.getElementById('materiaalit').value.split('co2')[0] ,
        'maara' : document.getElementById('numero').value ,
        'co2' : document.getElementById('materiaalit').value.split(':')[1]}
      ]);

      projectService.update(id, {projectName: projectName, materials:[
        ...lista,
        {'id': materialId,
        'materiaali' : document.getElementById('materiaalit').value.split('co2')[0] ,
        'maara' : document.getElementById('numero').value ,
        'co2' : document.getElementById('materiaalit').value.split(':')[1]}
      ]  })
  
      document.getElementById('materiaalit').value = '';
      document.getElementById('numero').value = '';
  
    }
  
    if (data != null) {
      const listaMater = data.Resources.filter((d) => d.Names.FI.toLowerCase().includes(haku)).map((d) => <option key={d.ResourceId}>{d.Names.FI} {(d.Conversions !== undefined && d.Conversions.length > 0 && d.Conversions[0].Unit != 'unit' ? d.Conversions[0].Unit : '1kpl')}:  {(d.DataItems.DataValueItems[0].Value * (d.Conversions !== undefined && d.Conversions.length > 0 ? d.Conversions[0].Value : 1)).toFixed(2)} </option>);
      return (
          <form id='sisalto'>
            <div>
              <div>
                <label htmlFor='materiaalit'>valitse materiaali:</label>
                <select className='materiaalit' name='materiaalit' label='materiaali:' id='materiaalit'>{listaMater}</select>
              </div>
              <br />
              <div>
                <label htmlFor='numero'>määrä:</label>
                <input id='numero' name='numero' type='number' label='numero' required/>
                <button onClick={onSubmit}>lisää materiaali</button>
              </div>
            </div>
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
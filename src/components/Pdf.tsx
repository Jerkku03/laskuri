import React from 'react';

import html2pdf from 'html2pdf.js';
import "../App.css"
import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
import projectService from '../services/project';


const Export = ({lista, id, projectName, setLista}) => {

  const onDelete = (idMater) => {
    const filtered = lista.filter(obj => obj.id != idMater)
    projectService.update(id, {projectName: projectName, materials: filtered})
    setLista(filtered)
  }

  const printDocument = () => {
    const input = document.getElementById('divToPrint');
    html2pdf().from(input).save('päästölaskelma')
  };

    return (
      <>
      <div id="divToPrint" className="mt4" style={{
        backgroundColor: '#f5f5f5',
        width: 'auto',
        minHeight: '200px',
        }}>
            
          <h3>Rakentamiseen käytettävät päästöt:</h3>
          {lista.map((d) => <div className='project-list' key={d.materiaali}>
          <div>{d.materiaali}</div>       
          <div>kpl: {d.maara}</div>   
          <div>co2: {parseFloat(d.maara*d.co2).toFixed(2)}</div>
          <button onClick={() => {onDelete(d.id)}}>Poista</button>
          </div>)}
          <h4>kokonaispäästöt: {parseFloat(lista.reduce((summa, a) => summa + a.maara*a.co2, 0)).toFixed(2)} co2 </h4>
      </div>
      <button onClick={() => {printDocument()}}>Tallenna PDF</button>
      </>
  )}

export default Export
import React from 'react';

import html2pdf from 'html2pdf.js';
import "../App.css"
import { CSVLink } from "react-csv";
import projectService from '../services/project';


const Export = ({lista, id, projectName, setLista}) => {

  const onDelete = (idMater) => {
    const filtered = lista.filter(obj => obj.id != idMater)
    projectService.update(id, {projectName: projectName, materials: filtered})
    setLista(filtered)
  }

  const savePdf = () => {
    const input = document.getElementById('divToPrint');
    console.log(input)
    html2pdf()
    .set({
    margin: [10, 20],
    html2canvas: {
      scale: 4,
      letterRendering: true,
    },
  })
    .from(input)
    .save('päästölaskelma')
  };

    return (
      <>
      <div id="divToPrint" className="mt4" style={{
        width: 'auto',
        minHeight: '200px',
        }}>
          <h3 className='hiilijalanOtsikko'>Rakentamisen hiilijalanjälki / rakennusluettelo:</h3>
          {lista.map((d) => <div className='project-list' key={d.materiaali}>
          <div className='listItem'>
            <div>{d.materiaali}</div>
          </div>       
          <div className='listItem'>
            <div>kpl: {d.maara}</div>
            </div>   
          <div className='listItem'>
            <div>co2: {parseFloat(d.maara*d.co2).toFixed(2)}</div>
          </div>
            <button data-html2canvas-ignore="true" onClick={() => {onDelete(d.id)}}>Poista</button>
          </div>)}
          <h4 className='kokonaisPaastot'>kokonaispäästöt: {parseFloat(lista.reduce((summa, a) => summa + a.maara*a.co2, 0)).toFixed(2)} co2 </h4>
      </div>
      <button className='tallennaPdf' onClick={() => {savePdf()}}>Tallenna PDF</button>
      <CSVLink data={lista} filename={'Päästölaskelma'} target="_blank"><button>Tallenna CSV</button></CSVLink>
      </>
  )}

export default Export
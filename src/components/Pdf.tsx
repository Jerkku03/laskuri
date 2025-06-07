import React, {Component, PropTypes, useRef} from 'react';

import html2pdf from 'html2pdf.js';
import "../App.css"



export default class Export extends Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2pdf().from(input).save('päästölaskelma')
  };

  render() {
    return (
      <>
      <div id="divToPrint" className="mt4" style={{
        backgroundColor: '#f5f5f5',
        width: 'auto',
        minHeight: '200px',
        }}>
            
          <h3>Rakentamiseen käytettävät päästöt:</h3>
          {this.props.lista.map((d) => <tr key={d.materiaali}>
          <td>{d.materiaali}</td>       
          <td>m2: {d.maara}</td>   
          <td>co2: {parseFloat(d.maara*d.co2).toFixed(2)}</td>
          </tr>)}
          <h4>kokonaispäästöt: {parseFloat(this.props.lista.reduce((summa, a) => summa + a.maara*a.co2, 0)).toFixed(2)} co2 </h4>
      </div>
      <button onClick={this.printDocument}>Tallenna PDF</button>
      </>
  )}
}
import React, {Component, PropTypes} from 'react';

// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "../App.css"
// import {html2canvas, jsPDF} from 'app/ext';


export default class Export extends Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    input.style.width='380px'
    html2canvas((input), {scale:2})
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }

  render() {
    return (
      <>
      <div id="divToPrint" className="mt4" style={{
        backgroundColor: '#f5f5f5',
        width: '790px',
        minHeight: '200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        }}>
          Rakentamiseen käytettävät päästöt:
          {this.props.lista.map((d) => <tr key={d.materiaali}>
          <td>{d.materiaali}</td>       
          <td>neliöitä: {d.maara}</td>   
          <td>co2: {parseFloat(d.maara*d.co2).toFixed(2)}</td>
          </tr>)}
          <div>kokonaispäästöt: {parseFloat(this.props.lista.reduce((summa, a) => summa + a.maara*a.co2, 0)).toFixed(2)} </div>
      </div>
      <button onClick={this.printDocument}>Tallenna PDF</button>
      </>
  )}
}
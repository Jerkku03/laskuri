import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://co2data.fi/api/co2data_construction.json'
const BASE_URL2 = 'http://localhost:3001/api/data'


const Fetch = ({setData}) => {
    useEffect(() => {
        axios
            .get(BASE_URL2)
            .then(response => {
            const notes = response
            console.log(notes.data)
            setData(notes.data)
          });
    
     }, []);
    
}

export default Fetch;
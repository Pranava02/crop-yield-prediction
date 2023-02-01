import { predictYield } from "../utils/api";
import { useState } from 'react';
//import { useEffect } from 'react';
//import axios from 'axios';
//import { response } from "express";
import "./Prediction.css";
//import styles from "./RegistrationForm.module.scss";
import Card from "react-bootstrap/Card";
import { Select } from '@chakra-ui/react'

function Result({ prediction }) {
    return (
        <div className="result-container">
            <h3>Prediction:</h3>
            <p>Predicted Yield : {prediction} tonnes/ha</p>
        </div>
    );
}


function YieldForm() {
    const [rainfall, setrainfall] = useState(Number);
    const [district, setdistrict] = useState('');
    const [crop, setcrop] = useState('');
    const [season, setseason] = useState('');
    const [prediction, setPrediction] = useState('');
    //const [inputValues, setinputValues] = useState({});
    // let inputValues = {
    //     nitrogenValue,
    //     Phosphorous,
    //     potassium,
    //     pH,
    //     rainfall,
    //     city
    // }
    // useEffect(() => {
    //     async function predictYield() {
    //       const response = await fetch("http://127.0.0.1:5000/predict", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(inputValues)
    //       });
    //       const data = await response.json();
    //       setPrediction(data.prediction);
    //       console.log(data);
    //     }
    // //predictYield();
    // if (response.keys(inputValues).length>0 ) {
    //     predictYield();
    //   }
    // }, [inputValues])

    // const handleChange = e => {
    //     setinputValues({
    //       ...inputValues,
    //       [e.target.name]: e.target.value
    //     });
    //   };

    const handleSubmit = (event) => {
        event.preventDefault();
        // const data = {
        //     nitrogenValue,
        //     Phosphorous,
        //     potassium,
        //     pH,
        //     rainfall,
        //     city
        // }
        // predictYield('http://127.0.0.1:5000/predict', data)
        // .then(response => JSON.stringify(response))
        // .then(data => {
        //     setResult(data.result);
        // })
        // setPrediction=(JSON.stringify(predictYield(nitrogenValue, Phosphorous, potassium, pH,
        // rainfall, city)));
        //result = JSON.stringify(answer);
        //setPrediction(pred.prediction);
        //.then(resp => JSON.stringify(resp))
        const resp = predictYield(rainfall, district, crop, season)
            .then(resp => JSON.stringify(resp))
            //.then(resp.split("}"))
            .then(data => {
                setPrediction(data.split("\"")[5]);

            });
        //setPrediction(response['prediction']);

        //console.log(ans);
        // async function preYield {
        //     e.preventDefault();
        //     const response = await axios.post('http://localhost:5000/predict', data);
        //     setPrediction(response.data.result);
        // }

        // useEffect(() => {
        //     async function predictYield() {
        //       const response = await fetch("http://127.0.0.1:5000/predict", {
        //         method: "POST",
        //         headers: {
        //           "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(inputValues)
        //       });
        //       const data = await response.json();
        //       setPrediction(data.prediction);
        //       console.log(data);
        //     }

        // })
    }

    return (
        <div className="center">
            <Card style={{ paddingLeft: '5%', paddingRight: '5%', borderRadius: '10%', paddingTop: '3%', paddingBottom: '3%', marginBottom: '3%' }}>
                <form className="form" onSubmit={handleSubmit}>

                    <label>
                        Rainfall:
                        <input type="number" value={rainfall} onChange={(e) => setrainfall(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        {/* City:
                         <input type="text" value={district} onChange={(e) => setdistrict(e.target.value)} />
                        <label> */}
                City:&nbsp;
                {/* <input type="text" value={city} onChange={(e) => setcity(e.target.value)} /> */}
                <Select placeholder='Select city' type="text" value={district} onChange={(e) => setdistrict(e.target.value)}>
                    <option value='AHMEDNAGAR'>Ahmednagar</option>
                    <option value='AKOLA'>Akola</option>
                    <option value='AMRAVATI'>Amravati</option>
                    <option value='AURANGABAD'>Aurangabad</option>
                    <option value='BEED'>Beed</option>
                    <option value='BHANDARA'>Bhandara</option>
                    <option value='BULDHANA'>Buldhana</option>
                    <option value='CHANDRAPUR'>Chandrapur</option>
                    <option value='DHULE'>Dhule</option>
                    <option value='GADCHIROLI'>Gadchiroli</option>
                    <option value='GONDIA'>Gondia</option>
                    <option value='HINGOLI'>Hingoli</option>
                    <option value='JALGAON'>Jalgaon</option>
                    <option value='JALNA'>Jalna</option>
                    <option value='KOLHAPUR'>Kolhapur</option>
                    <option value='LATUR'>Latur</option>
                    <option value='MUMBAI'>Mumbai</option>
                    <option value='NAGPUR'>Nagpur</option>
                    <option value='NANDED'>Nanded</option>
                    <option value='NANDURBAR'>Nandurbar</option>
                    <option value='NASHIK'>Nashik</option>
                    <option value='OSMANABAD'>Osmanabad</option>
                    <option value='PALGHAR'>Palghar</option>
                    <option value='PARBHANI'>Parbhani</option>
                    <option value='PUNE'>Pune</option>
                    <option value='RAIGAD'>Raigad</option>
                    <option value='RATNAGIRI'>Ratnagiri</option>
                    <option value='SANGLI'>Sangli</option>
                    <option value='SATARA'>Satara</option>
                    <option value='SINDHUDURG'>Sindhudurg</option>
                    <option value='SOLAPUR'>Solapur</option>
                    <option value='THANE'>Thane</option>
                    <option value='WARDHA'>Wardha</option>
                    <option value='WASHIM'>Washim</option>
                    <option value='YAVATMAL'>Yavatmal</option>
                </Select>
            </label>
            <br />
                    <label>
                        Crop:
                        <input type="text" value={crop} onChange={(e) => setcrop(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Season:
                        <input type="text" value={season} onChange={(e) => setseason(e.target.value)} />
                    </label>
                    <br />
                    <div style={{ textAlign: 'center', padding: '5%' }}>
                        <button className="btn btn-primary" type="submit">Predict</button>
                    </div>
                    <br />
                    {/* */}
                    {prediction && <Result prediction={prediction} />}
                    {/* <p>{prediction}</p> */}
                </form>
            </Card>
            {/* <p>[ans]</p>  */}
        </div>
    );
}

export default YieldForm;
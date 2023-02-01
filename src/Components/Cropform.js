import { predictCrop } from "../utils/api";
import { useState } from 'react';
//import { useEffect } from 'react';
//import axios from 'axios';
//import { response } from "express";
import "./Prediction.css";
//import styles from "./RegistrationForm.module.scss";
import Card from "react-bootstrap/Card";
import { Center} from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

function Result({ prediction }) {
    return (
        <div className="result-container">
            <h3>Prediction:</h3>
            <p>{prediction}</p>
        </div>
    );
}


function CropForm() {
    const [nitrogenValue, setnitrogenValue] = useState(Number);
    const [Phosphorous, setPhosphorous] = useState(Number);
    const [potassium, setpotassium] = useState(Number);
    const [pH, setpH] = useState(Number);
    const [rainfall, setrainfall] = useState(Number);
    const [city, setcity] = useState('');
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
        const resp = predictCrop(nitrogenValue, Phosphorous, potassium, pH,
            rainfall, city).then(resp => JSON.stringify(resp))
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
                    <label >
                        Nitrogen: &nbsp;
                        <input type="number" value={nitrogenValue} onChange={(e) => setnitrogenValue(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Phosphorous:&nbsp;
                        <input type="number" value={Phosphorous} onChange={(e) => setPhosphorous(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Potassium:&nbsp;
                        <input type="number" value={potassium} onChange={(e) => setpotassium(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        pH:&nbsp;
                        <input type="number" value={pH} onChange={(e) => setpH(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Rainfall:&nbsp;
                        <input type="number" value={rainfall} onChange={(e) => setrainfall(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        City:&nbsp;
                        {/* <input type="text" value={city} onChange={(e) => setcity(e.target.value)} /> */}
                        <Select placeholder='Select city' type="text" value={city} onChange={(e) => setcity(e.target.value)}>
                            <option value='Ahmednagar'>Ahmednagar</option>
                            <option value='Akola'>Akola</option>
                            <option value='Amravati'>Amravati</option>
                            <option value='Aurangabad'>Aurangabad</option>
                            <option value='Beed'>Beed</option>
                            <option value='Bhandara'>Bhandara</option>
                            <option value='Buldhana'>Buldhana</option>
                            <option value='Chandrapur'>Chandrapur</option>
                            <option value='Dhule'>Dhule</option>
                            <option value='Gadchiroli'>Gadchiroli</option>
                            <option value='Gondia'>Gondia</option>
                            <option value='Hingoli'>Hingoli</option>
                            <option value='Jalgaon'>Jalgaon</option>
                            <option value='Jalna'>Jalna</option>
                            <option value='Kolhapur'>Kolhapur</option>
                            <option value='Latur'>Latur</option>
                            <option value='Mumbai'>Mumbai</option>
                            <option value='Nagpur'>Nagpur</option>
                            <option value='Nanded'>Nanded</option>
                            <option value='Nandurbar'>Nandurbar</option>
                            <option value='Nashik'>Nashik</option>
                            <option value='Osmanabad'>Osmanabad</option>
                            <option value='Palghar'>Palghar</option>
                            <option value='Parbhani'>Parbhani</option>
                            <option value='Pune'>Pune</option>
                            <option value='Raigad'>Raigad</option>
                            <option value='Ratnagiri'>Ratnagiri</option>
                            <option value='Sangli'>Sangli</option>
                            <option value='Satara'>Satara</option>
                            <option value='Sindhudurg'>Sindhudurg</option>
                            <option value='Solapur'>Solapur</option>
                            <option value='Thane'>Thane</option>
                            <option value='Wardha'>Wardha</option>
                            <option value='Washim'>Washim</option>
                            <option value='Yavatmal'>Yavatmal</option>
                        </Select>
                    </label>
                    <br />
                    <div style={{ textAlign: 'center', padding: '5%' }}>
                        <button className="btn btn-primary" rounded="true" type="submit" >Predict</button>
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

export default CropForm;

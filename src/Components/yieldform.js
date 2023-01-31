import { predictYield } from "../utils/api";
import { useState } from 'react';
//import { useEffect } from 'react';
//import axios from 'axios';
//import { response } from "express";
import "./Prediction.css";
//import styles from "./RegistrationForm.module.scss";

function Result({prediction}) {
    return (
      <div className="result-container">
        <h3>Prediction:</h3>
        <p>{prediction}</p>
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
        <form className="form" onSubmit={handleSubmit}>
            
            <label>
                rainfall:
                <input type="number" value={rainfall} onChange={(e)=>setrainfall(e.target.value)} />
            </label>
            <br />
            <label>
                city:
                <input type="text" value={district} onChange={(e)=>setdistrict(e.target.value)} />
            </label>
            <br />
            <label>
                Crop:
                <input type="text" value={crop} onChange={(e)=>setcrop(e.target.value)} />
            </label>
            <br />
            <label>
                Season:
                <input type="text" value={season} onChange={(e)=>setseason(e.target.value)} />
            </label>
            
            <button type="submit">Predict</button>
            <br />
            {/* */}
            {prediction && <Result prediction={prediction} />}
            {/* <p>{prediction}</p> */}
        </form>
        
        {/* <p>[ans]</p>  */}
        </div>
    );
}

export default YieldForm;
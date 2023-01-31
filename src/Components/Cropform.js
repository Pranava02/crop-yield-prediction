import { predictCrop } from "../utils/api";
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
                 setPrediction(data.split("\"")[3]);
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
                Nitrogen:
                <input type="number" value={nitrogenValue} onChange={(e)=>setnitrogenValue(e.target.value)} />
            </label>
            <br />
            <label>
                Phosphorous:
                <input type="number" value={Phosphorous} onChange={(e)=>setPhosphorous(e.target.value)} />
            </label>
            <br />
            <label>
                potassium:
                <input type="number" value={potassium} onChange={(e)=>setpotassium(e.target.value)} />
            </label>
            <br />
            <label>
                pH:
                <input type="number" value={pH} onChange={(e)=>setpH(e.target.value)} />
            </label>
            <br />
            <label>
                rainfall:
                <input type="number" value={rainfall} onChange={(e)=>setrainfall(e.target.value)} />
            </label>
            <br />
            <label>
                city:
                <input type="text" value={city} onChange={(e)=>setcity(e.target.value)} />
            </label>
            <br />
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

export default CropForm;

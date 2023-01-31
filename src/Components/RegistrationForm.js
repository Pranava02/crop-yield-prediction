import React, { useState, useContext } from "react";
import UsersContext from "./users-context";
//import error from "../App";
import styles from "./RegistrationForm.module.scss";
import Button from "./Button";
import Form from "react-bootstrap/Form";
import { predictYield } from "../utils/api";
import Result from '../Components/result';
import App from "../App";
const RegistrationForm = () => {
  const usersCtx = useContext(UsersContext);

  const [addFormData, setAddFormData] = useState({
    pH: Number,
    rainfall: Number,
    city: "",
    Phosphorous: Number,
    nitrogenValue: Number,
    potassium: Number,
  });

  const [Prediction, setPrediction] = useState(null);
  //const [error, setError] = useState(null);

  let initVal = false;

  const addFormHandler = (event) => {
    initVal = false;

    const fieldName = event.target.getAttribute();
    //const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const submitHandler = async event => {
    event.preventDefault();
    initVal = true;
    console.log(initVal);
    // usersCtx.onAddUser({
    //   //id: Math.random(),
    //   pH: addFormData.pH,
    //   rainfall: addFormData.rainfall,
    //   city: addFormData.city,
    //   Phosphorous: addFormData.Phosphorous,
    //   nitrogenValue: addFormData.nitrogenValue,
    //   potassium: addFormData.potassium,
    // });
    // const [prediction, setPrediction] = useState(null);
    // const [error, setError] = useState(null);
    const { data } = await predictYield(addFormData.nitrogenValue, addFormData.Phosphorous, addFormData.potassium, addFormData.pH, addFormData.rainfall, addFormData.city);
    setPrediction(data.Prediction);
    // } catch (error) {
    //   setError(error.message);
    // }
  };

  return (
    
    <div className={styles.alignCenter}>
      <h1>Predict your crop</h1>
      <form className={styles.formStyle} onSubmit={submitHandler}>
        <div className={styles.formGroup}>
          <label htmlFor="nitrogenValue">Nitrogen</label>
          <input
            type="number"
            placeholder="Nitrogen Value"
            className={styles.formControl}
            name="nitrogenValue"
            value={addFormData.nitrogenValue}
            //onChange={setAddFormData({nitrogenValue}, e.target.value)}
            onChange={(e)=>setAddFormData(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="Phosphorous">Phosphorous</label>
          <input
            type="number"
            placeholder="Phosphorous"
            className={styles.formControl}
            name="Phosphorous"
            // value={initVal ? "" : addFormData.Phosphorous}
            // onChange={addFormHandler}
            value={addFormData.Phosphorous}
            //onChange={setAddFormData({Phosphorous})}
            onChange={(e)=>setAddFormData(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="potassium">Potassium</label>
          <input
            type="number"
            placeholder="potassium"
            className={styles.formControl}
            name="potassium"
            // value={initVal ? "" : addFormData.potassium}
            // onChange={addFormHandler}
            value={addFormData.potassium}
            //onChange={setAddFormData({potassium})}
            onChange={(e)=>setAddFormData(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="pH">pH</label>
          <input
            type="number"
            placeholder="pH value"
            className={styles.formControl}
            name="pH"
            // value={initVal ? "" : addFormData.pH}
            min="1"
            max="14"
            // onChange={addFormHandler}
            value={addFormData.pH}
            //onChange={setAddFormData({pH})}
            onChange={(e)=>setAddFormData(e.target.value)}
            required
          />

        </div>
        <div className={styles.formGroup}>
          <label htmlFor="rainfall">Rainfall</label>
          <input
            type="number"
            placeholder="annual rainfall"
            className={styles.formControl}
            name="rainfall"
            // value={initVal ? "" : addFormData.rainfall}
            // onChange={addFormHandler}
            value={addFormData.rainfall}
            //onChange={setAddFormData({rainfall})}
            onChange={(e)=>setAddFormData(e.target.value)}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="city">District</label>
          {/* <input
            type="text"
            placeholder="District"
            className={styles.formControl}
            name="District"
            onChange={addFormHandler}
            required
          /> */}
            
            <Form.Select className={styles.formControl} style={{ marginLeft: '1rem' }}
             aria-label="Default select example"> 
              <option>Select</option>
              <option value="1">Ahmednagar</option>
              <option value="2">Akola</option>  
              <option value="3">Amravati</option>
              <option value="4">Aurangabad</option>
              <option value="5">Beed</option>
              <option value="6">Bhandara</option>
              <option value="7">Buldhana</option>
              <option value="8">Chandrapur</option>
              <option value="9">Dhule</option>
              <option value="10">Gadchiroli</option>
              <option value="11">Gondia</option>
              <option value="12">Hingoli</option>
              <option value="13">Jalgaon</option>
              <option value="14">Jalna</option>
              <option value="15">Kolhapur</option>
              <option value="16">Latur</option>
              <option value="17">Mumbai city</option>
              <option value="18">Mumbai suburban</option>
              <option value="19">Nagpur</option>
              <option value="20">Nanded</option>
              <option value="21">Nandurbar</option>
              <option value="22">Nashik</option>
              <option value="23">Osmanabad</option>
              <option value="24">Palghar</option>
              <option value="25">Parbhani</option>
              <option value="26">Pune</option>
              <option value="27">Raigad</option>
              <option value="28">Ratnagiri</option>
              <option value="29">Sangli</option>
              <option value="30">Satara</option>
              <option value="31">Sindhudurg</option>
              <option value="32">Solapur</option>
              <option value="33">Thane</option>
              <option value="34">Wardha</option>
              <option value="35">Washim</option>
              <option value="36">Yavatmal</option>
              {/* value={initVal ? "" : addFormData.city} */}
              {/* Form.value={addFormData.nitrogenValue}
              onChange={setAddFormData({nitrogenValue})} */}
            </Form.Select>
            
        </div>
        
        <div>
          <Button type="submit" onSubmit={submitHandler}>Give prediction</Button>
        </div>

      </form>
      {Prediction && <Result/>}
      {/* //error && <p>{error}</p>} */}
    </div>
  );
};

export default RegistrationForm;
import axios from 'axios';
//import { raw } from 'express';
const api = axios.create({
  baseURL: 'http://127.0.0.1:5000', // replace this with the URL of your Flask API
});

export const predictCrop = async (nitrogenValue, Phosphorous, potassium, pH,
   rainfall, city) =>
  {
    try{
        const response= api.post('/predict', { nitrogenValue, Phosphorous, potassium, pH, rainfall, city});
        // return response.then(function(data){
        //   return data.body;
        // });
        return response;
    }
    catch(error){
      throw error;
    }
  }

  export const predictYield = async (rainfall, district, crop, season) =>
   {
     try{
         const response= api.post('/yield', {rainfall, district, crop, season});
         // return response.then(function(data){
         //   return data.body;
         // });
         return response;
     }
     catch(error){
       throw error;
     }
   }

// export const predictYield = async (url, data) => {
//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       mode: 'cors',
//       //cache: 'no-cache',
//      // credentials: 'same-origin',
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//       },
//       //redirect: 'follow',
//       //referrer: 'no-referrer',
//       body : data
//     });
//     return response;
//   } catch (error) {
//     return console.error(error);
//   }
// }

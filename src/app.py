from flask import Flask, request, jsonify, render_template
from flask_cors import CORS, cross_origin
import numpy as np
import pandas as pd
import pickle
import requests
# from models import model_nb

# Loading crop recommendation model

crop_recommendation_model_path = "./models/model_nb.pkl"
crop_recommendation_model = pickle.load(open(crop_recommendation_model_path, 'rb'))

yield_prediction_model_path = "./models/model_rfr.pkl"
yield_prediction_model = pickle.load(open(yield_prediction_model_path, 'rb'))

# fetching temperature and humidity from API
def weather_fetch(city):
    """
    Fetch and returns the temperature and humidity of a city
    :params: city_name
    :return: temperature, humidity
    """
    # api_key = config.weather_api_key
    base_url = "http://api.openweathermap.org/data/2.5/weather?"
    api_key = "8847d0713b23e19b31d06c3b325d6c95"
    complete_url = base_url + "q=" + city + "&APPID=" + api_key
    # url_complete= "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&APPID=8847d0713b23e19b31d06c3b325d6c95"
    response = requests.get(complete_url)
    x = response.json()
    
    if x["cod"] != "404":
        y = x["main"]

        temperature = round((y["temp"] - 273.15), 2)
        humidity = y["humidity"]
        return temperature, humidity
    else:
        return None
app = Flask(__name__)
CORS(app, origins=["http://localhost:5000/"])
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
@cross_origin()
def about():
    return "THIS IS HOME PAGE"

@app.route('/predict', methods=['GET','POST'])
@cross_origin()
def predict():
    # if request.method == 'POST':
    # data= request.json()
    # console.log(data)
    # nitrogenValue = int(request.form['nitrogenValue'])
    # Phosphorous = int(request.form['Phosphorous'])
    # potassium = int(request.form['potassium'])
    # pH = float(request.form['pH'])
    # rainfall = int(request.form['rainfall'])
    # city = request.form['city']

    data = request.get_json()
    nitrogenValue = data.get("nitrogenValue")
    Phosphorous = data.get("Phosphorous")
    potassium = data.get("potassium")
    pH = data.get("pH")
    rainfall = data.get("rainfall")
    city = data.get("city")

    if (city is None) or city=="":
        city="Pune"

    
    if weather_fetch(city) != None:
        temperature, humidity = weather_fetch(city)
        data = np.array([[nitrogenValue, Phosphorous, potassium, temperature, humidity, pH, rainfall]])
        my_prediction = crop_recommendation_model.predict(data)
        final_prediction = my_prediction[0]
        return jsonify({"prediction": final_prediction})

@app.route('/yield', methods=['GET','POST'])
@cross_origin()
def calc_yield():
    data = request.get_json()
    year = 2023
    rainfall = data.get("rainfall")
    district = data.get("district")
    crop = data.get("crop")
    season = data.get("season")

    # def get_district_data(district):
    #     districts = {
    #     "AHMEDNAGAR": [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    #     "AKOLA": [0, 1, 0, 0, 0],
    #     "AMRAVATI": [0, 0, 1, 0, 0],
    #     "AURANGABAD": [0, 0, 0, 1, 0],
    #     "district5": [0, 0, 0, 0, 1]
    #     }
    #     return districts.get(district)

    districts = [
        "AHMEDNAGAR", "AKOLA", "AMRAVATI", "AURANGABAD", "BEED", "BHANDARA", "BULDHANA", "CHANDRAPUR", "DHULE", "GADCHIROLI", 
        "GONDIA", "HINGOLI", "JALGAON", "JALNA", "KOLHAPUR", "LATUR", "MUMBAI_SUBURBAN","NAGPUR", "NANDED", "NANDURBAR", "NASHIK", 
        "OSMANABAD", "PARBHANI", "PUNE", "RAIGAD","RATNAGIRI","SANGLI", "SATARA", "SINDHUDURG","SOLAPUR", "THANE", "WARDHA", "WASHIM", "YAVATMAL"
    ]

    crops = [
        "Arhar/Tur", "Bajra", "Castor seed", "Gram", "Groundnut", "Jowar", "Linseed", "Maize", "Moong", "Niger seed", "Other Cereals", "Kharif pulses", "Rabi pulses", "Summer Pulses", "Ragi", "Mustard", "Rice", "Safflower",
        "Sesamum", "millets", "Soyabean", "Sugarcane", "Sunflower", "Tobacco", "Urad", "Wheat", "oilseeds"
    ]

    seasons = [
        "Kharif", "Rabi", "Summer", "Whole_Year"
    ]


    def get_district_data(district):
        # districts = ['District 1', 'District 2', ..., 'District 34']
        district_data = [0 for i in range(34)]

        district_index = districts.index(district)
        district_data[district_index] = 1

        return district_data

    def get_crop_data(crop):
        
        crop_data = [0 for i in range(27)]

        crop_index = crops.index(crop)
        crop_data[crop_index] = 1

        return crop_data

    def get_season_data(season):
        
        season_data= [0 for i in range(4)]

        season_index = seasons.index(season)
        season_data[season_index] = 1

        return season_data
   
    crop_data = get_crop_data(crop)
    district_data = get_district_data(district)
    season_data = get_season_data(season)

    # Concatenate the arrays
    input_data= [rainfall, year]
    input_data += crop_data + district_data + season_data
    input_data=[input_data]
    # return jsonify(input_data)
    # console.log(input_data)

    yield_prediction = yield_prediction_model.predict(input_data)
    final_prediction = yield_prediction[0]
    
    return jsonify({'prediction': str(round(final_prediction, 2))})

    # return 'THIS IS YIELD PAGE'

if __name__ == '__main__':
    app.run(debug=True)
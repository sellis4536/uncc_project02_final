import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

import json

import sys

app = Flask(__name__)

#################################################
# Database Setup
#################################################

engine = create_engine("sqlite:///Data/sqlite/campaign_contribution_data.db?check_same_thread=False")
conn = engine.connect()

Base = automap_base()

Base.prepare(engine, reflect=True)

print(Base.classes.keys(), file=sys.stdout)

candidate_ipt_data = Base.classes.candidate_IPT
candidate_states_data = Base.classes.candidate_states
personal_contributions_data = Base.classes.personal_contributions

session = Session(engine)

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("home_page.html")

# @app.route("/individual_data")
# def individual_data():
#     individual_data_query = session.query(\
#                                         individual_data_table.candidate_x, \
#                                         individual_data_table.TRANSACTION_AMT, \
#                                         individual_data_table.TRANSACTION_DT, \
#                                         individual_data_table.state, \
#                                         individual_data_table.city, \
#                                         individual_data_table.zip_code, \
#                                         individual_data_table.employer, \
#                                         individual_data_table.occupation)

#     individual_data_list = []
#     for result in individual_data_query:
#         individual_data_dictionary = {}
#         individual_data_dictionary["candidate_x"] = result[0]
#         individual_data_dictionary["transaction_amount"] = result[1]
#         individual_data_dictionary["transaction_date"] = result[2]
#         individual_data_dictionary["state"] = result[3]
#         individual_data_dictionary["city"] = result[4]
#         individual_data_dictionary["zip_code"] = result[5]
#         individual_data_dictionary["employer"] = result[6]
#         individual_data_dictionary["occupation"] = result[7]
#         individual_data_list.append(individual_data_dictionary)

#     return jsonify(individual_data_list)

@app.route("/candidate_ipt")
def candidate_ipt():
    candidate_ipt_data_query = session.query(\
                                     candidate_ipt_data.Day,\
                                     candidate_ipt_data.Candidate,\
                                     candidate_ipt_data.IPT)

    candidate_ipt_data_list = []
    for result in candidate_ipt_data_query:
        candidate_ipt_dicionary = {}
        candidate_ipt_dicionary["Day"] = result[0]
        candidate_ipt_dicionary["Candidate"] = result[1]
        candidate_ipt_dicionary["IPT"] = result[2]
        candidate_ipt_data_list.append(candidate_ipt_dicionary)

    return jsonify(candidate_ipt_data_list)

states_json = "static/js/us_states.geojson"
country_json = "us_county_contributions.geojson"

@app.route("/candidate_ipt/<candidate>")
def candidate_choice_ipt(candidate):
    candidate_ipt_data_query = session.query(\
                                     candidate_ipt_data.Day,\
                                     candidate_ipt_data.Candidate,\
                                     candidate_ipt_data.IPT)\
                                     .filter(candidate_ipt_data.Candidate == candidate)

    candidate_ipt_data_list = []
    for result in candidate_ipt_data_query:
        candidate_ipt_dicionary = {}
        candidate_ipt_dicionary["Day"] = result[0]
        candidate_ipt_dicionary["Candidate"] = result[1]
        candidate_ipt_dicionary["IPT"] = result[2]
        candidate_ipt_data_list.append(candidate_ipt_dicionary)

    return jsonify(candidate_ipt_data_list)

@app.route("/ipts_page")
def candidate_ipt_page():
    return render_template("ipts_page.html")

@app.route("/candidate_states")
def candidate_states():
    candidate_states_query = session.query(\
                                           candidate_states_data.state, \
                                           candidate_states_data.Candidate, \
                                           candidate_states_data.Total)
    
    candidate_states_list = []
    for result in candidate_states_query:
        candidate_states_dictionary = {}
        candidate_states_dictionary["state"] = result[0]
        candidate_states_dictionary["candidate"] = result[1]
        candidate_states_dictionary["total"] = result[2]
        candidate_states_list.append(candidate_states_dictionary)
    
    return jsonify(candidate_states_list)

@app.route("/states_contributions_page")
def candidate_states_page():
    return render_template("state_contributions.html")

@app.route("/top_contributors_page")
def personal_contributions_page():
    return render_template("personal_contributions_page.html")

@app.route("/djt_contributions")
def djt_contributions():
    personal_contributions_query = session.query(\
                                            personal_contributions_data.EMPLOYER,\
                                            personal_contributions_data.candidate_x,\
                                            func.sum(personal_contributions_data.TRANSACTION_AMT))\
                                            .group_by("1")\
                                            .filter(personal_contributions_data.candidate_x == "djt")\
                                            .order_by(func.sum(personal_contributions_data.TRANSACTION_AMT).desc())\

    personal_contributions_list = []
    for result in personal_contributions_query:
        personal_contributions_dictionary = {}
        personal_contributions_dictionary["Employer"] = result[0]
        personal_contributions_dictionary["Candidate"] = result[1]
        personal_contributions_dictionary["Total"] = result[2]
        personal_contributions_list.append(personal_contributions_dictionary)
    
    return jsonify(personal_contributions_list)

@app.route("/djt_contributions/<top_x>")
def djt_contributions_choice(top_x):
    personal_contributions_query = session.query(\
                                            personal_contributions_data.EMPLOYER,\
                                            personal_contributions_data.candidate_x,\
                                            func.sum(personal_contributions_data.TRANSACTION_AMT))\
                                            .group_by("1")\
                                            .order_by(func.sum(personal_contributions_data.TRANSACTION_AMT).desc())\
                                            .filter(personal_contributions_data.candidate_x == "djt")\
                                            .limit(top_x)

    personal_contributions_list = []
    for result in personal_contributions_query:
        personal_contributions_dictionary = {}
        personal_contributions_dictionary["Employer"] = result[0]
        personal_contributions_dictionary["Candidate"] = result[1]
        personal_contributions_dictionary["Total"] = result[2]
        personal_contributions_list.append(personal_contributions_dictionary)
    
    return jsonify(personal_contributions_list)

@app.route("/hrc_contributions")
def hrc_contributions():
    personal_contributions_query = session.query(\
                                            personal_contributions_data.EMPLOYER,\
                                            personal_contributions_data.candidate_x,\
                                            func.sum(personal_contributions_data.TRANSACTION_AMT))\
                                            .group_by("1")\
                                            .filter(personal_contributions_data.candidate_x == "hrc")\
                                            .order_by(func.sum(personal_contributions_data.TRANSACTION_AMT).desc())\

    personal_contributions_list = []
    for result in personal_contributions_query:
        personal_contributions_dictionary = {}
        personal_contributions_dictionary["Employer"] = result[0]
        personal_contributions_dictionary["Candidate"] = result[1]
        personal_contributions_dictionary["Total"] = result[2]
        personal_contributions_list.append(personal_contributions_dictionary)
    
    return jsonify(personal_contributions_list)

@app.route("/hrc_contributions/<top_x>")
def hrc_contributions_choice(top_x):
    personal_contributions_query = session.query(\
                                            personal_contributions_data.EMPLOYER,\
                                            personal_contributions_data.candidate_x,\
                                            func.sum(personal_contributions_data.TRANSACTION_AMT))\
                                            .group_by("1")\
                                            .order_by(func.sum(personal_contributions_data.TRANSACTION_AMT).desc())\
                                            .filter(personal_contributions_data.candidate_x == "hrc")\
                                            .limit(top_x)

    personal_contributions_list = []
    for result in personal_contributions_query:
        personal_contributions_dictionary = {}
        personal_contributions_dictionary["Employer"] = result[0]
        personal_contributions_dictionary["Candidate"] = result[1]
        personal_contributions_dictionary["Total"] = result[2]
        personal_contributions_list.append(personal_contributions_dictionary)
    
    return jsonify(personal_contributions_list)

@app.route("/api_tutorial")
def api_tutorial():
    return render_template("api_tutorial.html")

if __name__ == "__main__":
    app.run(debug=True)
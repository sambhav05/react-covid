import React, { Component } from 'react';
import axios from 'axios';



function Summary({summary, currentDate}) {
    return (
        
        <div className="row rowona">
            <div className="NewConfirmed javana">
                <h3>New Confirmed</h3>
            <h1>{summary.NewConfirmed}</h1>
            </div>

            <div className="TotalConfirmed javana">
                <h3>Total Confirmed</h3>
            <h1>{summary.TotalConfirmed}</h1>

            </div>

            <div className="NewDeaths javana">
                <h3>New Deaths</h3>
            <h1>{summary.NewDeaths}</h1>

            </div>

            <div className="TotalDeaths javana">
                <h3>Total Deaths</h3>
            <h1>{summary.TotalDeaths}</h1>

            </div>

            <div className="TotalRecovered javana">
                <h3>Total Recovered</h3>
            <h1>{summary.TotalRecovered}</h1>

            </div>



        </div>
    )
}




class Countries extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             countries :[] ,
             global:[],
             currentDate:null
        }
    }
    
    componentDidMount= async() => {
       
        const res = await axios.get("https://api.covid19api.com/summary");
         
        this.setState({
            countries:res.data.Countries,
            global: res.data.Global ,
            currentDate: res.data.Date

        })
    }

    render() {
        return (
            <div>
                Data is of<h4>{new Date(this.state.currentDate).toDateString()}</h4><br/>   
                <Summary summary={this.state.global} currentDate={this.state.currentDate}/>
                <table>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Total Recovered</th>
                            <th>Total Deaths</th>
                            <th>Total Confirmed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.countries.map(country =>{
                            return(
                                <tr>
                                    <td>{country.Country}</td>
                                    <td>{country.TotalRecovered}</td>
                                    <td>{country.TotalDeaths}</td>
                                    <td>{country.TotalConfirmed}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Countries

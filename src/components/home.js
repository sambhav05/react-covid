import React, { Component } from 'react'
import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css";
class Home extends Component {
    render() {
        return (
            <div >
                <br/>

                        <div class="ggg">
                        <h4><u> Welcome to our Covid-Tracker App:</u> Stay Home-Stay Safe</h4>  <br/><br/> 
                        </div>

                    <div className="row">

                        <div className="image-section">
                        <img width="400" src="https://www.who.int/images/default-source/imported/world-health-day-2019-health-is-a-human-right.gif?sfvrsn=22f183c4_14" alt="i"/>
                        </div>

                        <div>
                        <iframe width="400" height="400" title="regd" src="https://www.youtube.com/embed/mOV1aBVYKGA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>

                    </div>
 

                

            </div>
        )
    }
}

export default Home

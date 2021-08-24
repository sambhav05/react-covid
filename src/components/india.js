import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'
function Doc(props) {
    if(props.ppp===1){
        return (
        <div className="jj">
            <div className="lala">
                <br/>
               <h5>Active Cases :</h5> <li>{props.xxx.active}</li><br/>
               <h5>Confirmed Cases :</h5> <li>{props.xxx.confirmed}</li><br/>
               <h5>Deceased Cases :</h5> <li>{props.xxx.deceased}</li><br/>
               <h5>Recovered Cases: </h5><li>{props.xxx.recovered}</li><br/>
            </div>
        </div>
           
        )
    }else{
        return(
            <>
            </>
        )
    }
   
}


class India extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             district:"",
             main:"",
             flag:0 ,
             res:""
        }
    }
    
    onChangeDistrict = (e) =>{
        this.setState({
            district:e.target.value
        });
    }

    onChangeMain = (e) =>{
        this.setState({
            main:e.target.value
        });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        
        const result= await axios.get("https://api.covid19india.org/state_district_wise.json")
        

         let x;
         try{
            x = result["data"][this.state.main]["districtData"][this.state.district];
            if(x!==undefined)
                this.setState({
                    res:x ,
                    flag:1
                })
            else{
                this.setState({
                    flag:0
                })
                alert("Not Found");
            }
         }catch(e){
            this.setState({
                flag:0
            })
             alert("Not Found");
         }
        
    }


    render() {
        return (
            <div>
            <h3>Search State Wise Data</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>District: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.district}
                        onChange={this.onChangeDistrict}
                        />
                </div>
                <div className="form-group"> 
                    <label>State: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.main}
                        onChange={this.onChangeMain}
                        />
                </div>
                <div className="form-group">
                    <input type="submit" value="Go" className="btn btn-primary" />
                </div>
                </form>
                <Doc ppp={this.state.flag} xxx={this.state.res}></Doc>
            </div>
        )
    }
}

export default India

import React, { Component } from 'react';


class Summary extends Component {
    constructor(){
        super()
    }

    // function to grab user input

   searchMovies = async (event) => {
        event.preventDefault();
        console.log("submitting")

        const query = ""

    //    variable for our url to live in 
        const url = `https://api.themoviedb.org/3/search/movie?api_key=69cd182870360478d3f7a88179cd1206&language=en-US&query=${query}&page=1&include_adult=false`
 

   // use await to tell our function to wait for data
  
  
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data.results[0])}
            catch(err){
            console.log(err)
         
        }

    }




    render() {
        return (
            <div>
                <h1>Summary</h1>
                <form action="" className="form" onSubmit={this.searchMovies}>
                    <label className="label" htmlFor="query">Movie Name</label>
                    <input type="text" name="query" className="input"/>
                    <button className="button" type="submit">Summary</button>
                </form>
                
            </div>
        );
    }
}

export default Summary;
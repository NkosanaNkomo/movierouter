import React, { Component } from 'react';


class Titles extends Component {
    constructor(){
        super()
    }

    // function to grab user input

   searchMovies = async (event) => {
        event.preventDefault();
        console.log("submitting")

        const query = ""

    //    variable for our url to live in 
        const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=389f0299'
 

   // use await to tell our function to wait for data
  
  
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)}
            catch(err){
            console.log(err)
         
        }

    }




    render() {
        return (
            <div>
                <h1>Titles</h1>
                <form action="" className="form" onSubmit={this.searchMovies}>
                    <label className="label" htmlFor="query">Movie Name</label>
                    <input type="text" name="query" className="input"/>
                    <button className="button" type="submit">Title</button>
                </form>

                <h1>ONLY SEARCHES "GUARDIANS OF THE GALAXY". CONSOLE.LOGS DATA BUT COULDN'T FIGURE OUT HOW TO 
                    GET DATA TO POPULATE </h1>
                    <h1>Yes I know that the url is specific to the Guardians ID but could not figure out how to manipulate that to be none specific</h1>
                
            </div>
        );
    }
}

export default Titles;
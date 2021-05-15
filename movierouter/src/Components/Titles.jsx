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
            console.log(data.plot[1])}
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
                
            </div>
        );
    }
}

export default Titles;
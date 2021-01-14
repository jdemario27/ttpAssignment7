import React, { Component } from 'react';
import './SearchField.css';
class SearchField extends Component {
    
    constructor(){
        super();
        this.state={
            gifs:[]
        }
        this.gifByKeyword=this.gifByKeyword.bind(this)
      }
      gifByKeyword = async (searchTerm) => {
        console.log("In Mount")
        const url = ("https://api.giphy.com/v1/gifs/search?q=") + searchTerm + ("&api_key=d9yzq75PA0Fdy2XP84jqHK2mLIxw4H2k");
        const response = await fetch(url);
        console.log(response);
        const gifData = await response.json();
        this.setState({
            gifs: gifData.data
        });
    }
    handleSearchChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
        let searchVar = document.getElementById('search').value
        this.gifByKeyword(searchVar)
    }
       
       render(){
        console.log("In Render")
        return (
            <>
          <div className="container"> 
          {/* <br></br> */}
          <input id='search' placeholder="Search for a gif..." height="100"></input>
          <button id="searchButton" type='button' onClick={this.handleSearchChange}>Search</button>
            {
            (<div>
                {this.state.gifs.map(gvalue =>
                    <div className="gif-images">
                        <img src = {gvalue.images.original.url}/>
                    </div>
                )}
            </div>)
            }
            </div>
          </>
        ); 
      } 
    }
export default SearchField;
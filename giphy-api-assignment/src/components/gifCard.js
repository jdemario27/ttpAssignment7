import React, { Component } from 'react'


class GifCard extends Component {

    constructor(){
        super();
        this.state = {
            gifURL: []
        }
    }

    async componentDidMount(){
        const url = 'http://api.giphy.com/v1/gifs/random?api_key=d9yzq75PA0Fdy2XP84jqHK2mLIxw4H2k';
        const response = await fetch(url);
        console.log(response);
        const gifData = await response.json();
        this.setState({
            gifURL: gifData.data
        });  
        console.log(this.state.gifURL);
    }

    randomGif = async () =>{
        const url = 'http://api.giphy.com/v1/gifs/random?api_key=d9yzq75PA0Fdy2XP84jqHK2mLIxw4H2k';
        const response = await fetch(url);
        console.log(response);
        const gifData = await response.json();
        this.setState({
            gifURL: gifData.data
        });  
        console.log(this.state.gifURL);
    }

    gifByKeyword = async () => {

    }


    render(){
    return (
        <div>
            <h1>This is the gifCard Component</h1>
            <br></br>
            <button onClick={this.randomGif}>Generate a Random Gif!</button>
            <br></br><br></br>
                <div>
                    <img className='gifDisplay' src ={this.state.gifURL.image_url} alt = 'gif'/>
                </div>
            {/* This will be a map of all gifs to display */}
        </div>
    )
}
}
export default GifCard

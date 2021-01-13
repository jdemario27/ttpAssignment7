import './App.css';
import React from 'react'

class App extends React.Component{
  constructor(){
    super();
    this.state={
        gifs:[]
    }
    this.componentDidMount=this.componentDidMount.bind(this)

  }
  componentDidMount(){
    console.log("In Mount")
  
    fetch("http://api.giphy.com/v1/gifs/trending?api_key=d9yzq75PA0Fdy2XP84jqHK2mLIxw4H2k")
    .then(response => response.json())
    .then(res => {this.setState({gifs: res.data })});
    console.log(this.state.gifs)

  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.gifs)
   }
  render(){
    console.log("In Render")
    return (
      <> 
        <div className="gif-container"> 
          {this.state.gifs.map(element=>{
            console.log(element.url);

            return <div className="gif-img"><img src={element.images.original.url} alt='gif'/></div>
          })}
          </div> 
      </>
    );
  }
}

export default App;
import React from 'react'
import {connect} from 'react-redux' //connect to redux
import {receiveImage, getImage} from '../actions'


class FillB extends React.Component {
  constructor(props){
    super(props)
    this.state = {}

    this.handleClick = this.handleClick.bind(this)
  }

   handleClick(e) {
    // this.forceUpdate();
    console.log(this.props);
    
    console.log("This was clicked11");
    this.props.dispatch(getImage()) //just dispatching to action creator (getImage)
    
    
        
      }  
  render(){
    console.log(this.props)
    return (
      <div>
      <div>
        <h2> Images</h2>
        <img src={this.props.apiimages}/> 
        {/* apiimage has to be combined and exported in reducer index.js */}
        <button onClick={this.handleClick} >Refresh</button>
        </div>
        <img src=""/>
    
      </div>
    )
  }
}


function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(FillB)
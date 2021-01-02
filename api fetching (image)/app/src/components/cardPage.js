import React from 'react';
import {connect} from 'react-redux';
import {buy} from '../redux';

function Cardpage(props){

	return(
		<>

		  <h3> {props.BuyProducts} </h3>

		 
            
		</>
		)
}


 const mapToStateProps = state => {
 	return{
 		BuyProducts : state.BuyProducts

 	}
 }

const mapToDispatchProps = dispatch => {
	return{
		buy : ()=> dispatch(buy())
	}
}



export default connect(mapToStateProps, mapToDispatchProps)(Cardpage);







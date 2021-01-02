import React from 'react';
import {connect} from 'react-redux';
import {buy} from '../redux';
import './cardPage.css'
function Cardpage(props){

	return(
		<>


		 	
		 		<ul className = 'navbar-nav'>
		 			<li className= "nav-item">  <a className = "nav-link" href = "#" > Home </a> </li>
		 			<li className= "nav-item">  <a className = "nav-link" href = "#"  >Service </a> </li>
		 			<li className= "nav-item">  <a className = "nav-link" href = "#"> Products </a> </li>
		 			<li className= "nav-item">  <a className = "nav-link" href = "#"> card - {props.BuyProducts} </a> </li>
		 			<li className= "nav-item">  <a className = "nav-link" href = "#" > </a> </li>
		 		
		 		</ul>
		 	
		 

            
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







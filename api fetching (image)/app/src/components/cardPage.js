import React from 'react';
import {connect} from 'react-redux';
import {buy} from '../redux';
import './cardPage.css'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Orderpage from './orderedPage';
function Cardpage(props){

	return(
		<>


		 		<BrowserRouter>
		 		<ul className = 'navbar-nav'>
		 			<li className= "nav-item">  <a className = "nav-link" href = "#" > Home </a> </li>
		 			<li className= "nav-item">  <a className = "nav-link" href = "#"  >Service </a> </li>
		 			<li className= "nav-item">  <a className = "nav-link" href = "#"> Products </a> </li>
		 			<li className= "nav-item">  <Link  to = "/ordered" > card - {props.BuyProducts} </Link> </li>
		 			<li className= "nav-item">  <a className = "nav-link" href = "#" > </a> </li>
		 		
		 		</ul>
                  

		 			<Route exact path = "/ordered"  component = {Orderpage}/>

		 		</BrowserRouter>
		 	
		 

            
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







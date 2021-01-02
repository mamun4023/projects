import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './products.css'

import {connect} from 'react-redux';
import {buy} from '../redux';


function Product(props){

const [images, setImage] = useState([]);

useEffect(()=> {
	axios.get("https://jsonplaceholder.typicode.com/photos")
	.then(res => {
		setImage(res.data)
	})
})

	return(
		<>
            <div className = "container">
		     {images.map(image => 
		     	   
		     	   	 <div className = "card">
		     	       <img src = {image.url}  />
		     	   
		     	         <button className = "btn btn-primary" onClick = {props.buy}  > add </button>
		     	        <p> {image.title} </p>

		     	 	 </div>
		     	   


		     	 )}
		     </div>

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



export default connect(mapToStateProps, mapToDispatchProps)(Product);






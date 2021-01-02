import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './products.css'
function Product(){

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
		     	   
		     	        <h3> Product Name </h3>
		     	        <p> {image.title} </p>

		     	 	 </div>
		     	   


		     	 )}
		     </div>

		</>
		)
}


export default Product;
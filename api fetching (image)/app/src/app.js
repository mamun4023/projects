import React from 'react';
import Product from './components/products';
import Cardpage from './components/cardPage';
import Home from './components/home'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './app.css'
function App(){


	return(
		<>

			<Router>


			  <ul >
			  	 <li> <Link to = "/"> Home </Link> </li>
                 <li> <Link to = "/products"> Products </Link> </li>
                 <li> <Link to = "/card"> Card </Link> </li>
                 
			  </ul>
	


			  <Route exact path = "/" component = {Home} />
			  <Route path = "/products" component = {Product} />
			  <Route path = "/card" component = {Cardpage} />







			</Router>


			

            

		</>
		)
}


export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home'; // Make sure this path is correct
import About from './components/About'; // Make sure this path is correct
import Contact from './components/Contact'; // Make sure this path is correct
import './index.css'; // Import your CSS (if you have one)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
	<Router>
	  <Routes>
		<Route path="/" element={<App />}> {/* App is the layout component */}
		  <Route index element={<Home />} /> {/* Home is the index route for / */}
		  <Route path="about" element={<About />} />
		  <Route path="contact" element={<Contact />} />
		  {/* Add more nested routes here as needed */}
		</Route>
	  </Routes>
	</Router>
  </React.StrictMode>
);
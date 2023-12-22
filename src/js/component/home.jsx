import React from "react";
import Light from "./Light";
import { useState } from "react";
import '/workspaces/traffic-light-TMJ/src/styles/home.css'
 
const Home = () => {
  
  const [colorActual, setColorActual] = useState("")

	return (
		<div className="home">
      <div className="gancho"></div>
        <div className="container">
          <Light
            onClick ={ () => setColorActual("red")} 
            color = "red"
            brillo = {colorActual == "red"} />
          <Light
            onClick = { () => setColorActual("yellow")}
            color = "yellow"
            brillo = {colorActual == "yellow"} />
          <Light
            onClick={ () => setColorActual("green") }
            color= "green"
            brillo={colorActual == "green"} />
        </div>
		</div>
	);
};

export default Home;

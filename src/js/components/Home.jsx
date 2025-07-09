import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Portada } from "./Portada";
import { Cartas } from "./Cartas";
import { Footer } from "./Footer";


//create your first component
const Home = () => {
	return (
		<div calssName="container">
			<div>
				<Navbar/>
				<br></br>
				<Portada/>
			</div>

			<div className="row">
				<Cartas
					imagen="https://content.warframe.com/PublicExport/Lotus/Interface/Icons/StoreIcons/Warframes/Excalibur.png!00_rogoG1Uk9x46s7X-HwTx1A"
					nombre="Excalibur"
					descripcion="Excalibur conocido por su maestría con la espada y su capacidad para canalizar energía en su arma"
					info="https://www.warframe.com/es/game/warframes/excalibur"
				/>

				<Cartas
					imagen="https://content.warframe.com/PublicExport/Lotus/Interface/Icons/StoreIcons/Warframes/Mag.png!00_FHYuEBaKGBmvlcXoL3q0Rg"
					nombre="Mag"
					descripcion="Mag utiliza el poder del magnetismo para controlar a sus enemigos y manipular el campo de batalla."
					info ="https://www.warframe.com/es/game/warframes/mag"
				
				/>

				<Cartas
				imagen="https://content.warframe.com/PublicExport/Lotus/Interface/Icons/StoreIcons/Warframes/Volt.png!00_NFbM6393XHXjHpCIDm0Qyw"
				nombre="Volt"
				descripcion="Volt es conocido por su dominio de la electricidad y su versatilidad en combate."
				info="https://www.warframe.com/es/game/warframes/volt"

				/>
			</div>

			<Footer/>
		</div>
	);
};

export default Home;
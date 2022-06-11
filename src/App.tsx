import React, { useState } from "react";
import Grid from "./components/Grid";
import Karen from "./img/Karen.webp";
import Gary from "./img/Gary.webp";
import Krabs from "./img/Krabs.webp";
import MrsPuff from "./img/Mrs_Puff.webp";
import Patrick from "./img/Patrick.webp";
import PearlKrabs from "./img/Pearl_Krabs.webp";
import Plankton from "./img/Plankton.webp";
import Sandy from "./img/Sandy.webp";
import SpongeBob from "./img/SpongeBob.webp";
import Squidward from "./img/Squidward.webp";

function App() {
	const [itemList, setItemList] = useState([
		Karen,
		Gary,
		Krabs,
		MrsPuff,
		Patrick,
		PearlKrabs,
		Plankton,
		Sandy,
		SpongeBob,
		Squidward,
	]);

	return (
		<div>
			<Grid itemList={itemList} />
		</div>
	);
}

export default App;

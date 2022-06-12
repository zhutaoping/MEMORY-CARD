import { useState, useEffect, MouseEvent } from "react";
import styles from "./App.module.css";
import Grid from "./components/Grid";
import Modal from "./components/Modal";
import Button from "./components/Button";
// import classes from "./components/Button";

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
	// let counter = 0;

	const itemList = [
		{ src: Karen, id: 0 },
		{ src: Gary, id: 1 },
		{ src: Krabs, id: 2 },
		{ src: MrsPuff, id: 3 },
		{ src: Patrick, id: 4 },
		{ src: PearlKrabs, id: 5 },
		{ src: Plankton, id: 6 },
		{ src: Sandy, id: 7 },
		{ src: SpongeBob, id: 8 },
		{ src: Squidward, id: 9 },
	];
	const [checkArr, setCheckArr] = useState<number[]>([]);
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [randomArr, setRandomArr] = useState<number[]>([]);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		getRandomArr();
	}, []);

	function getRandomArr(): number[] {
		const nums = new Set<number>();

		while (nums.size !== 10) {
			nums.add(Math.floor(Math.random() * 10));
		}
		const tempArr = Array.from(nums);
		setRandomArr(tempArr);
		return tempArr;
	}

	const handleClick = (e: MouseEvent<HTMLElement>) => {
		const id = Number(e.currentTarget.getAttribute("data-id"));
		if (checkArr.includes(id)) {
			console.log("game over");
			console.log("final score", score);
			if (score > bestScore) setBestScore(score);
			// handleReset();
			setShowModal(true);
		} else {
			setCheckArr((prevState) => [...prevState, id]);
			setScore((prevState) => prevState + 1);
			console.log("score", score);
		}
		getRandomArr();
	};

	const handleReset = () => {
		setCheckArr([]);
		getRandomArr();
		setScore(0);
	};

	const handleConfirm = (): void => {
		setShowModal(false);
		handleReset();
	};

	return (
		<div>
			{showModal && <Modal onConfirm={handleConfirm} score={score} />}
			<div className={styles.header}>
				<h1 className={styles.title}>點選一張圖得一分，重複點選即判出局</h1>
				<h1 className={styles.bestScore}>
					最佳成績：{bestScore === 10 ? `滿分 ${bestScore}` : bestScore} 分
				</h1>
				<Button type="button" onClick={handleReset}>
					重玩
				</Button>
			</div>
			<Grid itemList={itemList} randomArr={randomArr} onClick={handleClick} />
		</div>
	);
}

export default App;

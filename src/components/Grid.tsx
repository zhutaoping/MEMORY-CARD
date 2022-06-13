import { FC, MouseEvent, useState } from "react";
import styles from "./Grid.module.css";
import Spinner from "./Spinner";

interface Props {
	itemList: { src: string; id: number }[];
	onClick: (e: MouseEvent<HTMLElement>) => void;
	randomArr: number[];
}

const Grid: FC<Props> = ({ itemList, onClick, randomArr }) => {
	const [showSpinner, setShowSpinner] = useState(true);

	return (
		<div className={styles.grid}>
			{randomArr.map((num) => (
				<div className={styles.item} key={num}>
					{showSpinner && <Spinner />}
					<img
						style={showSpinner ? { display: "none" } : {}}
						src={itemList[num].src}
						alt="random pic"
						data-id={itemList[num].id}
						onClick={onClick}
						onLoad={() => setShowSpinner(false)}
					/>
				</div>
			))}
		</div>
	);
};

export default Grid;

import { FC, MouseEvent } from "react";
import styles from "./Grid.module.css";

interface Props {
	itemList: { src: string; id: number }[];
	onClick: (e: MouseEvent<HTMLElement>) => void;
	randomArr: number[];
}

const Grid: FC<Props> = ({ itemList, onClick, randomArr }) => {
	return (
		<div className={styles.grid}>
			{randomArr.map((num) => (
				<div className={styles.item} key={num}>
					<img
						src={itemList[num].src}
						alt="random pic"
						data-id={itemList[num].id}
						onClick={onClick}
					/>
				</div>
			))}
		</div>
	);
};

export default Grid;

import { FC } from "react";
import styles from "./Grid.module.css";

interface Props {
	itemList: string[];
}

const Grid: FC<Props> = ({ itemList }) => {
	const nums = new Set<number>();

	while (nums.size !== 10) {
		nums.add(Math.floor(Math.random() * 10));
	}

	const numArr = Array.from(nums);

	return (
		<div className={styles.grid}>
			{numArr.map((num) => (
				<div className={styles.item} key={num}>
					<img src={itemList[num]} alt="random pic" />
				</div>
			))}
		</div>
	);
};

export default Grid;

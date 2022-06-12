import Card from "./Card";
import Button from "./Button";
import styles from "./Modal.module.css";

type Props = {
	onClick?: React.MouseEventHandler;
	onConfirm: React.MouseEventHandler;
	score: number;
};

const Modal = ({ onConfirm, score }: Props) => {
	return (
		<>
			<div className={styles.backdrop} onClick={onConfirm}></div>
			<Card className={styles.modal}>
				<header className={styles.header}>
					<h2>Game Over</h2>
				</header>
				<div className={styles.content}>
					<p>本局得{score}分</p>
				</div>
				<div className={styles.action}>
					<Button onClick={onConfirm}>Okay</Button>
				</div>
			</Card>
		</>
	);
};

export default Modal;

import Card from "./Card"
import Button from "./Button"

interface Props extends React.BaseHTMLAttributes<HTMLDivElement> {
	title: string
	message: string
	confirmFn: () => void
}

const ErrorModal = ({ title, message, confirmFn }: Props) => {
	return (
		<Card>
			<header>{title}</header>
			<section>{message}</section>
			<footer>
				<Button onClick={confirmFn}>Close</Button>
			</footer>
		</Card>
	)
}

export default ErrorModal

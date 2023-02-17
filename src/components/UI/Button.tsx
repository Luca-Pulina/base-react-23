import { ReactNode } from "react"

interface Props {
	type?: "button" | "submit" | "reset" | undefined
	textContent?: string
	children?: ReactNode
	onClick: (params: any) => void
}

const Button = ({ type, textContent, onClick, children }: Props) => {
	return (
		<button
			className='rounded-xl bg-purple-500 py-2 px-4 text-white'
			type={type ?? "button"}
			onClick={onClick}
		>
			{textContent ?? children}
		</button>
	)
}

export default Button

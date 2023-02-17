import Card from "../UI/Card"
import Button from "../UI/Button"
import { ChangeEvent, useState } from "react"
import { User } from "./User"
import ErrorModal from "../UI/ErrorModal"

interface Props extends React.BaseHTMLAttributes<HTMLDivElement> {
	onAddUser: (user: User) => boolean
}

const AddUser = ({ onAddUser, className }: Props) => {
	const [userName, setUserName] = useState("")
	const [age, setAge] = useState(0)
	const [error, setError] = useState(false)

	const addUserHandler = (event: React.FormEvent) => {
		event.preventDefault()
		// FE Validation
		if (!userName.trim().length || age <= 0) {
			setError(true)
			return
		}

		setError(onAddUser({ userName, age }))
		//Reset Form
		setUserName("")
		setAge(0)
	}

	const userNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setUserName(event.target.value.trim())
	}
	const ageChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setAge(Number(event.target.value))
	}

	return (
		<>
			{error && (
				<div className='flex justify-center items-center w-screen h-screen z-10 fixed top-0 left-0 backdrop-blur-sm bg-white/30'>
					<ErrorModal
						title='Duplicate User'
						message='There is another User with the same UserName'
						className=''
						confirmFn={() => setError(false)}
					/>
				</div>
			)}

			<Card className={className}>
				<form onSubmit={addUserHandler} className='flex gap-2 items-center'>
					<label htmlFor='username'>Username</label>
					<input
						className=' border-b-2 border-purple-400  bg-gray-700'
						type='text'
						id='username'
						value={userName}
						onChange={userNameChangeHandler}
					/>
					<label htmlFor='age'>Age (Years)</label>
					<input
						className=' border-b-2 border-purple-400 bg-gray-700'
						type='number'
						id='age'
						value={age}
						onChange={ageChangeHandler}
					/>

					<Button type='submit' onClick={addUserHandler}>
						Add User
					</Button>
				</form>
			</Card>
		</>
	)
}

export default AddUser

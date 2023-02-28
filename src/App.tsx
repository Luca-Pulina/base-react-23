import { useState } from "react"

// Components
import AddUser from "./components/Users/AddUser"
import UserList from "./components/Users/UserList"
// Types
import { User } from "./components/Users/User"

function App() {
	const [userList, setUserList] = useState<User[]>([
		{ userName: "Luca", age: 32 },
		{ userName: "Mario", age: 33 },
		{ userName: "Gigi", age: 34 },
		{ userName: "Manuel", age: 35 },
		{ userName: "Sandro", age: 36 },
	])

	const addUserHandler = (user: User) => {
		const errorDuplicate = userList.find((userInList) => userInList.userName === user.userName)
		!errorDuplicate && setUserList((prevUserList) => [...prevUserList, user])
		return !!errorDuplicate
	}
	return (
		<div className='w-screen h-screen bg-gray-900'>
			<div className='flex w-full h-[30%] justify-center items-center'>
				<AddUser
					onAddUser={addUserHandler}
					className='flex justify-center items-center w-[60%] h-[33%]'
				/>
			</div>
			<div className='flex w-full h-[30%] justify-center items-center'>
				<UserList users={userList} className='w-[60%] h-[33%]' />
			</div>
		</div>
	)
}

export default App

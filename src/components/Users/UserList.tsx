import React from "react"
import Card from "../UI/Card"
import { User } from "./User"

interface Props extends React.BaseHTMLAttributes<HTMLDivElement> {
	users: User[]
}

const UserList = ({ users, className }: Props) => {
	return (
		<Card className={className}>
			<ul>
				{users.map((user) => (
					<li key={user.userName}>{`${user.userName} ( ${user.age} years old)`}</li>
				))}
			</ul>
		</Card>
	)
}

export default UserList

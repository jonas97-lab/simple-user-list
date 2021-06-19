import React from 'react'
import './App.css'
import AddUser from './components/AddUser'
import UserList from './components/UserList'
import { AppContext } from './context'

const userList = [
	{
		id: 1,
		name: 'John',
		age: 26,
		bio: 'Fulltime software engineer at Faith Tower',
	},
]

function App() {
	const [users, setUsers] = React.useState(userList)

	const dispatchUserEvent = (actionType, payload) => {
		switch (actionType) {
			case 'ADD_USER':
				setUsers([...users, payload.newUser])
				return
			case 'REMOVE_USER':
				setUsers(users.filter((object) => object.id !== payload.userId))
				return
			default:
				return
		}
	}

	return (
		<div className='App'>
			<AppContext.Provider value={{ users, dispatchUserEvent }}>
				<AddUser />
				<UserList />
			</AppContext.Provider>
		</div>
	)
}

export default App

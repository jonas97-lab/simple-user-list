import React, { useContext } from 'react'
import { AppContext } from '../context'

function User({ user }) {
	const { dispatchUserEvent } = useContext(AppContext)

	const handleRemoveUser = () => {
		dispatchUserEvent('REMOVE_USER', { userId: user.id })
	}

	return (
		<div>
			<h3>{user.name}</h3>
			<h4>{user.age}</h4>
			<div>
				<small>{user.bio}</small>
			</div>
			<button onClick={handleRemoveUser}>Delete User</button>
		</div>
	)
}

export default User

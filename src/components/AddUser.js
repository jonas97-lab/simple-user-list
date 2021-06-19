import React, { useState, useContext } from 'react'
import { AppContext } from '../context'

function AddUser() {
	const [name, setName] = useState('')
	const [age, setAge] = useState('')
	const [bio, setBio] = useState('')

	const { dispatchUserEvent } = useContext(AppContext)

	const handleAddUser = () => {
		const user = { id: Math.random(), name, age, bio }
		dispatchUserEvent('ADD_USER', { newUser: user })
	}

	return (
		<div>
			<h3>Add New User</h3>
			<input
				value={name}
				onChange={(e) => setName(e.target.value)}
				type='text'
				placeholder='name'
			/>
			<br />
			<input
				value={age}
				onChange={(e) => setAge(e.target.value)}
				type='text'
				placeholder='age'
			/>
			<br />
			<textarea
				value={bio}
				onChange={(e) => setBio(e.target.value)}
				placeholder='bio'
			></textarea>
			<br />
			<button onClick={handleAddUser}>Add User</button>
		</div>
	)
}

export default AddUser

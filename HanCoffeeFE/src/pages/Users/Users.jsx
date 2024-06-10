import React, { useState, useEffect } from 'react'
import axiosInstance from '../../common/library/query'
import './Users.css'
import { toast } from 'react-toastify'

const Users = () => {
    const [users, setUsers] = useState([])
    const [roles, setRoles] = useState([]) // Fetch roles dynamically

    useEffect(() => {
        fetchUsers()
        fetchRoles() // Fetch roles on component mount
    }, [])

    const fetchUsers = async () => {
        try {
            const response = await axiosInstance.get('/api/user/')
            if (response.data.success) {
                // Sort users to put admins (role 0) first
                const sortedUsers = response.data.data.sort(
                    (a, b) => a.role - b.role
                )
                setUsers(sortedUsers)
            } else {
                toast.error('Error fetching customers')
            }
        } catch (error) {
            console.error('Error fetching customers:', error)
            toast.error('Failed to fetch customers')
        }
    }

    const fetchRoles = async () => {
        // Assuming you have an endpoint to fetch roles
        // const response = await axiosInstance.get('/api/roles/')
        // if (response.data.success) {
        //     setRoles(response.data.data)
        // } else {
        //     toast.error('Error fetching roles')
        // }
        // Mock roles for now
        setRoles([
            { value: 0, label: 'Admin' },
            { value: 1, label: 'Manager' },
            { value: 2, label: 'User' },
        ])
    }

    const handleRoleChange = async (userId, newRole) => {
        try {
            const response = await axiosInstance.put(`/api/user/${userId}`, {
                role: parseInt(newRole),
            })
            if (response.data.success) {
                toast.success('Role updated successfully')
                fetchUsers()
            } else {
                toast.error('Error updating role')
            }
        } catch (error) {
            console.error('Error updating role:', error)
            toast.error('Failed to update role')
        }
    }

    return (
        <div className="customers-container">
            <h1>Users Management</h1>
            <div className="customers-table">
                <div className="customers-table-header">
                    <div>Username</div>
                    <div>Phone</div>
                    <div>Account Created</div>
                    <div>Image</div>
                    <div>Role</div>
                    <div>Update</div>
                </div>
                {users.map((user) => (
                    <div key={user._id} className="customers-table-row">
                        <div>{user.email}</div>
                        <div>{user.phone}</div>
                        <div>
                            {new Date(user.createdAt).toLocaleDateString()}
                        </div>
                        <div>
                            <img
                                className="customer-img"
                                src={user.image}
                                alt={user.username}
                            />
                        </div>
                        <div>
                            <select
                                value={user.role}
                                onChange={(e) =>
                                    handleRoleChange(user._id, e.target.value)
                                }
                            >
                                {roles.map((role) => (
                                    <option key={role.value} value={role.value}>
                                        {role.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <button
                                onClick={() =>
                                    handleRoleChange(user._id, user.role)
                                }
                            >
                                Update
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users

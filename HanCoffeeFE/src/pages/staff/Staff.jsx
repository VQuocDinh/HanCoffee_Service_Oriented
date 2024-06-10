import React, { useState, useEffect } from 'react'
import axiosInstance from '../../common/library/query'
import { toast } from 'react-toastify'
import './Staff.css'

const Staff = () => {
    const [staffList, setStaffList] = useState([])
    const [roles] = useState(['Admin', 'User', 'Manager']) // Example roles
    const [data, setData] = useState({
        address: '',
        name: '',
        phone: '',
        email: '',
        role: 1, // Default role
        image: '',
    })

    useEffect(() => {
        fetchStaffList()
    }, [])

    const fetchStaffList = async () => {
        try {
            const response = await axiosInstance.get('/api/staff/')
            if (response.data.success) {
                setStaffList(response.data.data)
            } else {
                toast.error('Error fetching staff list')
            }
        } catch (error) {
            console.error('Error fetching staff list:', error)
            toast.error('Failed to fetch staff list')
        }
    }

    const handleRoleChange = (e, index) => {
        const newStaffList = [...staffList]
        newStaffList[index].role = e.target.value
        setStaffList(newStaffList)
    }

    const updateRole = async (staffId, newRole) => {
        try {
            const response = await axiosInstance.patch(
                `/api/staff/${staffId}`,
                {
                    role: newRole,
                }
            )
            if (response.data.success) {
                toast.success('Role updated successfully')
                fetchStaffList()
            } else {
                toast.error('Error updating role')
            }
        } catch (error) {
            console.error('Error updating role:', error)
            toast.error('Failed to update role')
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const addNewStaff = async () => {
        try {
            const response = await axiosInstance.post('/api/staff', data)
            if (response.data.success) {
                toast.success('Staff added successfully')
                fetchStaffList()
                setData({
                    address: '',
                    name: '',
                    phone: '',
                    email: '',
                    role: 1,
                    image: '',
                })
            } else {
                toast.error('Error adding staff')
            }
        } catch (error) {
            console.error('Error adding staff:', error)
            toast.error('Failed to add staff')
        }
    }

    return (
        <div className="staff-container">
            <h1>Staff Management</h1>

            <div className="staff-table">
                <div className="staff-table-header">
                    <div>Username</div>
                    <div>Phone</div>
                    <div>Account Created</div>
                    <div>Image</div>
                    <div>Role</div>
                    <div>Update</div>
                </div>
                {staffList.map((staff, index) => (
                    <div key={staff._id} className="staff-table-row">
                        <div>{staff.name}</div>
                        <div>{staff.phone}</div>
                        <div>
                            {new Date(staff.createdAt).toLocaleDateString()}
                        </div>
                        <div>
                            <img
                                className="staff-img"
                                src={staff.image}
                                alt={staff.username}
                            />
                        </div>
                        <div>
                            <select
                                value={staff.role}
                                onChange={(e) => handleRoleChange(e, index)}
                            >
                                {roles.map((role, roleIndex) => (
                                    <option
                                        key={roleIndex}
                                        value={roleIndex + 1}
                                    >
                                        {role}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <button
                                onClick={() =>
                                    updateRole(staff._id, staff.role)
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

export default Staff

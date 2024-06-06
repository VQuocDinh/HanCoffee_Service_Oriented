// AddCategory.jsx
import React, { useState } from 'react';
import axiosInstance from '../../../common/library/query';
import './AddCategory.css';
import { toast } from 'react-toastify';
import { assets } from '../../../assets/assets';

const AddCategory = () => {
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        name: '',
        status: '1',
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        let value = event.target.value;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('image', image);
        formData.append('status', Number(data.status));

        try {
            const response = await axiosInstance.post(`/api/category/add`, formData);
            if (response.data.success) {
                setData({
                    name: '',
                    status: '1',
                });
                setImage(null);
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error adding category:', error);
            toast.error('Failed to add category');
        }
    };
    return (
        <div className="add-category">
                       <form className="flex-col" onSubmit={onSubmitHandler}>
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img
                            src={image ? URL.createObjectURL(image) : assets.upload_area }
                            alt=""
                        />
                    </label>
                    <input
                        onChange={(e) => setImage(e.target.files[0])}
                        type="file"
                        id="image"
                        hidden
                        required
                    />
                </div>
                <div className="add-product-name flex-col">
                    <p>Category Name</p>
                    <input
                        onChange={onChangeHandler}
                        value={data.name}
                        type="text"
                        name="name"
                        placeholder="Type here"
                        required
                    />
                </div>

                <button type="submit" className='add-btn'>ADD</button>
            </form>
        </div>
    );
};

export default AddCategory;

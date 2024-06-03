import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../../assets/assets'
import { toast } from 'react-toastify';
import axiosInstance from '../../../common/library/query'

const Add = () => {
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        name: '',
        description: '',
        category: 'Sinh tố',
        price: '',
        status: '1',
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        let value = event.target.value;

        if (name === 'price' && value < 0) {
            toast.error('Price cannot be negative');
            value = '';
        }

        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if (!image) {
            toast.error('Please upload an image');
            return;
        }

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('price', Number(data.price));
        formData.append('status', Number(data.status));
        formData.append('image', image);

        try {
            const response = await axiosInstance.post(`/api/product/add`, formData);
            if (response.data.success) {
                setData({
                    name: '',
                    description: '',
                    category: 'Sinh tố',
                    price: '',
                    status: '1',
                });
                setImage(null);
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error adding product:', error);
            toast.error('Failed to add product');
        }
    };

    return (
        <div className="add">
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
                    <p>Product Name</p>
                    <input
                        onChange={onChangeHandler}
                        value={data.name}
                        type="text"
                        name="name"
                        placeholder="Type here"
                        required
                    />
                </div>
                <div className="add-product-description flex-col">
                    <p>Product Description</p>
                    <textarea
                        onChange={onChangeHandler}
                        value={data.description}
                        name="description"
                        rows="6"
                        placeholder="Write content here"
                        required
                    ></textarea>
                </div>

                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product category</p>
                        <select
                            onChange={onChangeHandler}
                            value={data.category}
                            name="category"
                            required
                        >
                            <option value="Sinh tố">Sinh tố</option>
                            <option value="Cà phê">Cà phê</option>
                            <option value="Trà sữa">Trà sữa</option>
                            <option value="Nước ép hoa quả">Nước ép hoa quả</option>
                            <option value="Soda">Soda</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product price</p>
                        <input
                            onChange={onChangeHandler}
                            value={data.price}
                            type="number"
                            name="price"
                            placeholder="20$"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="add-btn">
                    ADD
                </button>
            </form>
        </div>
    );
};

export default Add;

import React, { useState, useEffect } from 'react';
import './List.css';
import { toast } from 'react-toastify';
import { assets } from '../../../assets/assets';
import axiosInstance from '../../../common/library/query';
import { BASE_URL } from '../../../config';
import { useNavigate } from 'react-router-dom';
import { PATH_DASHBOARD } from '../../../common/routes/path';

const List = () => {
    const [list, setList] = useState([]);
    const navigate = useNavigate();

    const fetchList = async () => {
        const response = await axiosInstance.get(`/api/product/list`);
        if (response.data.success) {
            setList(response.data.data);
        } else {
            toast.error('Error fetching product list');
        }
    };

    const removeProduct = async (productId) => {
        const response = await axiosInstance.post(`/api/product/remove`, {
            id: productId,
        });
        await fetchList();
        if (response.data.success) {
            toast.success(response.data.message);
        } else {
            toast.error('Error removing product');
        }
    };

    useEffect(() => {
        fetchList();
    }, []);

    const handleNavigate = () => {
        navigate(PATH_DASHBOARD.general.product.add);
    };

    const handleEditProduct = (productId) => {
        navigate(`${PATH_DASHBOARD.general.product.edit}/${productId}`);
    };

    return (
        <div className="center">
            <div className="list-container">
                <h1>Products Management</h1>
                <div className="handle-button-end">
                    <button className="btn-add" onClick={handleNavigate}>
                        Add Product
                    </button>
                </div>
                <div className="list-table">
                    <div className="list-table-format title">
                        <b>Name</b>
                        <b>Image</b>
                        <b>Category</b>
                        <b>Price</b>
                        <b>Description</b>
                        <b>Edit</b>
                        <b>Delete</b>
                    </div>
                    {list.map((item, index) => (
                        <div key={index} className="list-table-format">
                            <p>{item.name}</p>
                            <img
                                className="product-img"
                                src={`${BASE_URL}/images/${item.image}`}
                                alt={item.name}
                            />
                            <p>{item.category}</p>
                            <p>${item.price}</p>
                            <p>{item.description}</p>
                            <div
                                className="action-icon"
                                onClick={() => handleEditProduct(item._id)}
                            >
                                <img src={assets.edit_icon} alt="Edit" />
                            </div>
                            <div
                                className="action-icon"
                                onClick={() => removeProduct(item._id)}
                            >
                                <img src={assets.delete_icon} alt="Delete" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default List;

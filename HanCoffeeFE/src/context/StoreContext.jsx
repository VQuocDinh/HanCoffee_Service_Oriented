import { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const url = "http://localhost:8888"
    const [product_list, setProductList] = useState([])
    const [category_list, setCategoryList] = useState([])
    const [cartItems, setCartItems] = useState({})

    const fetchProductList = async () => {
        try {
            const productResponse = await axios.get(`${url}/api/product/list`)
            setProductList(productResponse.data.data)
        } catch (error) {
            console.error('Error fetching product list: ', error)
        }


    }

    const fetchCategoryList = async () => {
        try {
            const categoryResponse = await axios.get(`${url}/api/category/list`)
            setCategoryList(categoryResponse.data.data)
        } catch (error) {
            console.error('Error fetching category list: ', error)
        }

    }

    const loadCartData = async () => {
        try {
            const cartResponse = await axios.post(`${url}/api/cart/get`, { userId: '6666bb2a4f6f4d27a5b0d600' })
            setCartItems(cartResponse.data.cartData)
            // console.log('cartData', cartResponse.data.cartData)
        } catch (error) {
            console.error('Error loading cart data: ', error)
        }
    };

    const addToCart = async (itemId) => {
        try {
            const addResponse = await axios.post(`${url}/api/cart/add`, { itemId, userId: '6666bb2a4f6f4d27a5b0d600' });
            if (addResponse.data.success) {
                setCartItems((prevCartItems) => ({
                    ...prevCartItems,
                    [itemId]: (prevCartItems[itemId] || 0) + 1
                }));
                return true;
            }
            
        } catch (error) {
            console.error('Error adding to cart: ', error);
            return false;
        }
    };

    const removeFromCart = async (itemId) => {
        try {
            const response = await axios.post(`${url}/api/cart/remove`, { itemId, userId: '6666bb2a4f6f4d27a5b0d600' });
            
            if (response.data.success) {
                setCartItems((prevCartItems) => {
                    const updatedCartItems = { ...prevCartItems };
                    if (updatedCartItems[itemId] > 1) {
                        updatedCartItems[itemId] -= 1;
                    } else {
                        delete updatedCartItems[itemId];
                    }
                    return updatedCartItems;
                });
                return true;
            }
        } catch (error) {
            console.error('Error removing from cart: ', error);
            return false;
        }
    };
    

    useEffect(() => {
        const loadData = async () => {
            await fetchProductList();
            await fetchCategoryList();
            await loadCartData();
        };
        loadData();
    }, [])

    const contexValue = {
        product_list,
        category_list,
        addToCart,
        removeFromCart,
        cartItems
    }
    return (
        <StoreContext.Provider value={contexValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider
import axios from "axios";

export const getCartsApi = async () => {
    const response = await axios.get("http://localhost:3000/addToCart", { withCredentials: true });
    return response;
};

export const createCartsApi = async (productId: string) => {
    const prodId = {
        productId: productId
    }
    const response = await axios.post("http://localhost:3000/addToCart", prodId, { withCredentials: true });
    return response;
};

export const updateCartByIdApi = async (productId: string, count: number) => {
    const editObj = {
        count: count
    }
    const response = await axios.patch(`http://localhost:3000/addToCart/${productId}`, editObj, { withCredentials: true });
    return response;
};

export const getCartByIdApi = async (id: string) => {
    const response = await axios.get(`http://localhost:3000/addToCart/${id}`);
    return response;
};

export const removeCartByIdApi = async (id: string) => {
    const response = await axios.delete(`http://localhost:3000/addToCart/${id}`, { withCredentials: true });
    return response;
};

export const getExchangeRateApi = async (currency: string) => {
    const response = await axios.get(`https://v6.exchangerate-api.com/v6/eba8e8e861a51fe3b02471f7/latest/${currency}`);
    return response;
};
import axios from "axios";

export const getProductsApi = async () => {
    const response = await axios.get("http://localhost:3000/products");
    return response;
};

export const getProductByIdApi = async (id: string) => {
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    return response;
};


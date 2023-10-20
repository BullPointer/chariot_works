import axios from "axios";

export const getProductsApi = async () => {
    const response = await axios.get("http://localhost:3000/products");
    return response;
};

export const getProductsByBrandApi = async (value: string) => {
    const response = await axios.get(`http://localhost:3000/products/brands?brand=${value}`);
    return response;
};

export const getProductsByCategoryApi = async (value: string) => {
    const response = await axios.get(`http://localhost:3000/products/categories?category=${value}`);
    return response;
};

export const getProductsByFeatureApi = async (value: string) => {
    const response = await axios.get(`http://localhost:3000/products/features?feature=${value}`);
    return response;
};

export const getProductByIdApi = async (id: string) => {
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    return response;
};

export const getCategoryCardApi = async () => {
    const response = await axios.get("http://localhost:3000/card-display");
    return response;
};

export const getCategoryCardByIdApi = async (id: string) => {
    const response = await axios.get(`http://localhost:3000/card-display/${id}`);
    return response;
};

export const getAdvertisementsApi = async () => {
    const response = await axios.get("http://localhost:3000/advertisements");
    return response;
};

export const getAdvertisementsByIdApi = async (id: string) => {
    const response = await axios.get(`http://localhost:3000/advertisements/${id}`);
    return response;
};
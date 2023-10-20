import axios from "axios";

export const advertisementsApi = async () => {
    const response = await axios.get("http://localhost:3000/advertisements/");
    return response;
};

export const getBrands = async () => {
    const response = await axios.get("http://localhost:3000/brands");
    return response;
};

export const getBrandById = async (id: string) => {
    const response = await axios.get(`http://localhost:3000/brands/${id}`);
    return response;
};

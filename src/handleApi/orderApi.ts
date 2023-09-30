/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { AddressTypes } from "../components/shop/checkout/Address";
import { getCartsApi } from "./cartApi";

const storedData = localStorage.getItem("token");
const useToken = () => {
    if (storedData) {
        const token = JSON.parse(storedData).data;
        return token;
    }
    return "";
};

export const getOrders = async () => {
    const response = await axios.get("http://localhost:3000/orders/");
    return response;
};

export const getOrdersById = async (id: string) => {
    const response = await axios.get(
        `http://localhost:3000/orders/${id}`
    );
    return response;
};

export const completeShippingOrders = async (value: string, type: string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${useToken()}`
        },
        withCredentials: true
    }

    const reqObj = { value: value }

    const response = await axios.patch(`http://localhost:3000/orders?type=${type}`, reqObj, config,);
    return response;
}

export const getOrderById = async () => {
    const config = {
        headers: {
            Authorization: `Bearer ${useToken()}`
        },
        withCredentials: true
    }

    const response = await axios.get(`http://localhost:3000/orders/get`, config);
    return response;
}

export const createShippingAddressOrders = async (addressInfos: AddressTypes) => {
    let addressData;
    const { companyName, ...rest } = addressInfos;
    if (companyName === "") {
        addressData = rest;
    } else {
        addressData = addressInfos;
    }

    try {
        if (useToken()) {

            const { data } = await getCartsApi();
            const productArr = data.products;

            const newProductArr = [];
            for (let index = 0; index < productArr.length; index++) {
                const productObj = {
                    productId: productArr[index].productId,
                    quantity: productArr[index].count,
                };
                newProductArr.push(productObj);
            }
            // console.log(useToken());

            const config = {
                headers: {
                    Authorization: `Bearer ${useToken()}`
                },
                withCredentials: true
            }

            const reqObj = {
                productsArr: newProductArr,
                receiver: addressData
            }

            // const response = await axios.patch(`http://localhost:3000/orders?type=setDeliveryType`, reqObj, config,);
            const response = await axios.post("http://localhost:3000/orders/", reqObj, config,);

            return response;
        }
    } catch (error) {
        return (error);
    }
} 
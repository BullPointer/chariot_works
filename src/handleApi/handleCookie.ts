import axios from "axios";

export const getAddToCartUUID = () => {
    const cookies = document.cookie.split(";");
    const key = "userID";

    for (let index = 0; index < cookies.length; index++) {

        if (cookies[index].trim().startsWith(key + "=")) {
            return cookies[index].trim().substring(key.length + 1);
        }
    }
    return null;
}

export const setAddToCartUUID = async () => {

    const response = await axios.get("http://localhost:3000/get-cookie/", { withCredentials: true });
    console.log(response);

    return response;

    // const expires = new Date();
    // expires.setTime(expires.getTime() + 60 * 24 * 60 * 60 * 1000);
    // document.cookie = `crt_uuid=${crt_uuid};expires=${expires.toUTCString()};path=/`;

}

export const getRequestedCookie = (key: string) => {
    const cookies = document.cookie.split(";");

    for (let index = 0; index < cookies.length; index++) {

        if (cookies[index].trim().startsWith(key + "=")) {
            return cookies[index].trim().substring(key.length + 1);
        }
    }
    return null;
}


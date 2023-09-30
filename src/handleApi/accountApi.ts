import axios from "axios";

type dataProps = {
    fullname?: string,
    email: string,
    password: string,
};

export const signupApi = (cred: dataProps) => {
    // const link = "https://osicrypto-backend.onrender.com/users/signup";
    const link = "http://localhost:3000/users/signup";
    const data = {
        username: cred.fullname,
        email: cred.email,
        password: cred.password,
    };

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = axios.post(link, data, config);
    return response;
};

export const signinApi = (cred: dataProps) => {
    // const link = "https://osicrypto-backend.onrender.com/users/login";
    const link = "http://localhost:3000/users/login";

    const data = {
        email: cred.email,
        password: cred.password,
    };

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = axios.post(link, data, config);
    return response;
};
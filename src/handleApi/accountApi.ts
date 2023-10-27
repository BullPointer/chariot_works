import axios from "axios";
import { ContactType } from "../components/ContactForm";

type dataProps = {
    fullname?: string,
    email: string,
    password: string,
};

export const signupApi = (cred: dataProps) => {

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

export const forgotPasswordApi = async (email: string) => {

    const link = "http://localhost:3000/users/password-reset";

    const data = { email: email };

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await axios.post(link, data, config)
    return response;

}
type ResetPasswordTypes = {
    id: string; token: string; password: string
}
export const resetPasswordApi = async (cred: ResetPasswordTypes) => {

    const link = `http://localhost:3000/users/new-password`;

    const data = {
        id: cred.id,
        token: cred.token,
        password: cred.password
    }
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await axios.post(link, data, config);
    return response;
}

export const verifyAccountApi = async (id: string, token: string) => {

    const link = `http://localhost:3000/users/user/${id}/verify/${token}`;

    const response = await axios.get(link);
    return response;
}


export const contactUsApi = async (cred: ContactType) => {

    const link = `http://localhost:3000/contact-us`;

    const config = {
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true
    }

    const data = {
        firstname: cred.firstname,
        lastname: cred.lastname,
        email: cred.email,
        title: cred.title,
        message: cred.message,
    }

    const response = await axios.post(link, data, config);
    return response;
}

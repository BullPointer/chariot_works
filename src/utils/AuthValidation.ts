
const storage = localStorage.getItem("token");

export const validateToken = () => {
    if (storage) {
        const date = new Date();
        const currentTime = date.getTime();
        const expiredTime = JSON.parse(storage).exp;
        if (currentTime > expiredTime) {
            localStorage.removeItem("token");
            window.location.reload();
        }

    }
}
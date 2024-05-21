import { REST_BASE_URL } from "@/constant/constants";
import axios from "axios"
import { setCookie, getCookie } from "cookies-next";

export const login = async (username: string, password: string) => {
    const res = await axios.post (
        REST_BASE_URL + '/login',
        {
            username: username,
            password: password,
        }
    );
    setCookie("accessToken", res.data.accessToken, {
        httpOnly: true,
        maxAge: 60 * 60,
    });
    console.log(getCookie("accessToken"));

    return  {
        ok: res.data.msg === "Logged In!",
        data: res.data
    };
}
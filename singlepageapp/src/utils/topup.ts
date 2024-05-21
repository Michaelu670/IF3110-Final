import { REST_BASE_URL } from "@/constant/constants"
import axios from "axios";

export const topup = async (userId: string, amount: number) => {
    const res = await axios.post(
        REST_BASE_URL + '/topup/' + userId,
        {
            amount: amount
        }
    );


    return {
        ok: res.data.success
    };
}
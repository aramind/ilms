import axios from "axios";
import useAuth from "./useAuth";

const url = `${process.env.REACT_APP_API_URL}/v1/refresh`;

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get(url, { withCredentials: true });
    console.log(response?.data);
    const userInfo = response?.data?.data;
    const newAccessToken = response?.data?.data?.token;
    console.log(newAccessToken);
    console.log(userInfo);

    setAuth((prev) => {
      return { ...prev, ...userInfo, token: newAccessToken };
    });

    return newAccessToken;
  };

  return refresh;
};

export default useRefreshToken;

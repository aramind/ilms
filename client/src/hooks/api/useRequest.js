import { axiosBase } from "../../api/axios";
import { useGlobalState } from "../../context/GlobalStatesContextProvider";
import { showAckNotification } from "../../utils/showAckNotification";

const useRequest = ({ isPublic, showAck }) => {
  const {
    globalState: { ackAlert },
    dispatch,
  } = useGlobalState();
  const publicClient = axiosBase;
  //   const privateClient = useAxiosPrivate()

  const request = async (options) => {
    const onSuccess = async (res) => {
      if (showAck) {
        showAckNotification({
          dispatch,
          success: true,
          data: res?.data,
          ackAlert,
        });
      }
      return res?.data;
    };

    const onError = async (err) => {
      if (showAck) {
        showAckNotification({
          dispatch,
          success: false,
          data: err?.response?.data,
          ackAlert,
        });
      }
      return err?.response?.data;
    };

    if (isPublic) {
      try {
        const res = await publicClient(options);
        return onSuccess(res);
      } catch (err) {
        return onError(err);
      }
    } else {
      try {
        const res = await publicClient(options);
        return onSuccess(res);
      } catch (err) {
        return onError(err);
      }
    }
  };

  return request;
};

export default useRequest;

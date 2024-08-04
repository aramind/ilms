export const showAckNotification = ({
  dispatch,
  success,
  data,
  ackAlert,
  autoHideDuration,
}) => {
  dispatch({
    type: "SHOW_ACK_NOTIFICATION",
    payload: {
      ...ackAlert,
      open: true,
      autoHideDuration: autoHideDuration,
      severity: success ? "success" : "error",
      message: data?.message,
    },
  });
};

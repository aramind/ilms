import { Button, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useRequest from "../../hooks/api/useRequest";
import useRootReq from "../../hooks/api/public/useRootReq";
import useApiSend from "../../hooks/api/useApiSend";

const TopBar = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  const { refresh } = useRootReq({ isPublic: true, showAck: false });
  const { mutate: sendRefreshRequest } = useApiSend(
    refresh,
    ["user"],
    (data) => {
      console.log("REFRESHED", data);
      setAuth(data?.data);
    },
    (err) => console.error(err)
  );

  const handleRefresh = () => {
    alert("REFRESHING...");
    sendRefreshRequest();
  };
  return (
    <Stack
      justifyContent="space-between"
      direction="row"
      width="100%"
      alignItems="center"
    >
      {/* <Typography>Search</Typography> */}
      <Button onClick={handleRefresh}>REFRESH</Button>
      <Stack direction="row" justifyContent="flex-end" alignItems="center">
        {(auth?.role === "1991" || auth?.role === "2013") && (
          <Button
            onClick={() => navigate("/admin")}
            variant="text"
            p={0}
            sx={{
              color: (theme) => theme.palette.black.main,
              marginRight: 2,
              "&.MuiButtonBase-root": { padding: 1 },
              "&:hover": {
                bgcolor: (theme) => theme.palette.black.dark,
                color: (theme) => theme.palette.primary.main,
              },
            }}
          >
            Admin Page
          </Button>
        )}

        <Tooltip title="Sign out" placement="left-end">
          <IconButton
            onClick={() => {
              localStorage.setItem("persist", false);
              navigate("/signin");
            }}
            sx={{
              opacity: "0.7",
              color: (theme) => theme.palette.black.main,
              fontSize: "4rem",
              // "&:hover": {
              //   color: (theme) => theme.palette.black.lightest,
              // },
            }}
            aria-label="add an alarm"
            // size="large"
          >
            <ExitToAppTwoToneIcon
              sx={{
                // color: (theme) => theme.palette.primary.darkest,
                fontSize: "2rem",
                "&:hover": {
                  bgcolor: (theme) => theme.palette.black.dark,
                  color: (theme) => theme.palette.primary.main,
                },
              }}
            />
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  );
};

export default TopBar;

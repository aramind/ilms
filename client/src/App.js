import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import routes from "./routes";
import { useGlobalState } from "./context/GlobalStatesContextProvider";
import AcknowledgeNotification from "./components/notifications/AcknowledgeNotification";

function App() {
  const { dispatch } = useGlobalState();

  return (
    <>
      <CssBaseline />
      <RouterProvider router={routes.router} />
      <AcknowledgeNotification />
      {/* <SignUpInMain /> */}
    </>
  );
}

export default App;

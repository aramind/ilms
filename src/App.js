import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import routes from "./routes";

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={routes.router} />
      {/* <SignUpInMain /> */}
    </>
  );
}

export default App;

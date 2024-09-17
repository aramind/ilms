import React from "react";
import useUserReq from "../../hooks/api/authenticated/useUserReq";
import useApiGet from "../../hooks/api/useApiGet";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";

import StudentsListTable from "./manage-students/StudentsListTable";
import useApiSend from "../../hooks/api/useApiSend";

const ManageStudent = () => {
  // const [updateArguments, setUpdateArguments] = useState({});
  const { getUsers, updateUser } = useUserReq({
    isPublic: false,
    showAck: true,
  });

  const {
    data: students,
    isLoading,
    isError,
    error,
  } = useApiGet(
    "students",
    () =>
      getUsers({
        params: `?role=student&fields=firstName,lastName,email,_id,status,accessLevel`,
      }),
    {
      refetchOnWindowFocus: true,
      retry: 3,
      // enabled: !!auth?.id,
    }
  );

  const { mutate: sendPatchUserReq, isLoadingUpdateUser } = useApiSend(
    (patchInfo) => updateUser(patchInfo),
    ["users", "students"]
    // (data) => {
    //   console.log(data?.data);
    // }
  );

  if (isLoading || isLoadingUpdateUser) {
    return <LoadingPage />;
  }

  if (isError) {
    <ErrorPage message={`${error?.message}`} />;
  }

  return (
    <div>
      <StudentsListTable
        data={students?.data}
        sendPatchUserReq={sendPatchUserReq}
      />
    </div>
  );
};

export default ManageStudent;

import React, { useCallback, useState } from "react";
import ConfirmActionDialog from "../components/ConfirmActionDialog";

const useConfirmActionDialog = (title, content, confirmCallback, maxWidth) => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleConfirm = useCallback(() => {
    confirmCallback();
    setOpen(false);
  }, [confirmCallback]);

  const renderConfirmActionDialog = useCallback(() => {
    return (
      <ConfirmActionDialog
        open={open}
        setOpen={setOpen}
        title={title}
        content={content}
        handleConfirm={handleConfirm}
        maxWidth={maxWidth}
      />
    );
  }, [content, handleConfirm, maxWidth, open, title]);

  return { handleOpen, handleClose, renderConfirmActionDialog };
};

export default useConfirmActionDialog;

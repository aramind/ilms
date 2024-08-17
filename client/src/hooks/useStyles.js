import React from "react";

const useStyles = () => {
  const styles = {
    dialog: {
      title: {
        cursor: "move",
        // fontWeight: "bold",
        borderBottom: "2px solid",
        borderColor: "primary.main",
        mb: 2,
        py: 1,
        color: (theme) => theme.palette.white.main,
      },
      actionButton: {
        "&:hover": {
          backgroundColor: "primary.light",
          color: "",
        },
      },
    },
  };

  return styles;
};

export default useStyles;

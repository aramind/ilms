import React from "react";

const useStyles = () => {
  const styles = {
    dialog: {
      title: {
        cursor: "move",
        fontWeight: "bold",
        borderBottom: "2px solid",
        borderColor: "primary.light",
        mb: 2,
        py: 1,
      },
      actionButton: {
        "&:hover": {
          backgroundColor: "tertiary.main",
          color: "font.black",
        },
      },
    },
  };

  return styles;
};

export default useStyles;

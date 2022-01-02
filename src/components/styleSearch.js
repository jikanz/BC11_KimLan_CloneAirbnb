import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
    height: 66,
    maxWidth: 686,
    [theme.breakpoints.up("lg")]: {
      maxWidth: 850,
    },
    margin: "0 auto",
    width: "100%",
    border: "1px solid #dddddd",
    color: "#222222",
    boxShadow: "0px 16px 32px rgb(0 0 0 / 15%), 0px 3px 8px rgb(0 0 0 / 10%)",
    borderRadius: 32,
    display: "flex",
    zIndex: 0,
  },

  locationSearch: {
    cursor: "pointer",
    display: "flex",
    backgroundClip: "padding-box",
    border: "1px solid transparent",
    background: "darkgray",
    borderRadius: "55px",
    flex: "1 0 0",
    padding: "14px 32px",
    position: "relative",
    "&:hover": {
      flex: "1 0 0",
    },
  },

  locationSearch__wrapper: {
    "&:hover": {
      backgroundColor: "rgba(176,176,176,0.2)",
      borderRight: "none",
    },
  },

  locationSearch__label: {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 600,
    paddingBottom: "2px",
    paddingLeft: "2px",
    color: "#000",
    textAlign: "left",
    display: "block",
    "&:hover::before": {
      display: "block",
    },
  },

  locationSearch__input: {
    fontSize: "14px",
    lineHeight: "18px",
    width: "100%",
    color: "#222222",
    fontWeight: 500,
    backgroundColor: "transparent",
    outline: "none",
    border: "none",
    "&::placeholder": {
      fontSize: "14px",
    },
  },

  locationSearch__dropdown: {
    position: "absolute",
    left: "0",
    top: "100%",
    backgroundColor: theme.palette.background.paper,
    zIndex: 1,
    marginTop: "12px",
    borderRadius: "32px",
    boxShadow: "0px 6px 20px rgb(0 0 0 / 20%)",
  },

  locationSearch__lists: {
    padding: "16px 0 0",
    margin: "0 - 32px - 8px ",
    listStyle: "none",
    overflow: "auto",
    overflowX: "hidden",
    maxHeight: "calc(100vh - 220px)",
    width: "500px",

    '& li[data-focus="true"]': {
      backgroundColor: "rgba(247, 247, 247)",
      cursor: "pointer",
      width: "100%",
    },
    "& li:active": {
      backgroundColor: "rgba(247, 247, 247)",
      cursor: "pointer",
    },
  },

  locationSearch__list: {
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "8px 16px 8px 32px",
  },

  locationSearch__lists__icon: {
    fontSize: "17px",
    backgroundColor: "rgb(241, 241, 241)",
    border: "1px solid rgba(176,176,176,0.2)",
    borderRadius: "8px",
    minWidth: "48px",
    height: "48px",
    marginRight: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  locationSearch__lists__icon__item: {
    display: "block",
    height: "22px",
    width: "22px",
    lineHeight: "22px",
  },

  locationSearch__lists__title: {
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: 400,
    color: "rgb(34,34,34)",
    maxHeight: "120px",
  },
  formControl__button: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    border: "transparent",
    outline: "none",
    backgroundColor: theme.palette.secondary.main,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  formControl__button__icon: {
    color: "#fff",
    lineHeight: "48px",
  },
}));

export default useStyles;

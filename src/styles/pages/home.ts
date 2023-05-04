import { styled } from "..";

export const HomeContainer = styled("main", {
  padding: "10 0 0 20",
  marginTop: 30,
  width: "100%",
});

export const ImgContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  marginLeft: 16,
});

export const SliderContainer = styled("main", {
  display: "flex",
  width: "100%",
  "@bp3": {
    maxWidth: "calc(100vw - ((100vw - 1180px)/2))",
  },
  marginLeft: "auto",
  padding: 16,
  minHeight: 100,
});

export const Product = styled("div", {
  boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px;",
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  padding: 8,
  width: "20%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",

  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "self-end",
    justifyContent: "space-between",
    strong: {
      fontSize: "$lg",
      color: "$gray500",
      fontWeight: "bold",
    },

    p: {
      fontSize: "$sm",
      fontWeight: "bold",
      color: "$purple500",
      textDecoration: "line-through",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$primary900",
    },
  },
});

export const BookContainer = styled("div", {
  marginTop: 16,
  marginBottom: 32,
  "&:hover": {
    transform: "scale(1.2)",
    opacity: 1,
    transition: "transform 2s",
  },
  img: {
    objectFit: "cover",
    borderLeft: "8px solid $gray500",
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;",
  },
});

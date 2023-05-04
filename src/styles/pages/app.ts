import { styled } from "..";

export const Container = styled("div", {
  width: "100%",
  overflow: "hidden",
});

export const Header = styled("main", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "92px",
  backgroundColor: "$primary100",
});

export const TextMD = styled("h2", {
  fontSize: "$xl",
  fontWeight: "normal",
  color: "$gray500",
});

export const SubtitleSM = styled("p", {
  fontSize: "$sm",
  fontWeight: "normal",
  color: "$primary900",
});

export const Imgprofile = styled("div", {
  img: {
    borderRadius: "50%",
    boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px;",
  },
});

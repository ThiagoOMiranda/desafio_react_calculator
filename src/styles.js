import styled from "styled-components";

export const LightTheme = {
  colorText: "#333333",
  background: "#fafafa",
  backgroundGradient: {
    gradientStart: "#ced2de",
    gradientEnd: "#ffffff",
  },
  colors: {
    primary: {
      borderColor: "#b0b9ca",
      rimLight: "#c1c9d4",
      gradientStart: "#808ea7",
      gradientEnd: "#d4dae5",
    },
    secondary: {
      borderColor: "#d0d3e2",
      rimLight: "#dde1ec",
      gradientStart: "#c4c9d7",
      gradientEnd: "#ffffff",
    },
    alert: {
      borderColor: "#d07419",
      rimLight: "#e28927",
      gradientStart: "#c15d17",
      gradientEnd: "#eeb36d",
    },
  },
};

export const DarkTheme = {
  colorText: "#ffffff",
  background: "#333333",
  backgroundGradient: {
    gradientStart: "#595b60",
    gradientEnd: "#2a2c2f",
  },
  colors: {
    primary: {
      borderColor: "#545f71",
      rimLight: "#636c7d",
      gradientStart: "#465262",
      gradientEnd: "#626b7c",
    },
    secondary: {
      borderColor: "#3a4252",
      rimLight: "#535b70",
      gradientStart: "#2a303e",
      gradientEnd: "#4d536e",
    },
    alert: {
      borderColor: "#e68832",
      rimLight: "#ecb866",
      gradientStart: "#dd732f",
      gradientEnd: "#e99f41",
    },
  },
};

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e5e5e5;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  border-radius: 1rem;
  box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.5);
  background-color: ${(props) => `${props.theme.background}`};
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme.backgroundGradient.gradientStart}, ${props.theme.backgroundGradient.gradientEnd})`};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > * {
    margin-right: 0.5rem;
  }
  & > *:last-child {
    margin-right: 0;
  }
  & + & {
    margin-top: 0.5rem;
  }
`;

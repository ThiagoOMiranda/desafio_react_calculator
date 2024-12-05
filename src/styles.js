import styled from "styled-components";

export const LightTheme = {
  colorText: "#333333",
  background: "#FAFAFA",
  backgroundGradient: {
    gradientStart: "#CED2DE",
    gradientEnd: "#ECEFF4",
  },
  colors: {
    primary: {
      borderColor: "#B0B9CA",
      rimLight: "#C1C9D4",
      gradientStart: "#A0ADC4",
      gradientEnd: "#C5CEDF",
    },
    secondary: {
      borderColor: "#D0D3E2",
      rimLight: "#DDE1EC",
      gradientStart: "#CED2DE",
      gradientEnd: "#ECEFF4",
    },
    alert: {
      borderColor: "#D07419",
      rimLight: "#E28927",
      gradientStart: "#C15D17",
      gradientEnd: "#DF8419",
    },
  },
};

export const DarkTheme = {
  colorText: "#FFFFFF",
  background: "#333333",
  backgroundGradient: {
    gradientStart: "#595B60",
    gradientEnd: "#2A2C2F",
  },
  colors: {
    primary: {
      borderColor: "#545F71",
      rimLight: "#636C7D",
      gradientStart: "#465262",
      gradientEnd: "#626B7C",
    },
    secondary: {
      borderColor: "#3A4252",
      rimLight: "#535B70",
      gradientStart: "#2A303E",
      gradientEnd: "#4D536E",
    },
    alert: {
      borderColor: "#E68832",
      rimLight: "#ECB866",
      gradientStart: "#DD732F",
      gradientEnd: "#E99F41",
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

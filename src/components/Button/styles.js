import styled from "styled-components";

const getColors = (props) => {
  const colors = props.theme.colors;
  switch (props.$color) {
    case "primary":
      return colors.primary;
    case "secondary":
      return colors.secondary;
    case "alert":
      return colors.alert;
    default:
      return {};
  }
};

export const ButtonContainer = styled.button`
  font-family: "Consolas", monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  background: ${(props) =>
    `linear-gradient(135deg, ${getColors(props).gradientStart}, ${
      getColors(props).gradientEnd
    })`};

  box-shadow: ${(props) =>
    `inset 0 0 4px 4px ${getColors(props).borderColor}, inset 4px 4px 4px 0 ${
      getColors(props).rimLight
    }, 2px 2px 6px 0 rgba(0, 0, 0, 0.25)`};

  color: ${(props) => `${props.theme.colorText}`};
  font-size: 1.5rem;
  font-weight: 700;
  aspect-ratio: 1/1;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    overflow: hidden;
    box-shadow: inset 1px 1px 10px 4px rgba(0, 0, 0, 0.5);
  }
`;

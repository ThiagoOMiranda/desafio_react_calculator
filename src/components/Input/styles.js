import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  aspect-ratio: 4/1;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  background-color: #c6d877;
  box-shadow: ${(props) => {
    return `inset 8px 8px 16px #81903d, inset -8px -8px 16px #b7cc57,
  -6px -6px 7px ${props.theme.colors.primary.gradientEnd}, 6px 6px 7px ${props.theme.colors.primary.gradientStart}`;
  }};

  input {
    font-family: "LCD";
    width: 100%;
    border: 0;
    font-size: 2rem;
    text-align: end;
    background-color: transparent;
    color: #333333;
  }
`;

import {InputContainer} from "./styles";

const Input = ({value}) => {
  return (
    <InputContainer>
      <input disabled value={value[1]} />
      <input disabled value={value[0]} />
    </InputContainer>
  );
};

export default Input;

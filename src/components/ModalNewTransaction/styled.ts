import styled, { css } from "styled-components";
import { darken } from "polished";
import colors from "../../styles/colors";

export const Container = styled.form`
  h2 {
    color: ${colors.textTitle};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: ${colors.green};
    color: ${colors.shape};
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
interface TransactionTypeContainerProps {
  type: string;
}

export const TransactionTypeContainer = styled.div<TransactionTypeContainerProps>`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  button {
    height: 4rem;
    border: 1px solid ${colors.inputBorder};
    border-radius: 0.25rem;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    ${(props) =>
      props.type === "deposit" &&
      css`
        background-color: ${colors.blueLight};
      `}

    img {
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: ${colors.textTitle};
    }
    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.1, colors.inputBorder)};
    }
  }
`;
export const Input = styled.input.attrs({
  placeholderTextColor: "red",
})`

    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid ${colors.inputBorder};
    background-color: ${colors.inputBackground};
    font-weight: 400;
    font-size: 1rem;
    &::placeholder{
        color${colors.green}
    }
    & + input {
        margin-top: 1rem;
    }
  
`;

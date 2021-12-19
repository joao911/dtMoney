import styled, { css } from "styled-components";
import { darken, transparentize } from "polished";
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

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioButtonProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const color = {
  green: "#33CC95",
  red: "#E52E4D",
};

export const RadioButton = styled.button<RadioButtonProps>`
  height: 4rem;
  border: 1px solid ${colors.inputBorder};
  background-color: ${(props) =>
    props.isActive
      ? transparentize(0.8, color[props.activeColor])
      : "transparent"};
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;

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
    border-color: ${darken(0.1, "#d7d7d7")};
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

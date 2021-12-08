import styled, { css } from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
`;

interface CardProps {
  isHighlight?: boolean;
}
export const Card = styled.div<CardProps>`
  background-color: ${(props) =>
    props.isHighlight ? colors.green : colors.shape};
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: ${colors.textTitle};
  ${(props) =>
    props.isHighlight &&
    css`
      color: ${colors.shape};
    `}
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Strong = styled.strong`
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
`;

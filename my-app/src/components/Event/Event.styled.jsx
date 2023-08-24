import styled from "@emotion/styled";

export const Card = styled.div`
  border: 2px solid black;
  ${({ color, theme }) => `background-color: ${color};
  color: ${theme.textColor};`}
  svg{
    color: grey
  }
 
  &:hover {
    box-shadow: 0 2px 2px #00000088, 
    1px 0px 3px #00000055,
    -1px 0px 3px #00000055;
  }
`;

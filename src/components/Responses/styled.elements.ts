import styled from '../../styled-components';
import { ResponseTitle } from './ResponseTitle';

export const StyledResponseTitle = styled(ResponseTitle)`
  display: block;
  border: 0;
  width: 100%;
  text-align: left;
  padding: 10px;
  border-radius: 2px;
  margin-bottom: 4px;
  line-height: 1.5em;
  cursor: pointer;

  color: ${props => props.theme.colors.responses[props.type].color};
  background-color: ${props => props.theme.colors.responses[props.type].backgroundColor};
  &:focus {
    outline: auto ${props => props.theme.colors.responses[props.type].color};
  }
  ${props =>
    (props.empty &&
      `
cursor: default;
&::before {
  content: "—";
  font-weight: bold;
  width: 1.5em;
  text-align: center;
  display: inline-block;
  vertical-align: top;
  position: absolute;
  right: 10px;
  color: ${props.theme.colors.text.primary}
}
&:focus {
  outline: 0;
}
`) ||
    ''};
`;

export const ResponseDetailsWrap = styled.div`
  padding: 10px;
`;

export const Code = styled.strong`
  vertical-align: top;
`;

export const ResponseWrap = styled.div`
  position: relative;
`;

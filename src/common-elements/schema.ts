import styled from '../styled-components';
import { deprecatedCss } from './mixins';

export const OneOfList = styled.div`
  margin: 0 0 3px 0;
  display: inline-block;
`;

export const OneOfLabel = styled.span`
  font-size: 14px;
  margin-right: 10px;
  color: #56535F;
  font-family: ${props => props.theme.typography.headings.fontFamily};
  font-weight: 500;
}
`;

export const OneOfButton = styled.button<{ $active: boolean; $deprecated: boolean }>`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 5px;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid #d7dbdf;
  border-radius: 4px;
  background: #fff;
  padding: 4px 8px;
  line-height: 16px;
  outline: none;
  color: ${props => props.theme.colors.text.primary};

  &:hover {
    color: #56535f;
    border-color: #bfc8ce;
  }

  &:active {
    color: #56535f;
    border-color: #a3a7aa;
  }

  &:focus {
    color: ${props => props.theme.typography.links.color};
    border-color: ${props => props.theme.typography.links.color};
  }

  ${({ $deprecated }) => ($deprecated && deprecatedCss) || ''};

  ${props => {
    if (props.$active) {
      return `
      color: ${props.theme.typography.links.color};
      border-color: ${props.theme.typography.links.color};
      `;
    } else {
      return `
        color: ${props => props.theme.colors.text.primary};
        border: 1px solid #d7dbdf;
      `;
    }
  }}
`;

export const ArrayOpenningLabel = styled.div`
  font-size: 0.9em;
  font-family: ${props => props.theme.typography.code.fontFamily};
  &::after {
    content: ' [';
  }
`;

export const ArrayClosingLabel = styled.div`
  font-size: 0.9em;
  font-family: ${props => props.theme.typography.code.fontFamily};
  &::after {
    content: ']';
  }
`;

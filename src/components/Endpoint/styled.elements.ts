import styled from '../../styled-components';

export const OperationEndpointWrap = styled.div`
  cursor: pointer;
  position: relative;
  margin-bottom: 5px;
`;

export const ServerRelativeURL = styled.span`
  font-family: ${props => props.theme.typography.code.fontFamily};
  margin-left: 10px;
  flex: 1;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

export const EndpointInfo = styled.button<{ $expanded?: boolean; $inverted?: boolean }>`
  outline: 0;
  color: inherit;
  width: 100%;
  text-align: left;
  cursor: pointer;
  padding: 10px 30px 10px ${props => (props.$inverted ? '10px' : '20px')};
  border-radius: ${props => (props.$inverted ? '0' : '4px 4px 0 0')};
  background-color: ${props =>
    props.$inverted ? 'transparent' : props.theme.codeBlock.backgroundColor};
  padding: 10px 30px 10px 0;
  background-color: transparent;
  border: 0;
  display: flex;
  white-space: nowrap;
  align-items: center;
`;

export const HttpVerb = styled.span.attrs((props: { type: string; $compact?: boolean }) => ({
  className: `http-verb ${props.type}`,
}))<{ type: string; $compact?: boolean }>`
  font-size: ${props => (props.$compact ? '0.8em' : '0.929em')};
  line-height: ${props => (props.$compact ? '18px' : '20px')};
  background-color: ${props => props.theme.colors.http[props.type] || '#999999'};
  color: #ffffff;
  padding: ${props => (props.$compact ? '2px 8px' : '3px 10px')};
  text-transform: uppercase;
  font-family: ${props => props.theme.typography.headings.fontFamily};
  margin: 0;
  border-radius: 6px;
`;

export const ServersOverlay = styled.div<{ $expanded: boolean }>`
  width: 100%;
  background: #fff;
  color: #56535f;
  font-size: 14px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const ServerItem = styled.div`
  padding: 0;
`;

export const ServerUrl = styled.div`
  display: inline-block;
  padding: 0px 8px;
  border: 1px solid #d6d7d8;
  background: #f3f4f5;
  word-break: break-all;
  color: #56535f;
  font-size: 14px;
  line-height: 20px;
  border-radius: 4px;
`;

import { SECTION_ATTR } from '../services/MenuStore';
import styled, { media } from '../styled-components';

export const MiddlePanel = styled.div<{ $compact?: boolean }>`
  width: calc(100% - ${props => props.theme.rightPanel.width});
  padding: ${props =>
    `${props.theme.spacing.sectionVertical}px
    ${props.theme.spacing.sectionHorizontal}px
    ${props.$compact ? 0 : props.theme.spacing.sectionVertical}px;`};
  border-right: 1px solid #d6d7d8;

  ${({ $compact, theme }) =>
    media.lessThan('medium', true)`
    width: 100%;
    padding: ${`${$compact ? 0 : theme.spacing.sectionVertical / 2}px ${
      theme.spacing.sectionHorizontal / 2
    }px`};
    border-right: 0;
  `};
`;

export const Section = styled.div.attrs(props => ({
  [SECTION_ATTR]: props.id,
}))<{ $underlined?: boolean }>`
  padding: 0;

  &:last-child {
    min-height: calc(100vh + 1px);
  }

  & > &:last-child {
    min-height: initial;
  }

  ${(props: any) =>
    (props.$underlined &&
      `
    position: relative;

    &:not(:last-of-type):after {
      position: absolute;
      bottom: 0;
      width: calc(60% - ${props.theme.spacing.sectionHorizontal * 2}px);
      left: ${props.theme.spacing.sectionHorizontal}px;
      display: block;
      content: '';
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
  `) ||
    ''}

  ${media.lessThan('medium', true)`
    padding: 0;

    &:not(:last-of-type):after {
      width: calc(100% - ${props => props.theme.spacing.sectionHorizontal}px);
      left: ${props => props.theme.spacing.sectionHorizontal / 2}px;
    }
  `}
`;

export const RightPanel = styled.div`
  width: ${props => props.theme.rightPanel.width};
  color: ${({ theme }) => theme.rightPanel.textColor};
  background-color: ${props => props.theme.rightPanel.backgroundColor};
  padding: ${props =>
    `${props.theme.spacing.sectionVertical}px
    ${props.theme.spacing.sectionHorizontal}px;`};

  ${media.lessThan('medium', true)`
    width: 100%;
    padding: ${props =>
      `${props.theme.spacing.sectionVertical / 2}px ${
        props.theme.spacing.sectionHorizontal / 2
      }px`};
  `};
`;

export const DarkRightPanel = styled(RightPanel)`
  background-color: ${props => props.theme.rightPanel.backgroundColor};
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  padding: 0;

  ${media.lessThan('medium', true)`
    flex-direction: column;
  `};
`;

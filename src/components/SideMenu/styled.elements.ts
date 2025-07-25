import * as classnames from 'classnames';

import { deprecatedCss, ShelfIcon } from '../../common-elements';
import styled, { css, ResolvedThemeInterface } from '../../styled-components';

export const OperationBadge = styled.span.attrs((props: { type: string; color?: string }) => ({
  className: `operation-type ${props.type}`,
}))<{ type: string; color?: string }>`
  width: 9ex;
  display: inline-block;
  height: ${props => props.theme.typography.code.fontSize};
  line-height: ${props => props.theme.typography.code.fontSize};
  background-color: ${props => props.color || '#333'};
  border-radius: 3px;
  background-repeat: no-repeat;
  background-position: 6px 4px;
  font-size: 7px;
  font-family: Verdana, sans-serif; // web-safe
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  vertical-align: middle;
  margin-right: 6px;
  margin-top: 5px;

  &.get {
    background-color: ${({ theme }) => theme.colors.http.get};
  }

  &.post {
    background-color: ${({ theme }) => theme.colors.http.post};
  }

  &.put {
    background-color: ${({ theme }) => theme.colors.http.put};
  }

  &.options {
    background-color: ${({ theme }) => theme.colors.http.options};
  }

  &.patch {
    background-color: ${({ theme }) => theme.colors.http.patch};
  }

  &.delete {
    background-color: ${({ theme }) => theme.colors.http.delete};
  }

  &.basic {
    background-color: ${({ theme }) => theme.colors.http.basic};
  }

  &.link {
    background-color: ${({ theme }) => theme.colors.http.link};
  }

  &.head {
    background-color: ${({ theme }) => theme.colors.http.head};
  }

  &.hook {
    background-color: ${({ theme }) => theme.colors.primary.main};
  }

  &.schema {
    background-color: ${({ theme }) => theme.colors.http.basic};
  }
`;

function menuItemActive(
  depth,
  { theme }: { theme: ResolvedThemeInterface },
  option: string,
): string {
  if (depth > 1) {
    return theme.sidebar.level1Items[option];
  } else if (depth === 1) {
    return theme.sidebar.groupItems[option];
  } else {
    return '';
  }
}

export const MenuItemUl = styled.ul<{ $expanded: boolean }>`
  margin: 0;
  padding: 0;

  &:first-child {
    padding-bottom: 32px;
  }

  & & {
    font-size: 0.929em;
  }

  ${props => (props.$expanded ? '' : 'display: none;')};
`;

export const MenuItemLi = styled.li<{ depth: number }>`
  list-style: none inside none;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  ${props => (props.depth === 0 ? 'margin-top: 15px' : '')};
`;

export const menuItemDepth = {
  0: css`
    opacity: 0.7;
    text-transform: ${({ theme }) => theme.sidebar.groupItems.textTransform};
    font-size: 0.8em;
    padding-bottom: 0;
    cursor: default;
  `,
  1: css`
    font-size: 0.929em;
    text-transform: ${({ theme }) => theme.sidebar.level1Items.textTransform};
  `,
};

export interface MenuItemLabelType {
  $depth: number;
  $active: boolean;
  $deprecated?: boolean;
  $type?: string;
}

export const MenuItemLabel = styled.label.attrs((props: MenuItemLabelType) => ({
  className: classnames('-depth' + props.$depth, {
    active: props.$active,
  }),
}))<MenuItemLabelType>`
  cursor: pointer;
  color: ${props =>
    props.$active
      ? menuItemActive(props.$depth, props, 'activeTextColor')
      : props.theme.sidebar.textColor};
  margin: 0;
  padding: 15px ${props => props.theme.spacing.unit * 4}px;
  ${({ $depth, $type, theme }) =>
    ($type === 'section' && $depth > 1 && 'padding-left: ' + theme.spacing.unit * 8 + 'px;') || ''}
  display: flex;
  justify-content: space-between;
  font-family: ${props => props.theme.typography.headings.fontFamily};
  ${props => menuItemDepth[props.$depth]};
  font-size: 16px;
  font-weight: 500;
  background-color: ${props =>
    props.$active
      ? menuItemActive(props.$depth, props, 'activeBackgroundColor')
      : props.theme.sidebar.backgroundColor};

  ${props => (props.$deprecated && deprecatedCss) || ''};

  &:hover {
    color: ${props => menuItemActive(props.$depth, props, 'activeTextColor')};
    background-color: ${props => menuItemActive(props.$depth, props, 'activeBackgroundColor')};
  }

  ${ShelfIcon} {
    height: ${({ theme }) => theme.sidebar.arrow.size};
    width: ${({ theme }) => theme.sidebar.arrow.size};
    polygon {
      fill: ${({ theme }) => theme.sidebar.arrow.color};
    }
  }
`;

export const MenuItemTitle = styled.span<{ width?: string }>`
  display: inline-block;
  vertical-align: middle;
  width: ${props => (props.width ? props.width : 'auto')};
  overflow: hidden;
  text-overflow: ellipsis;
`;

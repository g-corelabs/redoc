import { headerCommonMixin, linkifyMixin } from '../../common-elements';
import { PrismDiv } from '../../common-elements/PrismDiv';
import styled, { css, extensionsHook, ResolvedThemeInterface } from '../../styled-components';

import { StyledComponent } from 'styled-components';

export const linksCss = css`
  a {
    text-decoration: underline;
    color: ${props => props.theme.typography.links.color};

    &:visited {
      color: ${props => props.theme.typography.links.color};
    }

    &:hover {
      color: ${props => props.theme.typography.links.hover};
      text-decoration: ${props => props.theme.typography.links.hoverTextDecoration};
    }

    &:active {
      color: ${props => props.theme.typography.links.visited};
    }
  }
`;

export const StyledMarkdownBlock = styled(
  PrismDiv as StyledComponent<
    'div',
    ResolvedThemeInterface,
    { $compact?: boolean; $inline?: boolean }
  >,
)`
  font-family: ${props => props.theme.typography.fontFamily};
  font-weight: ${props => props.theme.typography.fontWeightRegular};
  line-height: ${props => props.theme.typography.lineHeight};

  p {
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${({ $compact }) =>
    $compact &&
    `
    p:first-child {
      margin-top: 0;
    }
    p:last-child {
      margin-bottom: 0;
    }
  `}

  ${({ $inline }) =>
    $inline &&
    ` p {
    display: inline-block;
  }`}

  h1 {
    ${headerCommonMixin(1)};
    color: ${props => props.theme.colors.primary.main};
    margin-top: 0;
  }

  h2 {
    ${headerCommonMixin(2)};
    color: ${props => props.theme.colors.text.primary};
  }

  code {
    color: ${({ theme }) => theme.typography.code.color};
    background-color: ${({ theme }) => theme.typography.code.backgroundColor};

    font-family: ${props => props.theme.typography.code.fontFamily};
    border-radius: 4px;
    border: 1px solid #d6d7d8;
    padding: 2px ${({ theme }) => theme.spacing.unit}px;
    font-size: ${props => props.theme.typography.code.fontSize};
    font-weight: ${({ theme }) => theme.typography.code.fontWeight};

    word-break: break-word;
  }

  pre {
    font-family: ${props => props.theme.typography.code.fontFamily};
    white-space: ${({ theme }) => (theme.typography.code.wrap ? 'pre-wrap' : 'pre')};
    background-color: ${({ theme }) => theme.codeBlock.backgroundColor};
    color: white;
    padding: ${props => props.theme.spacing.unit * 4}px;
    overflow-x: auto;
    line-height: normal;
    border-radius: 0;
    border: 1px solid rgba(38, 50, 56, 0.1);

    code {
      background-color: transparent;
      border: 0;
      color: ${({ theme }) => theme.typography.code.color};
      padding: 0;

      .token.string,
      .token.operator,
      .token.number,
      .token.punctuation {
        color: #22174a;
        opacity: 1;
      }

      .token.keyword {
        color: #3e2593;
      }

      &:before,
      &:after {
        content: none;
      }
    }
  }

  blockquote {
    margin: 0;
    margin-bottom: 1em;
    padding: 0 15px;
    color: #777;
    border-left: 4px solid #ddd;
  }

  img {
    max-width: 100%;
    box-sizing: content-box;
  }

  ul,
  ol {
    padding-left: 2em;
    margin: 0;
    margin-bottom: 1em;

    ul,
    ol {
      margin-bottom: 0;
      margin-top: 0;
    }
  }

  table {
    display: inline-block;
    width: auto;
    max-width: 100%;
    overflow: auto;
    word-break: normal;
    word-break: keep-all;
    border-collapse: collapse;
    border-spacing: 0;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    border: 1px solid #d6d7d8;
    border-radius: 4px;
  }

  table thead tr {
    background: #f3f4f5;
    border-top: 0;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #d6d7d8;
  }

  table tr:first-child {
    border-top: 0;
  }

  table thead + tbody tr:first-child {
    border-top: 1px solid #d6d7d8;
  }

  table th,
  table td {
    padding: 6px 13px;
    border-right: 1px solid #d6d7d8;
  }

  table th:last-child,
  table td:last-child {
    border-right: 0;
  }

  table th {
    text-align: left;
    font-weight: bold;
  }

  ${linkifyMixin('.share-link')};

  ${linksCss}

  ${extensionsHook('Markdown')};
`;

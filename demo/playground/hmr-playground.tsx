import * as React from 'react';
import { createRoot } from 'react-dom/client';
import type { RedocRawOptions } from '../../src/services/RedocNormalizedOptions';
import { RedocStandalone } from '../../src';

const big = window.location.search.indexOf('big') > -1;
const swagger = window.location.search.indexOf('swagger') > -1;

const userUrl = window.location.search.match(/url=(.*)$/);

const specUrl =
  (userUrl && userUrl[1]) || (swagger ? 'museum.yaml' : big ? 'big-openapi.json' : 'museum.yaml');

const options: RedocRawOptions = {
  nativeScrollbars: false,
  maxDisplayedEnumValues: 3,
  schemaDefinitionsTagName: 'schemas',
  theme: {
    colors: {
      text: {
        primary: '#22174A',
      },
      http: {
        post: '#00B0FF',
        get: '#00AA13',
        delete: '#DF111E',
      },
      responses: {
        success: {
          backgroundColor: '#D6F1D9',
          color: '#00AA13',
        },
        error: {
          backgroundColor: '#FAD9DB',
          color: '#DF111E',
        },
      },
    },
    schema: {
      typeNameColor: '#A5A6A8',
      requireLabelColor: '#DF111E',
    },
    typography: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '16px',
      headings: {
        fontFamily: 'Inter, sans-serif',
      },
      code: {
        fontFamily: 'Inter, sans-serif',
        color: '#56535F',
        fontWeight: '400',
        fontSize: '14px',
        backgroundColor: '#F3F4F5',
      },
      links: {
        color: '#FF5913',
        hover: '#FF6C2E',
        visited: '#DB4100',
      },
      rightPanelHeading: {
        fontSize: '14px',
        color: '#0000ff',
      },
    },
    sidebar: {
      textColor: '#22174A',
      activeTextColor: '#DB4100',
      backgroundColor: '#F3F4F5',
      arrow: {
        size: '16px',
      },
    },
    rightPanel: {
      backgroundColor: '#ffffff',
      textColor: '#22174A',
    },
  },
} as any;

const container = document.getElementById('example');
const root = createRoot(container!);
root.render(<RedocStandalone specUrl={specUrl} options={options} />);

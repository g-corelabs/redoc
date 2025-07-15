import * as React from 'react';
import { OperationModel } from '../../services';
import { Markdown } from '../Markdown/Markdown';
import { OptionsContext } from '../OptionsProvider';
import { SelectOnClick } from '../SelectOnClick/SelectOnClick';

import { expandDefaultServerVariables, getBasePath } from '../../utils';
import {
  EndpointInfo,
  HttpVerb,
  OperationEndpointWrap,
  ServerItem,
  ServerRelativeURL,
  ServersOverlay,
  ServerUrl,
} from './styled.elements';

export interface EndpointProps {
  operation: OperationModel;

  hideHostname?: boolean;
  inverted?: boolean;
  compact?: boolean;
}

export class Endpoint extends React.Component<EndpointProps> {
  render() {
    const { operation, inverted, hideHostname } = this.props;

    // TODO: highlight server variables, e.g. https://{user}.test.com
    return (
      <OptionsContext.Consumer>
        {options => (
          <OperationEndpointWrap>
            <EndpointInfo $inverted={inverted}>
              <HttpVerb type={operation.httpVerb} $compact={this.props.compact}>
                {operation.httpVerb}
              </HttpVerb>
              <ServerRelativeURL>{operation.path}</ServerRelativeURL>
            </EndpointInfo>
            <ServersOverlay>
              {operation.servers.map(server => {
                const normalizedUrl = options.expandDefaultServerVariables
                  ? expandDefaultServerVariables(server.url, server.variables)
                  : server.url;
                const basePath = getBasePath(normalizedUrl);
                return (
                  <ServerItem key={normalizedUrl}>
                    <Markdown source={server.description || ''} compact={true} />
                    <SelectOnClick>
                      <ServerUrl>
                        {hideHostname || options.hideHostname
                          ? basePath === '/'
                            ? ''
                            : basePath
                          : normalizedUrl}
                        {operation.path}
                      </ServerUrl>
                    </SelectOnClick>
                  </ServerItem>
                );
              })}
            </ServersOverlay>
          </OperationEndpointWrap>
        )}
      </OptionsContext.Consumer>
    );
  }
}

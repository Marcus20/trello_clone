// tslint:disable-next-line:no-unused-expression
import { RouteComponentProps } from "@reach/router";
import * as React from "react";
import { FunctionComponent } from 'react';

type Props = { component: FunctionComponent } & RouteComponentProps;

const Route: FunctionComponent<Props> = ({ component: Component, ...rest }) => (
  <Component {...rest} />
);

export default Route;
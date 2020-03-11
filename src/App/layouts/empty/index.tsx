import { FC } from 'react';
import React from 'react';
import LoadableContent from '../loadable-content';
import { BaseLayoutProps } from '..';
interface EmptyLayoutProps extends BaseLayoutProps {}
const EmptyLayout: FC<EmptyLayoutProps> = props => {
  return (
    <>
      <LoadableContent layout={props.layout} />
    </>
  );
};

export default EmptyLayout;

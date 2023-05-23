import React from 'react';
import { Nav } from '../nav';

export interface IMainLayout {
  children: React.ReactNode;
  HeaderSlot?: React.ReactNode;
}

const MainLayout = (props: IMainLayout) => {
  const { children, HeaderSlot } = props;
  return (
    <>
      <Nav Slot1={HeaderSlot} />
      <div>{children}</div>
    </>
  );
};

export default MainLayout;

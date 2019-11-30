import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => (
  <Menu
    {...props}
  >
    <a href="/"><h1>home</h1></a>
    <a href="/journal"><h1>journal</h1></a>
    <a href="/timeline"><h1>timeline</h1></a>
    <a href="/showreel"><h1>showreel</h1></a>
    <a href="/portfolio"><h1>portfolio</h1></a>
  </Menu>
);

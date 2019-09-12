import React from 'react';
import SecondHome from '../templates/SecondHome';
import { colors } from '../../config.json';

export default () => (
  <React.Fragment>
    <SecondHome bgColor={colors.darkpurple} textColor={colors.pink} />
    <SecondHome bgColor={colors.darksage} textColor={colors.darkpurple} />
  </React.Fragment>
);

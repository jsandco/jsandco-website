import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import colors from '/imports/commons/colors';

const JSButton = styled(Button)`
  background-color: ${colors.main.black} !important;
  color: ${colors.main.yellow} !important;
`;

export default JSButton;

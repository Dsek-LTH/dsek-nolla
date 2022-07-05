import styled from 'styled-components';
import { DESKTOP_MQ } from '../src/constants';

export const DesktopOnly = styled.div`
  width: 100%;
  display: none;
  ${DESKTOP_MQ} {
    display: block;
  }
`;

export const MobileOnly = styled.div`
  width: 100%;
  display: block;
  ${DESKTOP_MQ} {
    display: none;
  }
`;

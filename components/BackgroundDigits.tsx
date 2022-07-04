import styled from 'styled-components';
import { DESKTOP_MQ } from '../src/constants';

const DigitsStyle = styled.p`
  font-size: 25px;
  line-height: 28px;
  text-align: center;
  color: rgba(242, 128, 161, 0.05);
  position: absolute;
  top: 0;
  left: 0;
  max-width: 390px;
  overflow: hidden;
  ${DESKTOP_MQ} {
    max-height: 1250px;
    max-width: 25rem;
    margin: 6rem 1rem;
  }
`;

export default function BackgroundDigits() {
  return (
    <DigitsStyle>
      01000111011100100110000101110100 01110101101001 0111001100100001
      0010000001000100 011101001000000110100001101001 0111010001110100
      0110000101100100 0110010100100000 0110010101110100 01110100
      0010000001100101 0110000101110011 0111010001100101 0111001000100000
      0110010101100111 01100111 0010000001101000 1100001110100100
      01110010001000000111000011000011 1010010100100000 0111001101101001
      0110010001100001 0110111000101110 0010000001010110 01101001
      0010000001101001 0010000001000100 01010111 01010111 0101011
      01000111011100100110000101110100 01110101101001 0111001100100001
      0010000001000100 011101001000000110100001101001 0111010001110100
      0110000101100100 0110010100100000 0110010101110100 01110100
      0010000001100101 0110000101110011 0111010001100101 0111001000100000
      0110010101100111 01100111 0010000001101000 1100001110100100
      01110010001000000111000011000011 1010010100100000 0111001101101001
      0110010001100001 0110111000101110 0010000001010110 01101001
      0010000001101001 0010000001000100 01010111 01010111 0101011
      01000111011100100110000101110100 01110101101001 0111001100100001
      0010000001000100 011101001000000110100001101001 0111010001110100
      0110000101100100 0110010100100000 0110010101110100 01110100
      0010000001100101 0110000101110011 0111010001100101 0111001000100000
      0110010101100111 01100111 0010000001101000 1100001110100100
      01110010001000000111000011000011 1010010100100000 0111001101101001
      0110010001100001 0110111000101110 0010000001010110 01101001
      0010000001101001 0010000001000100 01010111 01010111 0101011
    </DigitsStyle>
  );
}

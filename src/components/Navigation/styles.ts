import styled from 'styled-components';

export const Container = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 75px;
  background: var(--primary-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  width: 25%;
  margin-left: 1.5ch;
`;

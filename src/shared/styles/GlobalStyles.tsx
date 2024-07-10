import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body{
    font-family: 'AppleSDGothicNeo';
    font-size: 1.6rem;
    word-break: keep-all;
  }

  a{
    text-decoration: none;
    white-space: nowrap;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  // 스크롤바 커스텀
  .y-scroll {
    overflow-y: auto;
    &::-webkit-scrollbar {
    width: 4.5rem;
    
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--color-point-gray-01);
      border-radius: 4.5rem;
      background-clip: padding-box;
      border: 2rem solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }
  .x-scroll {
    overflow-x: auto;
  }

  .x-scroll::-webkit-scrollbar {
    height: 5px;
  }

  .x-scroll::-webkit-scrollbar-thumb {
    height: 30%;
    background: #e3e6ec;
    border-radius: 10px;
  }

  .x-scroll::-webkit-scrollbar-track {
    background: transparent;
  }

`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
      --color-primary: #3F80EA;
      --color-primary-hover: #215AB8;
      --color-secondary: #3F8CFF;
      --color-accent-red : #FF754C;
      --color-accent-yellow: #FFCE73;
      --color-accent-green: #7FBA7A;
      --color-accent-purple: #6C5DD3;
      --color-white-bg: #FFFFFF;

      --color-point-blue: #4C93BF;
      --color-point-red: #FF574C;

      --color-dark-01:  #1B1D21;
      --color-dark-02: #808191;
      --color-dark-03: #B0B0B2;

      --color-text-01: #1B1D21;
      --color-text-02:#808191;
      --color-text-03:  #B0B0B2;
      --color-text-04: #B2B3BD;
      --color-text-05: #778CA2;
      --color-text-white: #FFFFFF;
      --color-text-link: #5F75EE;
      --color-gray: #E4E4E4;
      --color-form: #717171;
      --color-border-01:#EEEEEE;
      --color-border-02: #E3E6EC;
      --color-border-03: #E7E7E7;
      --color-border-04: #B2B3BD;
      --color-border-05: #E4E4E4;
      --color-point-gray-01: #DDE1E8;
      --color-point-gray-02: #F2F4F8;
      --color-point-gray-03: #F5F5F5;
      --color-point-gray-04: #FAFAFA;
      --color-point-gray-05: #F7FAFC;
    /* 필요한 다른 색상들을 추가할 수 있습니다 */
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'AppleSDGothicNeo';
    font-size: 1.6rem;
    word-break: keep-all;
    letter-spacing: -0.05rem;
    overflow-y: auto; 
    color: var(--color-text-01);
  }

  a {
    text-decoration: none;
    white-space: nowrap;
    color: var(--color-text-01);
  }

  button {
    border: 0;
    outline: 0;
    cursor: pointer;
    font-family: inherit;
    letter-spacing: inherit;
    color: var(--color-text-01);
  }

  input:focus,
  textarea:focus {
    outline: none;
  }

  input  {
    font-family: 'AppleSDGothicNeo';
  }

  input::placeholder {
    font-family: 'AppleSDGothicNeo';
    color: var(--color-text-04);
  }

input::-webkit-input-placeholder{
  color: var(--color-text-04);
}

input:-ms-input-placeholder{
  color: var(--color-text-04);
}


  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }

  /* Firefox */
  input[type=number] {
      -moz-appearance: textfield;
  }


  ::-webkit-input-placeholder {
    color: var(--color-text-06);
  }

  :-moz-placeholder {
    color: var(--color-text-06);
  }

  ::-moz-placeholder {
    color: var(--color-text-06);
  }

  :-ms-input-placeholder {
    color: var(--color-text-06);
  }

  .y-scroll {
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 1.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--color-point-gray-01);
      border-radius: 1.5rem;
      background-clip: padding-box;
      border: 0.5rem solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }

  .y-scroll-margin {
    overflow-y: auto;
    margin-right: -2rem;
    &::-webkit-scrollbar {
      width: 1.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--color-point-gray-01);
      border-radius: 1.5rem;
      background-clip: padding-box;
      border: 0.5rem solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }

  div:where(.swal2-icon) {
    border: 0.25em solid rgba(0, 0, 0, 0);

    &.swal2-question {
      border-color: #c9dae1;
      color: #87adbd;
    }
  }
`;

export default GlobalStyle;

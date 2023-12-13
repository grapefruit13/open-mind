import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* color */
    --grayscale-10: #FFFFFF;
    --grayscale-20: #F9F9F9;
    --grayscale-30: #CFCFCF;
    --grayscale-40: #818181;
    --grayscale-50: #515151;
    --grayscale-60: #000000;
    --brown-10: #F5F1EE;
    --brown-20: #E4D5C9;
    --brown-30: #C7BBB5;
    --brown-40: #542F1A;
    --brown-50: #341909;
    --blue-50: #1877F2;
    --yellow-50: #FEE500;
    --red-50: #B93333;

    /* border-box: var(--shadow) */
    --shadow-1pt: 0rem 0.4rem 0.4rem 0rem #8C8C8C40;
    --shadow-2pt: 0rem 0.4rem 0.4rem 0rem #00000040;
    --shadow-3pt: 0rem 1.6rem 2rem 0rem #3030309E;
  };

  * {
    box-sizing: border-box;
    margin: 0;
    font-family: "Pretendard", "Noto Sans KR", sans-serif;
  };

  html,
  body {
    font-size: 62.5%;
    font-feature-settings: 'clig' off, 'liga' off;
    margin: 0;
    background: var(--grayscale-20, #F9F9F9);
  };
    
  a {
    color: inherit;
    text-decoration: none;
  };
`;

export default GlobalStyle;

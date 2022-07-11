import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  :root{
    --primary-color: #6EB4Df;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
body {
 
    overflow-x: hidden;
    color: #fff;
}
a {
    text-decoration: none;
}
a:visited {
    color:white
}
li {
    list-style: none;
}

`;

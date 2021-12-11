import { createGlobalStyle } from "styled-components";
import colors from "./colors";

export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
html{
    @media(max-width: 1080px){
        font-size: 93.75%;
    }
    @media(max-width: 720px){
        font-size: 87.5%;
    }
}
body{
    background: ${colors.background};
    --webkit-font-smoothing: antialiased;
}
body, input, textarea, button{
   font-family:'Poppins' sans-serif ;
   font-weight: 400;
}
h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}

button{
    cursor: pointer
    [disabled]{
        opacity:0.6;
        cursor: not-allowed;
    }
}

.button-close-modal{
    position: absolute;
    right: 1.5rem;
    border:0;
    top: 24px;
    background-color: transparent ;
    transition: .2s;
    &:hover{
        filter: brightness(.8)
    }
}

.rect-modal{
    position: fixed;
    top:0;
    bottom:0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .5);
}
.modal-content{
    width: 100%;
    max-width: 576px;
    background-color:${colors.background} ;
    padding: 3rem;
    position: relative;
    border-radius:.24rem;}


`;

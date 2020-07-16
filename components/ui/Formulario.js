import styled from '@emotion/styled';

export const Formulario=styled.form`
    max-width:400px;
    background-color:white;
    padding: 2rem;
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom:6rem;
`;

export const Campo=styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    padding: 1rem 0;

    /* label focus color */
    .input-field input[type=text]:focus + label {
        color: #000 !important;
    }
    /* label underline focus color */
    .input-field input[type=text]:focus {
        border-bottom: 1px solid #000 !important;
        box-shadow: 0 1px 0 0 #000 !important;
    }
   
    @media(min-width:768px){

    &{
        flex-direction:row;
    }
    label{
        flex:0 0 100px;
    }

    input{
        flex: 1;
    }
    }
`;

export const Boton=styled.button`
    display:block;
    width:100%;
    border:none;
    cursor:pointer;
    background-color: #0091ea;
    color:white;
    padding: 1rem;
    margin-top: 3rem;

    &:hover{
        background-color:#0277bd;
    }

    &::checked{
        background-color:black;
    }

    &:
`;

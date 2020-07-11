import styled from '@emotion/styled';

export const Formulario=styled.form`
    max-width:500px;
    padding: 4rem 0;
    margin: 0 auto;
    margin-bottom:4rem;
`;

export const Campo=styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    padding: 1rem 0;
   
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
    background-color: #00897b;
    color:white;
    padding: 1rem;
    margin-top: 3rem;
`;

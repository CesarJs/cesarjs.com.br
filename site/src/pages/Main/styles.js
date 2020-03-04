import styled  from "styled-components";

export const Title = styled.h1`
    font-size: 24px;
    color: ${props => (props.error ? "darkred" : "#ccc000")};
    font-family: Arial, Helvetica, sans-serif;

    small {
        font-size: 0.5em;
        color: #0989;
    }
`;

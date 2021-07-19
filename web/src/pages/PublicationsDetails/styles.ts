import styled from "styled-components";

export const Details = styled.div`
    max-width: 1100px;
    margin: 0 auto;

    main {
        background: #f2f2f2f2;
        border-radius: 5px;
        max-width: 900px;
        padding: 25px;
        margin: 25px auto 0;
        display: flex;
        flex-direction: column;
        box-shadow: .01rem 0.1rem 1rem rgba(0, 0, 0, 0.05);
        
        h1 {
            text-align: center;
            margin: 15px 0 15px;
            padding: 0 15px;
            color: var(--primary-color);
        }

        p {
            text-align: justify;
            font: 400 16px 'Ubuntu', sans-serif;
            padding: 0 15px;
        }

    }

`;
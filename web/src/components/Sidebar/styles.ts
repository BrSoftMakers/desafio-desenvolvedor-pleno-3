import styled from "styled-components";

export const Sidebar = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;

    img {
        max-width: 210px;
        padding: 5px;

        &:hover {
            filter: brightness(.5);
        }
    }

    .Sidebar {
        display: flex;
        text-decoration: none;
        
        a {
            text-decoration: none;
            font-family: 'Ubuntu', sans-serif;
            font-weight: 500;
            font-size: 16px;
            color: var(--primary-color);
            padding: 5px 15px;
            border-radius: 25px;

            &:hover {
                filter: brightness(.4);
                background: rgba(0, 0, 0, 0.1);
            }
        }

        .Exit {
            &:hover {
                background: red;
                filter: brightness(.9);
                color: white;
            }
        }
    }

    @media(max-width: 750px) {
        flex-direction: column;
    }
`;
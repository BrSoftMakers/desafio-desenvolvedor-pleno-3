import styled from "styled-components";

export const PublicationUser = styled.div`
    max-width: 1100px;
    margin: 0 auto;

    main {
        display: flex;
        flex-direction: column;
        background: var(--white-color);
        padding: 25px;
        border-radius: 4px;
        gap: 25px;

        hr {
            border: 1px solid var(--quartary-color);
            margin-top: 25px;;
        }

        h1 {
            color: var(--primary-color);
        }

        h2 {
            color: var(--quartary-color);
            font-size: 18px;
        }

        .publications-container {
            h2 {
                text-decoration: none;
                color: var(--primary-color);
                cursor: pointer;
                font-size: 22px;

                &:hover {
                    filter: brightness(.2);
                }
            }
            
            p {
                max-height: 40px;
                padding: 15px 5px 25px;
                overflow: hidden;
                text-overflow: ellipsis;

                font-family: 'Ubuntu', sans-serif;
                font-size: 14px;
            }
            margin-bottom: 20px;

        }
    }
`;
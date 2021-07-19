import styled from "styled-components";

export const Create = styled.div`
    max-width: 1100px;
    margin: 0 auto;

    main {
        padding: 0 25px;
        h1 {
            color: var(--primary-color);
        }
        
        form {
            display: flex;
            flex-direction: column;
            margin-top: 15px;

            h2 {
                margin-bottom: 10px;
                color: var(--quartary-color);
            }

            input {
                margin-bottom: 15px;
                height: 35px;
                padding: 0 15px;
                font-size: 18px;
                font-family: 'Ubuntu', sans-serif;
                font-weight: 500;
                font-style: italic;
            }

            textarea {
                padding: 15px;
                font-size: 16px;
                font-family: 'Ubuntu', sans-serif;
                font-weight: 400;
                font-style: italic;
                resize: none;
            }

            button {
                margin: 25px auto 0;
                font-family: 'Ubutnu', sans-serif;
                font-weight: 600;
                font-size: 12px;
                padding: 10px;
                border-radius: 25px;
                width: 250px;
                color: var(--white-color);

                background: var(--primary-color);
                border: 0;
                cursor: pointer;

                transition: .3s;

                &:hover {
                    filter: brightness(.8);
                }
            }
        }
    }
`;
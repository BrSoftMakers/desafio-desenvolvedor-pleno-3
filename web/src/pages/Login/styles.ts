import styled from "styled-components";

export const LoginPage = styled.main`
    height: 100vh;
    max-width: 1100px;
    margin: 0 auto;

    display: flex;
    flex: 2;
    justify-content: center;
    align-items: center;

    img {
        max-height: 320px;
    }

    .login-content {
        margin: 0 auto;
        padding: 35px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 15px;

        img {
            height: 55px;
            width: 255px;
        }
                
        form {
            display: flex;
            flex-direction: column;
            gap: 10px;

            input {
                height: 25px;
                padding: 5px 10px;

                border: 1px solid var(--primary-color);
                color: var(--tertiary-color); 
                font-weight: 400;
                font-size: 14px;
            }

            button {
                font-family: 'Ubutnu', sans-serif;
                font-weight: 600;
                font-size: 12px;
                padding: 10px;
                border-radius: 25px;
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

        .separator {
            font-family: 'Ubuntu', sans-serif;
            font-size: 14px;
            color: #a8a8b3;

            margin: 15px 0;
            display: flex;
            align-items: center;

            &::before {
                content: '';
                flex: 1;
                height: 1px;
                background: #a8a8b3;
                margin-right: 16px;
            }
            &::after {
                content: '';
                flex: 1;
                height: 1px;
                background: #a8a8b3;
                margin-left: 16px;
            }
        }

        a {
            text-align: center;
            text-decoration: none;
            font-family: 'Ubutnu', sans-serif;
            font-weight: 600;
            font-size: 12px;
            padding: 10px;
            border-radius: 25px;
            color: var(--quartary-color);

            background: var(--quintary-color);
            border: 0;
            cursor: pointer;

            transition: .3s;

            &:hover {
                filter: brightness(.8);
            }
        }
    }

    @media(max-width: 805px){
        flex: 1;

        .computerMan {
            display: none;
        }
    }
`;
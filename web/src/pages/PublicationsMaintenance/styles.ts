import styled from "styled-components";

export const PublicationMaintenance = styled.div`
    max-width: 1100px;
    margin: 0 auto;

    main {
        margin: 0 auto;
        max-width: 600px;

        h1 {
                color: var(--primary-color);   
            }

        .pm-content-exclude {
            display: flex;
            align-items: center;
            margin-bottom: 25px;

            button {
                padding: 7px 45px;
                margin-left: 45px;
                border-radius: 25px;
                border: none;
                background: red;
                color: #FFF;
                cursor: pointer;
                font-weight: 600;

                &:hover {
                    filter: brightness(.8);
                }
            }
        }

        .pm-content-alteration {
            
            
            form {
                display: flex;
                flex-direction: column;
                margin-bottom: 25px;


                h2 {
                    color: var(--quartary-color);
                    margin-top: 25px;
                    margin-bottom: 10px;
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
                    color: var(--primary-color);

                    background: var(--quintary-color);
                    border: 0;
                    cursor: pointer;

                    transition: .3s;

                    &:hover {
                        filter: brightness(.8);
                    }
                }

            }
        }
    }
`;
import styled from "styled-components";

export const Posts = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--white-color);
    padding: 25px;
    border-radius: 4px;
    gap: 25px;
    text-align: justify;
    box-shadow: .01rem 0.1rem 1rem rgba(0, 0, 0, 0.05);

    hr {
        border: 1px solid var(--quartary-color);
    }

    h1 {
        color: var(--primary-color);
    }

    .post-content {
        h2 {
            text-decoration: none;
            color: var(--primary-color);
            cursor: pointer;

            &:hover {
                filter: brightness(.2);
            }
        }
        
        p {
            max-height: 50px;
            padding: 0 5px;
            overflow: hidden;
            text-overflow: ellipsis;

            font-family: 'Ubuntu', sans-serif;
            font-size: 14px;
        }
        margin-bottom: 20px;

    }
`;
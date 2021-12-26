import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
    `
        display: flex;
        background-color: #20212c;
        padding: 0.625rem;
        border-radius: 0.625rem;
        margin-bottom: 0.625rem;
        align-items: center;

        input {
            width: 1.563rem;
            height: 1.563rem;
            margin-right: 0.313rem;
        }

        label {
            color: #ccc;
            text-decoration: ${done ? 'line-through' : 'initial'};
        }
`
));

import styled from '@emotion/styled'

const Button = styled.button`
    padding: 1em 3.2em;
    text-transform: uppercase;
    border-radius: 5px;
    transition: scale 100ms ease-in-out;
    text-align: center;
    margin: 20px;
    background-color: var(--main-blue);
    color: white;
    &:hover {
        scale: 1.01;
        box-shadow: 6px 4px 7px #494949;
        background-color: var(--main-lite);
        color: var(--main-blue);
        cursor: pointer;
    }
    &:active {
        color: #fff;
        background-color: var(--main-ltBlue);
    }
`

interface ButtonProps {
    buttonText: string
    onClick: () => void
}

const LinkButton = ({ buttonText, onClick }: ButtonProps) => (
    <Button onClick={onClick}>{buttonText}</Button>
)
export default LinkButton

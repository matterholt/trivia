import styled from '@emotion/styled'
import { Link } from "react-router-dom";


const Container = styled.div`
  padding: 1em 3.2em;
  text-transform: uppercase;
  border-radius: 5px;
  transition: scale 100ms ease-in-out;
  text-align: center;
  margin: 20px;
  background-color: #2c4869;
    color: white;
  &:hover {
    scale: 1.01;
    box-shadow: 6px 4px 7px #494949;
    background-color: #d5d7d9;
    color:#2c4869;
    cursor: pointer;
  }
  &:active{
    color: #fff;
    background-color: #9caabb;
  }
`;

interface LinkButtonProps {
    linkText: string
    toLink : string
    
}

const LinkButton = ({ linkText, toLink }:LinkButtonProps) => (
    
    <Link to={toLink } style={{ textDecoration: 'none' }}>
        <Container>
            {linkText}
        </Container>
    </Link>
    )
export default LinkButton
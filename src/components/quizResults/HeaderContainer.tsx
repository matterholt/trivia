import styled from '@emotion/styled'

const ContainerStyle = styled.header`
    background-color: white;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 150px;
    grid-template-rows: 1fr 50px;
    border-radius: 15px;
    margin: 15px 0;
`

const HeaderContainer = ({ children }: { children: React.ReactNode }) => {
    return <ContainerStyle>{children}</ContainerStyle>
}

export default HeaderContainer

import styled from '@emotion/styled'

const ContainerStyle = styled.div`
background-color:white;
display:flex;

`

const ResultsContainer = ({children}:{children: React.ReactNode}) => {
    return (
        <ContainerStyle>
            {children}
        </ContainerStyle>
        
    )
}

export default ResultsContainer
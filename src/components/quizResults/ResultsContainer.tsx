import styled from '@emotion/styled'

const ContainerStyle = styled.div`
background-color:white;
display:grid;
align-items: center;
justify-items: center;
grid-template-columns: 1fr 150px;
grid-template-rows: 1fr 50px;
border-radius: 5px;

`

const ResultsContainer = ({children}:{children: React.ReactNode}) => {
    return (
        <ContainerStyle>
            {children}
        </ContainerStyle>
        
    )
}

export default ResultsContainer
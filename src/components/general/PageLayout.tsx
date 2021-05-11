import styled from '@emotion/styled'
import { AnswerContextProvider } from '../../context/userAnswerContext'
import BackGround from '../../assets/background_v2.png'

const Layout = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
    font-size: calc(10px + 2vmin);
`

const bgImage = {
    backgroundImage: `url(${BackGround})`,
}
const PageLayout = ({
    children,
}: {
    children: JSX.Element | JSX.Element[]
}) => {
    return (
        <Layout style={bgImage}>
            <AnswerContextProvider>{children}</AnswerContextProvider>
        </Layout>
    )
}
export default PageLayout

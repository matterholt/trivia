import styled from '@emotion/styled'
import { AnswerContextProvider } from '../../context/userAnswerContext'

const Layout = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
    font-size: calc(10px + 2vmin);
    background: rgb(2,0,36);
    background:var(--gradient-color)
`
const PageLayout = ({
    children,
}: {
    children: JSX.Element | JSX.Element[]
}) => {
    return (
        <Layout>
            <AnswerContextProvider>{children}</AnswerContextProvider>
        </Layout>
    )
}
export default PageLayout

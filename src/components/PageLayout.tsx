import styled from '@emotion/styled'

const Layout = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  background-color: var(--main-Color-dark);
`;

const PageLayout= ({ children }:{children: JSX.Element| JSX.Element[]})=> {
  return <Layout >{children}</Layout>;
}
export default PageLayout;
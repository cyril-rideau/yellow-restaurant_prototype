import Nav from "./nav";

const Layout = ({ children, restaurants, seo }) => (
    <>
        <Nav restaurants={restaurants} />
        {children}
    </>
);

export default Layout;
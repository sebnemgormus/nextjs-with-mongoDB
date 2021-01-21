import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Depixen-app</title>
        </Head>
        <Navbar />
        {children}
    </>
)

export default Layout;
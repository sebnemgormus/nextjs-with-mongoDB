import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar">
        <Link href="/new">
            <a className="create">Create note</a>
        </Link>
    </nav>
)

export default Navbar;

const Header = () => {
    return (
        <>
            <header className="site-header">
                {/* Brand Logo */}
                <div className="brand-logo">
                    <a href="#">ParkEasy</a>
                </div>

                {/* Main Navigation */}
                <nav className="main-nav">
                    <ul>
                        <li><a href="#">Home Page</a></li>
                        <li><a href="#">Listing</a></li>
                        <li><a href="#">Lot Details</a></li>
                        <li><a href="#">Space Form</a></li>
                    </ul>
                </nav>

                {/* call to actions */}
                <div className="header-actions">
                    <a href="#" className="btn-login">Log In</a>
                    <a href="#" className="btn-signup">Sign Up</a>

                </div>
            </header>
        </>
    )
}

export default Header
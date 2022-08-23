import './header.css'
function Header(){
    return (
    <header>
        <div className='container'>
            <div className='header-wrapper'>
                <div className='logo'>SHOPY</div>
                <nav>
                    <a href='#'>signup</a>
                    <a href='#'>login</a>
                </nav>
            </div>
        </div>
    </header>    

    )
}
export default Header;
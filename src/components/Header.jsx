import './Header.css'

function Header() {
    return (
        <header>
            <div id='main-header'>
                <h1>Connectify</h1>
                <div>
                    <input id="main-search" type="text" />
                    <button>Search</button>
                </div>
            </div>
            <div>
                <button>SignIn</button>
                <button>SignUp</button>
            </div>
        </header>
    )
}

export default Header;
export default function Navbar() {
    return <nav className="Nav">
        <a href="/" className="site-title">Site Class Name</a>
        <ul id="navbar">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3HA12R7cZa4JcZLMrxFVFsTA_WlB7qE4G6chPU16IEw&s"></img>
            <li>
                <a href="/Home">HOME</a>
                </li>
                <li>
                <a href="/About">About</a>
            </li>
            <li>
                <a href="/Contact">Contact</a>
            </li>
            <li>
                <a href="/Pricing">Pricing</a>
            </li>
        </ul>
        <div id="mobile">
            <i className="fas fa-bar"></i>
        </div>
    </nav>
};


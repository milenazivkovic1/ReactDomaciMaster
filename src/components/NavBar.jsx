import { Link } from 'react-router-dom';
function NavBar({pretrazi}) {
  return (
    <div>
        <nav className="nav">
            <div className="nav__title"><h1>Himovies</h1></div>
                <ul className="nav__list">
                    <li className="nav__item__search"> 

                      <input type="text" id="kriterijum" placeholder="Search.." 
                      name="search" onChange={()=>pretrazi(document.getElementById('kriterijum').value)}/>

                    </li>
                    <li className="nav__item">   <Link to='/'>Home</Link></li>
                    <li className="nav__item"> <Link to='/filmovi'>Movies</Link></li>
                    <li className="nav__item"> <Link to='/listaGledanja'>Watch list</Link></li>
                    <li className="nav__item"> <Link to='/onama'>About us</Link></li>

                </ul>
        </nav>
    </div>
  );
}

export default NavBar;
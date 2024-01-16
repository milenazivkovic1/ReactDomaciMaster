function Film({film, dodaj, mod, izbaci}) {


    return (
     <div className = 'filmovi' >

        <div className="card"   >
        <img src={film.slika} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-title">{film.naziv} </p>
          <p className="card-text">Godina: {film.godina} <br /> 
          Producent: {film.producent} <br/> Glavne uloge: {film.glavneUloge} <br /> Zanr: {film.zanr} <br /> </p>
          
          {mod==1 ?
          <button href="#" className="btnDodaj" onClick={()=>dodaj(film.id)}> Dodaj u listu </button>
          :
          <button href="#" className="btnDodaj" onClick={()=>izbaci(film.id)}> Izbaci iz liste </button>
          }

        </div>
      </div>

    </div>
    );
  }

  export default Film
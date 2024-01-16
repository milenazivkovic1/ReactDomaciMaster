import Film from "./Film";

function ListaGledanja({filmovi, kriterijum, izbaci}) {
    return (
        <div className="listaGledanja">
    <div className="row">
        {kriterijum==""
        ?
        filmovi.map((film)=> <div className="col-sm-3"><Film  key={film.id} film={film}  mod={2} izbaci={izbaci}></Film><br /></div>)
        :
        <>
        {filmovi
        .filter((film)=>film.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((film)=> <div className="col-sm-3"><Film  key={film.id} film={film}  mod={2} izbaci={izbaci}></Film><br /></div>)}
        </>
        }

      </div>
      </div>
    );
  }

  export default ListaGledanja;
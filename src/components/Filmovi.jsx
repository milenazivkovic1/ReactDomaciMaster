import Film from "./Film";

  function Filmovi({filmovi, kriterijum, dodaj}) {
    return (
      <div className="filmovi">
            <div className="row">
            {kriterijum==""
            ?
            filmovi.map((film)=> <div className="col-sm-3"><Film dodaj={dodaj} key={film.id} film={film} mod={1}></Film><br /></div>)
            :
            <>
            {filmovi.filter((film)=>film.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
            .map((film)=> <div className="col-sm-3"><Film dodaj={dodaj} key={film.id} film={film} mod={1}></Film><br /></div>)}
            </>
            }  
            </div>
      </div>

        );

  }

  export default Filmovi
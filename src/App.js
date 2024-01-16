import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import ONama from './components/ONama';
import Footer from './components/Footer';
import Filmovi from './components/Filmovi';
import { useState } from 'react';
import ListaGledanja from './components/ListaGledanja';
import CopyButton from "./components/CopyButton";

function App() {
  const [listaFilmova,setListaF]=useState([]);

  const email = "moviemania@gmail.com";

  const[sviFilmovi] = useState([

    {
        id:1,
        slika: "https://m.media-amazon.com/images/M/MV5BMjM3NjcxNDM4Ml5BMl5BanBnXkFtZTgwMjI4NDIzMzI@._V1_.jpg",
        naziv:"Blade Runner",
        godina:"2017",
        producent:"Denis Villeneuve",
        glavneUloge: "Ryan Gosling, Harrison Ford, Ana de Armas",
        zanr: "Sci-fi, action",
        lista: 0
    },
    {
      id:2,
      slika: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71oka2eUBvL.jpg",
      naziv:"Divergent",
      godina:"2014",
      producent:"Neil Burger",
      glavneUloge: "Shailene Woodley, Theo James, Miles Teller",
      zanr: "Sci-fi",
      lista: 0
    },
    {
      id:3,
      slika: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
      naziv:"Avatar: The Way of Water",
      godina:"2022",
      producent:"James Cameron",
      glavneUloge: "Sam Worthington, Zoe Saldana",
      zanr: "Sci-fi",
      lista: 0
    },
    {
      id:4,
      slika: "https://bensearsonfilm693662377.files.wordpress.com/2022/11/aaaabvd7kpvjftrm57stqesafk4yupmmlledxwyxkv6eo3ej-jy6gyhg47ssbaqgaccxjn-enni8zggbcgosic-cto9wngmlzmizngbrg0ptrmqtqynjji4387nvd5dp2glqc__gvw.jpg?w=450",
      naziv:"Glass Onion: Knives Out ",
      godina:"2022",
      producent:"Rian Johnson",
      glavneUloge: "Kate Hudson, Daniel Craig,Madelyn Cline",
      zanr: "Mystery, Crime",
      lista: 0
    },
    {
      id:5,
      slika: "https://wchsinsight.org/wp-content/uploads/2022/10/IMG_8266-636x900.jpg",
      naziv:"Don't Worry Darling",
      godina:"2022",
      producent:"Olivia Wilde",
      glavneUloge: "Florence Pugh, Olivia Wilde, Chris Pine",
      zanr: "Thriller",
      lista: 0
    },
    {
      id:6,
      slika: "https://imageio.forbes.com/specials-images/imageserve/61116cea2313e8bae55a536a/-Dune-/0x0.jpg?format=jpg&width=960",
      naziv:"Dune",
      godina:"2021",
      producent:" Denis Villeneuve",
      glavneUloge: "Timothée Chalamet, Rebecca Ferguson, Oscar Isaac",
      zanr: "Sci-fi Adventure",
      lista: 0
    },
    {
      id:7,
      slika: "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg",
      naziv:"Knives Out",
      godina:"2019",
      producent:"Rian Johnson",
      glavneUloge: "Daniel Craig,Chris Evans, Ana de Armas",
      zanr: "Mystery, Crime",
      lista: 0
    },
    {
      id:8,
      slika: "http://prolog.rs/upload/article/27834_Ticket%20to%20Paradise%20(2022).jpg",
      naziv:"Ticket To Paradise",
      godina:"2022",
      producent:"Ol Parker",
      glavneUloge: "George Clooney and Julia Roberts",
      zanr: "Romantic Comedy",
      lista: 0
    },



  ]);

  const [krterijumPretrage,setKriterijumPretrage]=useState("");

  function pretrazi(kriterijum){
    setKriterijumPretrage(kriterijum);
  }

  function dodaj(id){
    for(var i=0;i<sviFilmovi.length;i++){
      if(sviFilmovi[i].id==id){
        sviFilmovi[i].lista=1;
      }
    }
    var niz = sviFilmovi.filter((film)=>film.lista==1);
    setListaF(niz);
  }

  function izbaci(id){
    for(var i=0;i<sviFilmovi.length;i++){
      if(sviFilmovi[i].id==id){
        sviFilmovi[i].lista=0;
      }
    }
    var niz = sviFilmovi.filter((film)=>film.lista==1);
    setListaF(niz);
  }

  return (

    <div>
    <BrowserRouter>
        <NavBar pretrazi={pretrazi}></NavBar>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/onama" element={<ONama></ONama>}></Route>
            <Route path="/filmovi" element={<Filmovi kriterijum={krterijumPretrage} filmovi={sviFilmovi} dodaj={dodaj}></Filmovi>}></Route>
            <Route path="/listaGledanja" element={<ListaGledanja kriterijum={krterijumPretrage}  filmovi={listaFilmova} izbaci={izbaci}></ListaGledanja>}></Route>
          </Routes>
     </BrowserRouter>
     <div className="kontejner"> <CopyButton textToCopy={email}/> </div>
     <Footer></Footer>
  </div>
  );
}

export default App;

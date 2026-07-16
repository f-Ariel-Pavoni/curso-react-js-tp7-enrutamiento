import charlieParker from "../assets/img/Charlie_Parker_Birds_and_Diz_768x769.jpg";
import daveBrubeck from "../assets/img/Dave-Brubeck-768x774.jpg";
import johnColtrane from "../assets/img/John-Coltrane-1957-Blue-Train_oo1-768x768.jpg";
import kennyBurrell from "../assets/img/KennyBurrell_MidnightBlue-768x768.jpg";
import evansHall from "../assets/img/Evans_Hall_Undercurrent-768x768.jpg";
import herbieHancock from "../assets/img/Herbie-Hancock-Head-Hunters-768x768.jpg";

const discos = [
  {
    id: 1,
    titulo: "Birds and Diz",
    artista: "Charlie Parker",
    anio: 1952,
    genero: "Bebop",
    sello: "Verve Records",
    precio: 25.0,
    portada: charlieParker,
    descripcion:
      "Un clásico del bebop que reúne a Charlie Parker y Dizzy Gillespie en una de las sesiones más representativas del género.",
    tracklist: [
      { numero: 1, titulo: "Bloomdido" },
      { numero: 2, titulo: "Melancholy Baby" },
      { numero: 3, titulo: "Relaxing With Lee" },
      { numero: 4, titulo: "Passport" },
      { numero: 5, titulo: "Leap Frog" },
      { numero: 6, titulo: "An Oscar For Treadwell" },
      { numero: 7, titulo: "Mohawk" },
      { numero: 8, titulo: "Visa" },
    ],
  },

  {
    id: 2,
    titulo: "Time Out",
    artista: "Dave Brubeck Quartet",
    anio: 1959,
    genero: "Cool Jazz",
    sello: "Columbia Records",
    precio: 55.0,
    portada: daveBrubeck,
    descripcion:
      "Uno de los discos de jazz más influyentes de todos los tiempos, famoso por incluir el éxito 'Take Five'.",
    tracklist: [
      { numero: 1, titulo: "Blue Rondo à la Turk" },
      { numero: 2, titulo: "Strange Meadow Lark" },
      { numero: 3, titulo: "Take Five" },
      { numero: 4, titulo: "Three To Get Ready" },
      { numero: 5, titulo: "Kathy's Waltz" },
      { numero: 6, titulo: "Everybody's Jumpin'" },
      { numero: 7, titulo: "Pick Up Sticks" },
    ],
  },

  {
    id: 3,
    titulo: "Blue Train",
    artista: "John Coltrane",
    anio: 1957,
    genero: "Hard Bop",
    sello: "Blue Note",
    precio: 70.7,
    portada: johnColtrane,
    descripcion:
      "El único álbum de John Coltrane como líder para Blue Note y una referencia imprescindible del hard bop.",
    tracklist: [
      { numero: 1, titulo: "Blue Train" },
      { numero: 2, titulo: "Moment's Notice" },
      { numero: 3, titulo: "Locomotion" },
      { numero: 4, titulo: "I'm Old Fashioned" },
      { numero: 5, titulo: "Lazy Bird" },
    ],
  },

  {
    id: 4,
    titulo: "Midnight Blue",
    artista: "Kenny Burrell",
    anio: 1963,
    genero: "Blues Jazz",
    sello: "Blue Note",
    precio: 60.6,
    portada: kennyBurrell,
    descripcion:
      "Una combinación perfecta de jazz y blues, considerada una de las mejores grabaciones de Kenny Burrell.",
    tracklist: [
      { numero: 1, titulo: "Chittlins Con Carne" },
      { numero: 2, titulo: "Mule" },
      { numero: 3, titulo: "Soul Lament" },
      { numero: 4, titulo: "Midnight Blue" },
      { numero: 5, titulo: "Wavy Gravy" },
      { numero: 6, titulo: "Gee Baby Ain't I Good To You" },
      { numero: 7, titulo: "Saturday Night Blues" },
    ],
  },

  {
    id: 5,
    titulo: "Undercurrent",
    artista: "Bill Evans & Jim Hall",
    anio: 1962,
    genero: "Cool Jazz",
    sello: "United Artists",
    precio: 77.1,
    portada: evansHall,
    descripcion:
      "Una de las colaboraciones más célebres entre Bill Evans y el guitarrista Jim Hall, caracterizada por su delicadeza e improvisación.",
    tracklist: [
      { numero: 1, titulo: "My Funny Valentine" },
      { numero: 2, titulo: "I Hear A Rhapsody" },
      { numero: 3, titulo: "Dream Gypsy" },
      { numero: 4, titulo: "Romain" },
      { numero: 5, titulo: "Skating In Central Park" },
      { numero: 6, titulo: "Darn That Dream" },
    ],
  },

  {
    id: 6,
    titulo: "Head Hunters",
    artista: "Herbie Hancock",
    anio: 1973,
    genero: "Jazz Fusion",
    sello: "Columbia Records",
    precio: 505.55,
    portada: herbieHancock,
    descripcion:
      "Uno de los discos más vendidos de la historia del jazz, donde Herbie Hancock fusiona jazz, funk y música electrónica.",
    tracklist: [
      { numero: 1, titulo: "Chameleon" },
      { numero: 2, titulo: "Watermelon Man" },
      { numero: 3, titulo: "Sly" },
      { numero: 4, titulo: "Vein Melter" },
    ],
  },
];

export default discos;

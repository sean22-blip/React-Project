import oggyMovie from "../assets/oggyMovie.png"
import tj from "../assets/tj.png"
import spongebb from "../assets/spongebb.png"
import simpsonmovie from "../assets/simpsonmovie.png"
import ppmovie from "../assets/ppmovie.png"

export const movieList = [
  {
    id: 1,
    title: "Oggy",
    image: oggyMovie,
    alt: "oggy",
    heading: "A cat and three cockroaches – a household that was never meant to be shared… Yet no matter what, they always find their way back!",
    description1: `In a neat and tidy home, life should be simple and peaceful. It's a cozy house on a quiet street — exactly how Oggy likes it. But the moment he settles in for a relaxing day, Joey, Dee Dee, and Marky come crawling out of the walls with chaos on their minds and Oggy's fridge in their sights! Oggy must get rid of the cockroaches — yet no matter how many traps, brooms, or desperate schemes he comes up with, those three little pests always find a way to turn his life upside down. One smack with a flyswatter, one mistimed stumble, and the whole house becomes a disaster zone…`,
    description2: `Can a cat ever truly get rid of three cockroaches? A timeless story about the never-ending battle between a loveable blue cat and the mischievous little bugs who always stay one step ahead.`,
  },
  {
    id: 2,
    title: "Tom and Jerry",
    image: tj,
    alt: "tom and jerry",
    heading: "A cat and a mouse – a rivalry that was never meant to end… Yet no matter what, they always find their way back!",
    description1: `In a neat and tidy home, life should be simple and peaceful. It's a cozy house on a quiet street — exactly how Tom likes it. But the moment he settles in for a relaxing day, Jerry comes scurrying out of his mouse hole with mischief on his mind and Tom's patience on the line! Tom must catch the mouse — yet no matter how many traps, brooms, or desperate schemes he comes up with, that one little pest always finds a way to turn his life upside down. One swing of a frying pan, one mistimed stumble, and the whole house becomes a disaster zone…`,
    description2: `Can a cat ever truly catch one mouse? A timeless story about the never-ending battle between a loveable house cat and the clever little mouse who always stays one step ahead.`,
  },
  {
    id: 3,
    title: "SpongeBob",
    image: spongebb,
    alt: "spongebob",
    heading: "A sponge and his friends – a life under the sea that was never meant to be ordinary… Yet no matter what, the fun never stops!",
    description1: `In the colorful and bustling city of Bikini Bottom, life should be simple and carefree. It's a pineapple house on a quiet seafloor — exactly how SpongeBob SquarePants likes it. But the moment he ties his square pants and heads to the Krusty Krab, chaos is never far behind! Whether it's his grumpy neighbor Squidward, his dim-witted best friend Patrick, or the scheming Plankton trying to steal the secret Krabby Patty formula — SpongeBob must navigate the wildest, silliest adventures the ocean has to offer. One jellyfishing trip, one mistimed spatula flip, and the whole town becomes a disaster zone…`,
    description2: `Can a fry cook ever truly have a normal day in Bikini Bottom? A timeless story about the never-ending adventures of the world's most optimistic sponge and the unforgettable friends who make every moment anything but boring.`,
  },
  {
    id: 4,
    title: "The Simpsons",
    image: simpsonmovie,
    alt: "the simpsons",
    heading: "A man, his family, and a town that was never meant to make sense… Yet no matter what, they always find their way back to each other!",
    description1: `In the perfectly imperfect town of Springfield, life should be simple and predictable. It's a two-story house on Evergreen Terrace — exactly how Homer J. Simpson likes it, as long as there's a couch, a TV, and a cold Duff Beer within reach. But the moment he settles in for a lazy afternoon, chaos is never far behind! Whether it's his mischievous son Bart pulling another prank, his brainy daughter Lisa challenging everything he knows, his patient wife Marge holding the family together by a thread, or his boss Mr. Burns making life at the Springfield Nuclear Power Plant a daily nightmare — Homer must stumble through it all with a donut in hand. One "D'oh!", one ill-fated scheme, and the whole town becomes a disaster zone…`,
    description2: `Can a nuclear safety inspector ever truly have a quiet life in Springfield? A timeless story about the never-ending misadventures of America's most loveable oaf and the extraordinary family that somehow makes it all work.`,
  },
  {
    id: 5,
    title: "Pink Panther",
    image: ppmovie,
    alt: "pink panther",
    heading: "A pink panther and a bumbling inspector – a rivalry that was never meant to be solved… Yet no matter what, the mystery always continues!",
    description1: `In the elegant and sophisticated streets of Paris, life should be calm and refined. It's a glamorous city of lights — exactly the kind of place where The Pink Panther glides through with effortless cool and a sly smile. But the moment he slinks around the next corner, the relentless and hopelessly incompetent Inspector Clouseau is never far behind! Whether it's a botched investigation, a mistaken identity, or yet another priceless Pink Panther diamond gone missing — Clouseau must crack the case, yet every scheme, disguise, and dramatic deduction only leads to more spectacular failure. One misplaced magnifying glass, one catastrophic stumble, and the whole city of Paris becomes a disaster zone…`,
    description2: `Can an inspector ever truly outsmart the most elusive panther in the world? A timeless story about the never-ending cat-and-mouse game between a coolly mysterious pink cat and the world's most confidently clueless detective.`,
  },
]

export const availableList = [
  { id: 1, title: "Oggy", available: true },
  { id: 2, title: "Tom and Jerry", available: true },
  { id: 3, title: "Pink Panther", available: true },
  { id: 4, title: "Spongebob", available: true },
]

export const comingSoon = [
  { id: 1, title: "Scooby-Doo", available: false },
  { id: 2, title: "Looney Tunes", available: false },
  { id: 3, title: "Ben 10", available: false },
  { id: 4, title: "The Flintstones", available: false },
  { id: 5, title: "Courage the Cowardly Dog", available: false },
]

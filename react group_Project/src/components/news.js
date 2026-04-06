// newsData.js
import Oggy2 from "../assets/ep_img/Oggy5.jpg";
import Oggy3 from "../assets/ep_img/Oggy3.jpg";
import Tom1 from "../assets/ep_img/Tom1.jpg";
import Tom2 from "../assets/ep_img/Tom2.jpg";
import Simpson1 from "../assets/ep_img/Simpson1.jpg";
import PinkPanther1 from "../assets/ep_img/PinkPanther6.jpg";
import PinkPanther2 from "../assets/ep_img/PinkPanther2.jpg";
import SpongeBob1 from "../assets/ep_img/SpongeBob1.jpg";
import SpongeBob2 from "../assets/ep_img/SpongeBob2.jpg";

export const newsData = [
  {
    id: 1,
    date: "New",
    title: 'Episode 8 of "Oggy" has been released!',
    image: Oggy2,
    description: "Enjoy the latest episode featuring fun adventures and hilarious moments with Oggy and his friends.",
    onWatch: () => window.open("https://youtu.be/N4H8ZKl2LnI") 
  },
  {
    id: 2,
    date: "New",
    title: "Tom and Jerry has been released!",
    image: Tom1,
    description: "Enjoy the latest episode featuring Tom and Jerry adventures.",
    onWatch: () => window.open("https://youtu.be/t0Q2otsqC4I")
  },
  {
    id: 3,
    date: "New",
    title: "Simpson has been released!",
    image: Simpson1,
    description: "Enjoy the latest episode featuring Simpson and his family.",
    onWatch: () => window.open("https://youtu.be/ZE_NzmEehH8")
  },
  {
    id: 4,
    date: "New",
    title: "spongeBob has been released!",
    image: SpongeBob1,
    description: "Enjoy the latest episode featuring SpongeBob and his underwater adventures.",
    onWatch: () => window.open("https://youtu.be/4q56LYs-Lsc?si=I6tTsWw6q2dudy3E")
  },
  {
    id: 5,
    date: "New",
    title: "Tom and Jerry has been released!",
    image: Tom2,
    description: "Enjoy the latest episode featuring Tom and Jerry adventures.",
    onWatch: () => window.open("https://youtu.be/t0Q2otsqC4I")
    
  },
  {
    id: 6,
    date: "New",
    title: "Pink Panther",
    image: PinkPanther1,
    description: "Enjoy the latest Pink Panther episode full of fun and mischief.",
    onWatch: () => window.open("https://youtu.be/JAD9e-cDb-Y")

  }
];
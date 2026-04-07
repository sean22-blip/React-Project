import Oggy1 from "../assets/ep_img/Oggy1.jpg"
import Oggy2 from "../assets/ep_img/Oggy2.jpg"
import Oggy3 from "../assets/ep_img/Oggy3.jpg"
import Oggy4 from "../assets/ep_img/Oggy4.jpg"
import Oggy5 from "../assets/ep_img/Oggy5.jpg"
import Oggy6 from "../assets/ep_img/Oggy6.jpg"
import Oggy7 from "../assets/ep_img/Oggy7.jpg"
import Oggy8 from "../assets/ep_img/Oggy8.jpg"
import Oggy9 from "../assets/ep_img/Oggy9.jpg"
import Oggy10 from "../assets/ep_img/Oggy10.jpg"
import Oggy11 from "../assets/ep_img/Oggy11.jpg"
import Oggy12 from "../assets/ep_img/Oggy12.jpg"
import Oggy13 from "../assets/ep_img/Oggy13.jpg"
import Oggy14 from "../assets/ep_img/Oggy14.jpg"
import Oggy15 from "../assets/ep_img/Oggy15.jpg"

import PinkPanther1 from "../assets/ep_img/PinkPanther1.jpg"
import PinkPanther2 from "../assets/ep_img/PinkPanther2.jpg"
import PinkPanther3 from "../assets/ep_img/PinkPanther3.jpg"
import PinkPanther4 from "../assets/ep_img/PinkPanther4.jpg"
import PinkPanther5 from "../assets/ep_img/PinkPanther5.jpg"
import PinkPanther6 from "../assets/ep_img/PinkPanther6.jpg"
import PinkPanther7 from "../assets/ep_img/PinkPanther7.jpg"
import PinkPanther8 from "../assets/ep_img/PinkPanther8.jpg"
import PinkPanther9 from "../assets/ep_img/PinkPanther9.jpg"
import PinkPanther10 from "../assets/ep_img/PinkPanther10.jpg"
import PinkPanther11 from "../assets/ep_img/PinkPanther11.jpg"
import PinkPanther12 from "../assets/ep_img/PinkPanther12.jpg"
import PinkPanther13 from "../assets/ep_img/PinkPanther13.jpg"
import PinkPanther14 from "../assets/ep_img/PinkPanther14.jpg"
import PinkPanther15 from "../assets/ep_img/PinkPanther15.jpg"

import Simpson1 from "../assets/ep_img/Simpson1.jpg"
import Simpson2 from "../assets/ep_img/Simpson2.jpg"
import Simpson3 from "../assets/ep_img/Simpson3.jpg"
import Simpson4 from "../assets/ep_img/Simpson4.jpg"
import Simpson5 from "../assets/ep_img/Simpson5.jpg"
import Simpson6 from "../assets/ep_img/Simpson6.jpg"
import Simpson7 from "../assets/ep_img/Simpson7.jpg"
import Simpson8 from "../assets/ep_img/Simpson8.jpg"
import Simpson9 from "../assets/ep_img/Simpson9.jpg"
import Simpson10 from "../assets/ep_img/Simpson10.jpg"

import SpongeBob1 from "../assets/ep_img/SpongeBob1.jpg"
import SpongeBob2 from "../assets/ep_img/SpongeBob2.jpg"
import SpongeBob3 from "../assets/ep_img/SpongeBob3.jpg"
import SpongeBob4 from "../assets/ep_img/SpongeBob4.jpg"
import SpongeBob5 from "../assets/ep_img/SpongeBob5.jpg"
import SpongeBob6 from "../assets/ep_img/SpongeBob6.jpg"
import SpongeBob7 from "../assets/ep_img/SpongeBob7.jpg"
import SpongeBob8 from "../assets/ep_img/SpongeBob8.jpg"
import SpongeBob9 from "../assets/ep_img/SpongeBob9.jpg"
import SpongeBob10 from "../assets/ep_img/SpongeBob10.jpg"

import Tom1 from "../assets/ep_img/Tom1.jpg"
import Tom2 from "../assets/ep_img/Tom2.jpg"
import Tom3 from "../assets/ep_img/Tom3.jpg"
import Tom4 from "../assets/ep_img/Tom4.jpg"
import Tom5 from "../assets/ep_img/Tom5.jpg"
import Tom6 from "../assets/ep_img/Tom6.jpg"
import Tom7 from "../assets/ep_img/Tom7.jpg"
import Tom8 from "../assets/ep_img/Tom8.jpg"
import Tom9 from "../assets/ep_img/Tom9.jpg"
import Tom10 from "../assets/ep_img/Tom10.jpg"



const createSeason = (startId, images, totalEpisodes = 10) => {
  return Array.from({ length: totalEpisodes }, (_, i) => ({
    id: startId + i + 1,
    title: `Episode ${i + 1}`,
    img: images[i % images.length], 
  }));
};
const oggyImages1 = [Oggy14,Oggy3, Oggy5, Oggy7, Oggy9,];
const oggyImages2 = [Oggy2,Oggy3, Oggy6, Oggy10, Oggy11];
const oggyImages3 = [Oggy13,Oggy4, Oggy7, Oggy14, Oggy15];
const oggyImages4 = [Oggy7,Oggy6, Oggy8, Oggy9, Oggy12];
const oggyImages5 = [Oggy5,Oggy8, Oggy10, Oggy13, Oggy14];

const pinkImages1 = [PinkPanther1, PinkPanther2, PinkPanther3, PinkPanther4, PinkPanther5];
const pinkImages2 = [PinkPanther15, PinkPanther12, PinkPanther13, PinkPanther8, PinkPanther5];
const pinkImages3 = [PinkPanther11, PinkPanther6, PinkPanther9, PinkPanther4, PinkPanther15];
const pinkImages4 = [PinkPanther14, PinkPanther12, PinkPanther3, PinkPanther6, PinkPanther5];
const pinkImages5 = [PinkPanther10, PinkPanther9, PinkPanther2, PinkPanther4, PinkPanther8];

const simpsonImages1 = [Simpson1, Simpson2,Simpson3,Simpson4,Simpson5];
const simpsonImages2 = [Simpson6, Simpson7,Simpson8,Simpson9,Simpson10];
const simpsonImages3 = [Simpson5, Simpson4,Simpson3,Simpson2,Simpson1];
const simpsonImages4 = [Simpson6, Simpson1,Simpson8,Simpson3,Simpson9];
const simpsonImages5 = [Simpson7, Simpson2,Simpson9,Simpson4,Simpson10];

const spongeImages1 = [SpongeBob1,SpongeBob2, SpongeBob3, SpongeBob4,SpongeBob5];
const spongeImages2 = [SpongeBob6,SpongeBob7, SpongeBob8, SpongeBob9,SpongeBob10];
const spongeImages3 = [SpongeBob5,SpongeBob4, SpongeBob3, SpongeBob2,SpongeBob1];
const spongeImages4 = [SpongeBob10,SpongeBob9, SpongeBob8, SpongeBob7,SpongeBob6];
const spongeImages5 = [SpongeBob1,SpongeBob6, SpongeBob3, SpongeBob8,SpongeBob5];

const tomImages1 = [Tom1,Tom2,Tom3,Tom4,Tom5];
const tomImages2 = [Tom6,Tom7,Tom8,Tom9,Tom10];
const tomImages3 = [Tom5,Tom4,Tom3,Tom2,Tom1];
const tomImages4 = [Tom10,Tom9,Tom8,Tom7,Tom6];
const tomImages5 = [Tom1,Tom6,Tom3,Tom8,Tom5];

export const movie = {
  "Oggy and the Cockroaches": {
    video: "https://youtu.be/Vtq-VWlDOSU?si=oxIIgNf8Lxondnq3",
    "Season 1": createSeason(0, oggyImages1),
    "Season 2": createSeason(10, oggyImages2),
    "Season 3": createSeason(20, oggyImages3),
    "Season 4": createSeason(30, oggyImages4),
    "Season 5": createSeason(40, oggyImages5),
  },
  "Tom and Jery": {
    video:  "https://youtu.be/giO_iq5Xe_c?si=WT7CAx6U7xpP0c04",
    "Season 1": createSeason(10, tomImages1),
    "Season 2": createSeason(110, tomImages2),
    "Season 3": createSeason(120, tomImages3),
    "Season 4": createSeason(130, tomImages4),
    "Season 5": createSeason(140, tomImages5),
},
  "SpongeBob": {
    video: "https://youtu.be/4q56LYs-Lsc?si=S1o2LAi3aZplxswU",
    "Season 1": createSeason(210, spongeImages1),
    "Season 2": createSeason(210, spongeImages2),
    "Season 3": createSeason(220, spongeImages3),
    "Season 4": createSeason(230, spongeImages4),
    "Season 5": createSeason(240, spongeImages5),
},
  "Homer J. Simpson": {
    video:  "https://youtu.be/gFHI5CDlubQ?si=XQUXQROMiOHRuUAe",
    "Season 1": createSeason(300, simpsonImages1),
    "Season 2": createSeason(310, simpsonImages2),
    "Season 3": createSeason(320, simpsonImages3),
    "Season 4": createSeason(330, simpsonImages4),
    "Season 5": createSeason(340, simpsonImages5),
  },
  "Pink Panther": {
    video: "https://youtu.be/WDrAKCf6_Sg?si=uOqeXATSikQ442cB",
    "Season 1": createSeason(400, pinkImages1),
    "Season 2": createSeason(410, pinkImages2),
    "Season 3": createSeason(420, pinkImages3),
    "Season 4": createSeason(430, pinkImages4),
    "Season 5": createSeason(440, pinkImages5),
  },
};
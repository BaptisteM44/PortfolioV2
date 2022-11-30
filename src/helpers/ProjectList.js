import Proj1 from "../assets/proj1.jpg";
// import Proj1logo from "../assets/P1logo.png"
import Proj1page from "../assets/proj1page.png"
import Proj2 from "../assets/proj2.webp";
import Proj2logo from "../assets/P2logo.webp"
import Proj2page from "../assets/P2page.png";
// import Proj3 from "../assets/P3"
import Proj3logo from "../assets/P3logo.png"
import Proj3page from "../assets/P3page.png"

// import Images from "../assets/"

function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
   const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

export const ProjectList = [
    {
        name: "Le Blaireau",
        image: Proj1,
        image2: "./P1logo",
        image3: Proj1page,
        date: "2022",
        category: "Vitrine",
        context: "Freelance",
        link: "https://leblaireau-barbier.fr/",
        info: "Showcase site to promote a barber / hairdresser. Display of rates and services, as well as the online booking link.",
        info2: "Fromscratch site , HTML / CSS / SASS"
    },
    {
        name: "Le bon pain",
        image: Proj2,
        image2: Proj2logo,
        image3: Proj2page,
        date: "2022",
        category: "Vitrine",
        context: "Freelance",
        link: "https://baptistem44.github.io/l-autre-pain/",
        info: "Showcase site to promote a organic baker.",
        info2: "Fromscratch site , HTML / CSS / SASS / GREENSOCK"
    },
    {
        name: "Portfolio V1",
        image: Proj3logo,
        image2: Proj3logo,
        image3: Proj3page,
        date: "2022",
        context: "Freelance",
        link: "https://baptistem44.github.io/portfolio2022/",
        category: "Portfolio",
        info: "First Portfolio made with Figma, first try GreenSock's library",
        info2: "Fromscratch site , HTML / CSS / SASS / GREENSOCK"
    },
    {
        name: "Social network",
        image: "https://picsum.photos/1000/1200",
        date: "2021",
        context: "Freelance",
        category: "Learn Project",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        info2: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
]
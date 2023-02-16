import Proj1 from "../assets/proj1.webp";
import Proj1logo from "../assets/P1logo.webp"

import Proj2 from "../assets/proj2.webp";
import Proj2logo from "../assets/P2logo.webp"

import Proj3 from "../assets/proj3.webp"
import Proj3logo from "../assets/P3logo.webp"

import Proj4 from "../assets/proj4.webp";
import Proj4logo from "../assets/P4logo.webp"

import Proj5 from "../assets/proj5.webp";
import Proj5logo from "../assets/P5logo.webp"

import Proj6 from "../assets/proj6.jpeg";
import Proj6logo from "../assets/P6logo.png"

export const ProjectList = [
    {
        id: "Nemoya",
        name: "Nemoya",
        image: Proj6,
        image2: Proj6logo,
        date: "2023",
        context: "Freelance",
        category: "Freelance",
        link: "https://candid-medovik-6747d8.netlify.app/",
        info: "Last project for a digital agency name Nemoya. Presentation of this company.",
        info2: "Fromscratch site , HTML / SASS / REACT / GSAP"
    },
    {
        id: "Lautrepain",
        name: "L'autre pain",
        image: Proj2,
        image2: Proj2logo,
        date: "2022",
        category: "Showcase",
        context: "Freelance",
        link: "https://baptistem44.github.io/l-autre-pain/",
        info: "Showcase site to promote an organic baker.",
        info2: "Fromscratch site , HTML / CSS / SASS / GREENSOCK"
    },
    {
        id: "LeBlaireau",
        name: "Le Blaireau",
        image: Proj1,
        image2: Proj1logo,
        date: "2022",
        category: "Showcase",
        context: "Freelance",
        link: "https://leblaireau-barbier.fr/",
        info: "Showcase site to promote a barber / hairdresser. Display of rates and services, as well as the online booking link.",
        info2: "Fromscratch site , HTML / CSS / SASS"
    },
    {
        
        name: "Portfolio V1",
        id: "Portfolio",
        image: Proj3,
        image2: Proj3logo,
        date: "2022",
        context: "Freelance",
        link: "https://baptistem44.github.io/portfolio2022/",
        category: "Portfolio",
        info: "First Portfolio made with Figma, mobile first.",
        info2: "Fromscratch site , HTML / CSS / SASS / JAVASCRIPT"
    },
    {
        id: "Ohmyfood",
        name: "Ohmyfood",
        image: Proj4,
        image2: Proj4logo,
        date: "2021",
        category: "Study Project",
        context: "Freelance",
        link: "https://baptistem44.github.io/projet-3-ohmyfood/",
        info: "This is the second project from OpenClassrooms. Ohmyfood, is mobile-first app, that allows you to book a table in a restaurant and choose your menu before arriving, so everything is ready when you come.",
        info2: "This project is a multi-pages, mobile-first integration, with HTML and CSS. Again, no Javascript. The goal here, was to get our hands on CSS animations."
    },
    {
        id: "SocialNetwork",
        name: "Social network",
        image: Proj5,
        image2: Proj5logo,
        date: "2022",
        context: "Freelance",
        category: "Study Project",
        link: "https://github.com/BaptisteM44/groupomaniaP7",
        info: "Groupomania was my last project, provided by OpenClassrooms. This is a small social app for an enterprise. You can create your account, write some posts with/without images. See, like, and comment other people's posts.",
        info2: "This project is a fullstack app. The front part is coded with React. Back-end is coded with NodeJS, Express, and Sequelize. The database is an SQL database."
    },
]
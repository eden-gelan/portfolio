
export const links = [
    {
        name: "About",
        href: "/about",
        isA: false
    },

    {
        name: "Resume",
        href: "/resume",
        isA: true
    },


] as const;
export const projectsData = [
    {
        title: "Teraki app",
        description:
            "mobi",
        tags: ["React", "Express.js", "MongoDB", "Tailwind", "RTK query"],
        imageUrl: '/images/home4.png',
        href: '/teraki'
    },
    {
        title: "5Kilo Bookclub",
        description:
            "This is the first project i made after I learn tailwind css. ",
        tags: ["React", "Tailwind", "Context api"],
        imageUrl: '/images/home2.png',

        href: '/book-club'
    },
    {
        title: "Sink",
        description:
            "Vent is website where users can talk about what they feel. It has many features including saving vent, liking, supporting, filtering user.",
        tags: ["React", "Redux toolkit", "Express.js", "Material UI", "MongoDB"],
        imageUrl: '/images/home1.png',

        href: '/sink'
    },
    {
        title: "Utopia",
        description:
            "This was school project. it is made for tourists where they can find place to visit",
        tags: ["React", "Express.js", "MongoDB", "Bootstarp",],
        imageUrl: '/images/home3.png',
        href: '/utopia'
    },
    {
        title: "Kebena",
        description:
            "This was school project. it is made for tourists where they can find place to visit",
        tags: ["React", "Express.js", "MongoDB", "Bootstarp",],
        imageUrl: '/images/p32.png',
        href: '/kebena'
    },

    

] as const;

export const MobileAppsData =[
    {
        title: "Teraki",
        
        imageUrl: '/images/p13.png',
        href: 'https://github.com/eden-gelan/Teraki'
    },

    {
        title: "Felagi",
        
        imageUrl: '/images/p30.png',
        href: 'https://github.com/eden-gelan/Felagi'


    },

    {
        title: "Farmer app",
        
        imageUrl: '/images/p31.png',
        href: 'https://github.com/eden-gelan/Mobile-Dev'

    }
] as const;

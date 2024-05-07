
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
        title: "Girl",
        
        imageUrl: '/images/Girl -50.jpg',
        
    },

    {
        title: "Tower",
        
        imageUrl: '/images/Tower-50.jpg',
       


    },

    {
        title: "Bottle",
        
        imageUrl: '/images/Bottle-50.jpg',
       

    },
    {
        title: "Man",
        
        imageUrl: '/images/Project2.jpg',
       

    },
    {
        title: "Product poster",
        
        imageUrl: '/images/Project1.jpg',
       

    }
] as const;

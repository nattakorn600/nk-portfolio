import { ProjectType, ExperienceType, SkillType } from "./definition";

const skillsData: SkillType[] = [
    {
        icon: 'skills/html.svg',
        skill: 'HTML5',
    },
    {
        icon: 'skills/css.svg',
        skill: 'CSS',
    },
    {
        icon: 'skills/next.svg',
        skill: 'NextJS',
    },
    {
        icon: 'skills/javascript.svg',
        skill: 'JavaScript',
    },
    {
        icon: 'skills/typescript.svg',
        skill: 'TypeScript',
    },
    {
        icon: 'skills/react.svg',
        skill: 'React',
    },
    {
        icon: 'skills/php.svg',
        skill: 'PHP',
    },
    {
        icon: 'skills/postgresql.svg',
        skill: 'PostgreSQL',
    },
    {
        icon: 'skills/mysql.svg',
        skill: 'MySQL',
    },
    {
        icon: 'skills/plsql.svg',
        skill: 'PLSQL',
    },
    {
        icon: 'skills/sqlserver.svg',
        skill: 'SQL Server',
    },
    {
        icon: 'skills/dotnet.svg',
        skill: '.Net',
    },
    {
        icon: 'skills/csharp.svg',
        skill: 'C#',
    },
    {
        icon: 'skills/c.svg',
        skill: 'C',
    },
    {
        icon: 'skills/python.svg',
        skill: 'Python',
    },
    {
        icon: 'skills/tailwindcss.svg',
        skill: 'Tailwind CSS',
    },
    {
        icon: 'skills/git.svg',
        skill: 'GIT',
    },
    {
        icon: 'skills/figma.svg',
        skill: 'Figma',
    },
    {
        icon: 'skills/xamarin.svg',
        skill: 'Xamarin',
    },
    {
        icon: 'skills/bootstrap.svg',
        skill: 'Bootstrap',
    },
    {
        icon: 'skills/postman.svg',
        skill: 'Postman',
    },
    {
        icon: 'skills/excelvba.svg',
        skill: 'Excel VBA',
    },
    {
        icon: 'skills/nodejs.svg',
        skill: 'NodeJS',
    },
];

const experiencesData: ExperienceType[] = [
    {
        period: '2022 - 2024',
        jobtitle: 'Developer',
        company: 'Raceku Thai Co., Ltd.',
        descriptions: [
            `Developed and customized ERP modules according to specifications including maintaining both the native version and cloud versions of the application.`,
            `Perform integration between ERP applications and other applications with RESTful APIs.`,
            `Create report layout using Crystal Reports and IFS Report Designer tools and integrate with applications to print out reports.`,
            `Work outsource and collaborate with the customer and other outsourcing teams to customize and upgrade the customer's ERP application version.`,
            `Improve manual financial calculation and accounting reports of customers existing in Microsoft Excel to automate the calculation and provide reports using VBA.`,
            `Upgrade the PHP version of a customer’s existing web application. and correct any errors that occurred during the upgrade.`,
            `Troubleshoot technical issues and debug errors related to application development and customization.`,
        ],
    },
    {
        period: '2021 - 2022',
        jobtitle: 'Freelance',
        descriptions: [
            `Health Application: Developed a web-based health application to consult and chat with doctors. Designed, coded, and tested including website, chat system, payment, and package solution.`,
            `Shopping Platform: Developed a mobile application platform for sellers and buyers to post and sell goods on the platform. The website will display the search results based on the nearby seller and buyer location using Google Map API service.`,
            `Maid And Goods Service: Developed a mobile application to provide housekeeper services with cleaning equipment. Including packages, payment system, web GUI, database, chat system, and satisfaction survey. Using Google Map API service to specify the service location.`,
        ],
    },
    {
        period: '2021',
        jobtitle: 'Internship - IT engineer',
        company: 'Possible Automation Co., Ltd.',
        descriptions: [
            `Developed a web-based inventory system to use within the company. Designed and created database and website, also tested the system.`,
            `Designed and developed a mobile payment application and developed the system on Arduino ESP32 to generate QR codes to receive payment.`,
            `Developed a Windows application to count and record parts using web cameras.`,
        ],
    },
];

const projectsData: ProjectType[] = [
    {   title: 'Movie Rating', 
        img: '/projects/blankranking.png', 
        description: 'A website that surveys ratings for each movie. It collects the opinions and scores of people who participate in ratting and calculates it as a rating.',
        languages: [
            'PHP',
            'JavaScript',
            'Css',
            'HTML',
            'MySQL',
        ],
        youtube: 'https://www.youtube.com/watch?v=6X3rkJjOr2o',
        github: 'https://github.com/nattakorn600/BlankRanking.git'
    },
    {   title: 'Computer Shop', 
        img: '/projects/amidaweb.png', 
        description: 'Computer shop website that collects many computer accessories to choose from.',
        languages: [
            'PHP',
            'JavaScript',
            'Css',
            'HTML',
            'MySQL',
        ],
        youtube: 'https://www.youtube.com/watch?v=KpSgsrWl39w',
        github: 'https://github.com/nattakorn600/AmidaWeb.git'
    },
    {   title: 'Circus Charlie', img: '/projects/circuscharlie.png', 
        description: 'Circus Charlie game uses C# language to write in console style.',
        languages: [
            'C#',
            'Console',
        ],
        youtube: 'https://www.youtube.com/watch?v=OSapji_Aw1k',
        github: 'https://github.com/nattakorn600/CircuscharlieGame.git'
    },
    {   title: 'Maid Application', img: '/projects/cleanplus.png', 
        description: 'An application that collects housewives So that customers can call for maid service from the application.',
        languages: [
            'C#',
            'Java',
            'Xamarin',
            'PHP',
            'Json',
            'MySQL',
        ],
        youtube: 'https://www.youtube.com/watch?v=J1Xfx-ZR-kY&t=7s',
        github: 'https://github.com/nattakorn600/CleanPlusMobileApp.git'
    },
    {   title: 'Arduino Project', img: '/projects/embededsys.png', 
        description: 'Project used to study the operation of embedded system using arduino.',
        languages: [
            'Arduino',
            'C',
        ],
        youtube: 'https://www.youtube.com/watch?v=DoulBCVZfOs',
    },
    {   title: 'Frogger Game', img: '/projects/frogger.png', 
        description: 'The 2D game project is written in C# using the Monogame framework.',
        languages: [
            'C#',
            'Monogame',
        ],
        youtube: 'https://www.youtube.com/watch?v=mbJLcKVVCM8',
        github: 'https://github.com/nattakorn600/FroggerGame.git'
    },
    {   title: 'Restaurant Platform', img: '/projects/orderme.png', 
        description: 'The Restaurant platform facilitates customers to order food from and search for restaurants from the platform.',
        languages: [
            'Xamarin',
            'C#',
            'PHP',
            'Json',
            'Java',
            'MySQL',
        ],
        youtube: 'https://www.youtube.com/watch?v=vAX8wddsRtA',
        github: 'https://github.com/nattakorn600/Orderme.git'
    },
    {   title: 'Shop Platform', img: '/projects/shopnear.png', 
        description: 'Shop platform that gathers nearby participating stores into the platform and can order from the platform.',
        languages: [
            'Xamarin',
            'C#',
            'PHP',
            'Json',
            'Java',
            'MySQL',
        ],
        youtube: 'https://www.youtube.com/watch?v=L1emIEG70h8',
        github: 'https://github.com/nattakorn600/ShopnearApp.git'
    },
    {   title: 'Python Game', img: '/projects/stepmove.png', 
        description: 'First time writing a program This is a project that I used to study beginner programming in the python language.',
        languages: [
            'Tkinter',
            'Python',
        ],
        youtube: 'https://www.youtube.com/watch?v=AKL9476ftJU&t=3s',
        github: 'https://github.com/nattakorn600/PythonStepmove.git',
    },
];

module.exports = {
    projectsData,
    experiencesData,
    skillsData,
};
import img1 from '../assets/portfolio/1-Game-Degenheim.jpg'
import img3 from '../assets/portfolio/3-Game-Vivat.jpg'
import img4 from '../assets/portfolio/4-Film-OMS.jpg'
import img5 from '../assets/portfolio/5-TV-Series-Volha.jpg'
import img6 from '../assets/portfolio/6-Netflix-Dubbing-CABINET.jpg'
import img7 from '../assets/portfolio/7-AK-Mlcet.jpg'
import img8 from '../assets/portfolio/8-Comms-CVUT-Vianoce.jpg'
import img9 from '../assets/portfolio/9-Film-Repulse.jpg'

interface ProjectData {
    id: number;
    projectName: string;
    projectType: string;
    role: string;
    imgSrc: string;
    imgAlt: string;
    year: string;
    client?: string;
    web: string;
    note?: string;
    description: string;
    video?: string;
};

export const projectsData: ProjectData[] = [
    {
        id: 1,
        projectName: 'degenheim',
        projectType: 'video game',
        role: 'Sound Design, Audio and Music Implementation, Voice Acting, Mix',
        imgSrc: img1,
        imgAlt: 'Degenheim',
        year: '2023',
        client: 'Highrise Studios',
        web: 'https://degenheim.com/',
        description: 'Dive into a world gone limitlessly mad and slash your way out through hordes of enemies in an action-packed isometric rogue-lite title, where every run offers a unique experience and challenge.',
        video: 'https://www.youtube.com/watch?v=t-7ZVClQDjw'
    },
    {
        id: 2,
        projectName: 'Vivat Slovakia',
        projectType: 'video game',
        role: 'Sound Design, Audio and Music Implementation, Voice Acting, Mix',
        imgSrc: img3,
        imgAlt: 'Vivat Slovakia',
        year: '2023',
        client: 'Team Vivat',
        web: 'https://vivatslovakia.sk/',
        description: 'Vivat Slovakia is an open-world video game set in the freshly established country at the border of Eastern Europe, Slovakia. As old norms are still present, the enforcement agencies are weak and corruption is widespread.',
        video: 'https://www.youtube.com/watch?v=JjHSFntLN-c'
    },
    {
        id: 3,
        projectName: 'ONEMANSHOW: The Movie',
        projectType: 'film',
        role: 'Dialog Edit, SFX Edit',
        imgSrc: img4,
        imgAlt: 'ONEMANSHOW: The Movie',
        year: '2023',
        web: 'https://onemanshow.cz/',
        note: 'Post-Production was done in Studio Beep.',
        description: 'The film was linked to a contest with possibility of winning a 22 million CZK, which viewers can enter after purchasing a ticket. It reportedly led some moviegoers to buy tickets repeatedly to increase their chances of winning.',
        video: 'https://www.youtube.com/watch?v=PV3Q8BZmq7s'
    },
    {
        id: 4,
        projectName: 'Volha',
        projectType: 'TV Series',
        role: 'Dialog Edit',
        imgSrc: img5,
        imgAlt: 'Volha',
        year: '2023',
        web: 'https://www.imdb.com/title/tt27259817/',
        note: 'Post-Production was done in Studio Beep.',
        description: 'Standa Pekárek finishes compulsory military service and becomes a chauffeur at communist Czech TV in 1971 dreaming of his own Volga (Volha). Willing to do anything to fulfill his dream he agrees to be a spy under code-name Volha.',
        video: 'https://www.youtube.com/watch?v=6OjSbentTGE'
    },
    {
        id: 5,
        projectName: 'Guillermo del Toro\'s Cabinet of Curiosities',
        projectType: 'TV Series',
        role: 'Dubbing Edit and Mix',
        imgSrc: img6,
        imgAlt: 'Cabinet of Curiosities',
        year: '2022',
        web: 'https://www.imdb.com/title/tt8415836/?ref_=fn_al_tt_1',
        note: 'Post-Production was done in Studio Beep.',
        description: 'Cabinet of Curioisites is a horror anthology streaming television series created by Guillermo del Toro for Netflix. It features eight modern horror stories in the traditions of the Gothic and Grand Guignol genres.',
        video: 'https://www.youtube.com/watch?v=k0C8X73JS-s'
    },
    {
        id: 6,
        projectName: 'Mlčet jako hrob (Hushed Up)',
        projectType: 'Audiobook (Czech)',
        role: 'Recording, Edit, Mix',
        imgSrc: img7,
        imgAlt: 'Hushed Up',
        year: '2022',
        web: 'https://www.audiolibrix.com/cs/Directory/Book/12885/Audiokniha-Mlcet-jako-hrob-Lone-Theilsova',
        note: 'Post-Production was done in Studio Beep.',
        description: 'Hushed Up is the fourth book in Lone Theil\'s nerve-wracking crime series about Nora Sand, which this time has to try to help a large number of young girls being abused. As earlier, the current Nora Sand crime novel cover a nasty case based on real events.',
        video: ''
    },
    {
        id: 7,
        projectName: 'Merry Christmas ČVUT',
        projectType: 'spot',
        role: 'SFX Edit, Mix',
        imgSrc: img8,
        imgAlt: 'CVUT',
        year: '2022',
        web: 'https://www.youtube.com/watch?v=wiE7GfN358s',
        description: 'The Faculty of Electrical Engineering of the CTU in Prague wishes you a Merry Christmas and much success, health and energy in 2022!',
        video: 'https://www.youtube.com/watch?v=wiE7GfN358s'
    },
    {
        id: 8,
        projectName: 'Repulse',
        projectType: 'film',
        role: 'SFX Edit',
        imgSrc: img9,
        imgAlt: 'Repulse',
        year: '2021',
        web: 'https://www.imdb.com/title/tt14188996/',
        note: 'Post-Production was done in Studio Beep.',
        description: 'A dark drama starring an unexpectedly maniacal Stepán Kozub and an unstable heroine played by Pavla Gajdosíková.',
        video: 'https://www.youtube.com/watch?v=ADTN2XDKA5A'
    }
];

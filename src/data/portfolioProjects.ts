import img1 from '../assets/portfolio/1-Game-Degenheim.jpg'
import img2 from '../assets/portfolio/2-Game-Vivat.jpg'
import img3 from '../assets/portfolio/3-Film-OMS.jpg'
import img4 from '../assets/portfolio/4-TV-Series-Volha.jpg'
import img5 from '../assets/portfolio/5-Netflix-Dubbing-CABINET.jpg'
import img6 from '../assets/portfolio/6-AK-Mlcet.jpg'
import img7 from '../assets/portfolio/7-Comms-CVUT-Vianoce.jpg'
import img8 from '../assets/portfolio/8-Film-Repulse.jpg'

interface ProjectData {
    id: number;
    projectName: string;
    projectType: string;
    role: string;
    imgSrc: string;
    imgAlt: string;
    year: string;
    client: string;
    web: string;
    description: string;
    video: string;
};

export const projectsData: ProjectData[] = [
    {
        id: 1,
        projectName: 'degenheim',
        projectType: 'game',
        role: 'role',
        imgSrc: img1,
        imgAlt: 'Degenheim',
        year: '2023',
        client: 'highrise studios',
        web: 'https://degenheim.com/',
        description: 'lorem ipsum dolor sit amet, adipisicing elit, hipsum, choco afogatto turntable lol',
        video: 'https://www.youtube.com/watch?v=t-7ZVClQDjw'
    },
    {
        id: 2,
        projectName: 'vivat slovakia',
        projectType: 'game',
        role: 'role',
        imgSrc: img2,
        imgAlt: 'Vivat Slovakia',
        year: '2023',
        client: 'highrise studios',
        web: 'https://degenheim.com/',
        description: 'lorem ipsum dolor sit amet, adipisicing elit, hipsum, choco afogatto turntable lol',
        video: 'https://www.youtube.com/watch?v=t-7ZVClQDjw'
    },
    {
        id: 3,
        projectName: 'OMS',
        projectType: 'film',
        role: 'role',
        imgSrc: img3,
        imgAlt: 'OMS',
        year: '2023',
        client: 'highrise studios',
        web: 'https://degenheim.com/',
        description: 'lorem ipsum dolor sit amet, adipisicing elit, hipsum, choco afogatto turntable lol',
        video: 'https://www.youtube.com/watch?v=t-7ZVClQDjw'
    },
    {
        id: 4,
        projectName: 'volha',
        projectType: 'tv series',
        role: 'role',
        imgSrc: img4,
        imgAlt: 'Volha',
        year: '2023',
        client: 'highrise studios',
        web: 'https://degenheim.com/',
        description: 'lorem ipsum dolor sit amet, adipisicing elit, hipsum, choco afogatto turntable lol',
        video: 'https://www.youtube.com/watch?v=t-7ZVClQDjw'
    },
    {
        id: 5,
        projectName: 'project name',
        projectType: 'type',
        role: 'role',
        imgSrc: img5,
        imgAlt: 'Dubbing',
        year: '2023',
        client: 'highrise studios',
        web: 'https://degenheim.com/',
        description: 'lorem ipsum dolor sit amet, adipisicing elit, hipsum, choco afogatto turntable lol',
        video: 'https://www.youtube.com/watch?v=t-7ZVClQDjw'
    },
    {
        id: 6,
        projectName: 'project name',
        projectType: 'type',
        role: 'role',
        imgSrc: img6,
        imgAlt: 'Mlcet',
        year: '2023',
        client: 'highrise studios',
        web: 'https://degenheim.com/',
        description: 'lorem ipsum dolor sit amet, adipisicing elit, hipsum, choco afogatto turntable lol',
        video: 'https://www.youtube.com/watch?v=t-7ZVClQDjw'
    },
    {
        id: 7,
        projectName: 'project name',
        projectType: 'type',
        role: 'role',
        imgSrc: img7,
        imgAlt: 'CVUT',
        year: '2023',
        client: 'highrise studios',
        web: 'https://degenheim.com/',
        description: 'lorem ipsum dolor sit amet, adipisicing elit, hipsum, choco afogatto turntable lol',
        video: 'https://www.youtube.com/watch?v=t-7ZVClQDjw'
    },
    {
        id: 8,
        projectName: 'project name',
        projectType: 'type',
        role: 'role',
        imgSrc: img8,
        imgAlt: 'Repulse',
        year: '2023',
        client: 'highrise studios',
        web: 'https://degenheim.com/',
        description: 'lorem ipsum dolor sit amet, adipisicing elit, hipsum, choco afogatto turntable lol',
        video: 'https://www.youtube.com/watch?v=t-7ZVClQDjw'
    }
];

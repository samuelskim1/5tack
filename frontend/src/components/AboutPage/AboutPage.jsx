import './AboutPage.scss';
import shankim from './shankim.jpg';
import garyhor from './garyhor.jpg';
import samkim from './samkim.jpg';
import milnerchen from './milnerchen.jpg';
import AboutCard from './AboutCard';
import { useSelector } from 'react-redux';

const AboutPage = () => {

    const currentUser = useSelector(state => state.session?.user);

    const teamMembers = [
        {
            name: "Sam Kim",
            role: "Team Lead",
            image: samkim,
            email: "samsjkim1@gmail.com",
            github: "https://github.com/samuelskim1",
            linkedin: "https://www.linkedin.com/in/samuel-kim-3b4935206"
        },
        {
            name: "Milner Chen",
            role: "Flex Engineer",
            image: milnerchen,
            email: "milnerchen0@gmail.com",
            github: "https://github.com/milner-chen",
            linkedin: "https://www.linkedin.com/in/milner-chen-841330216/"
        },
        {
            name: "Shan Kim",
            role: "Backend Lead",
            image: shankim,
            email: "shankim35@gmail.com",
            github: "https://github.com/shank35",
            linkedin: "https://www.linkedin.com/in/shan-kim/"
        },
        {
            name: "Gary Hor",
            role: "Frontend Lead",
            image: garyhor,
            email: "garyhor95@gmail.com",
            github: "https://github.com/g-hor",
            linkedin: "https://www.linkedin.com/in/garyhor65/"
        }
    ];

    return (
        <>
        <div id='about-container'>
            <div id='auth-cards-background' style={!currentUser ? {minHeight: 'calc(100vh - 100px)'} : {minHeight: ''}}>
                <div>
                    <div>
                        <AboutCard info={teamMembers[0]} />
                        <AboutCard info={teamMembers[1]} />
                    </div>
                    <div>
                        <AboutCard info={teamMembers[2]} />
                        <AboutCard info={teamMembers[3]} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutPage
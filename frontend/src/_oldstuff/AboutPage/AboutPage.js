import shankim from './shankim.jpg';
import garyhor from './garyhor.jpg';
import samkim from './samkim.jpg';
import milnerchen from './milnerchen.jpg';
import './AboutPage.scss';
import { useEffect } from 'react';

const AboutPage = () => {

  const teamMembers = [
    {
      name: "Sam Kim",
      role: "Team Lead",
      image: samkim,
      bio: "I am an aspiring software engineer passionate about creating innovative solutions and enhancing user experiences. With a strong foundation in web development and a keen interest in emerging technologies, I am always eager to learn and grow as a professional. My goal is to contribute to projects that make a positive impact on people's lives.",
      email: "samsjkim1@gmail.com",
      github: "https://github.com/samuelskim1",
      linkedin: "https://www.linkedin.com/in/samuel-kim-3b4935206"
    },
    {
      name: "Milner Chen",
      role: "Flex Engineer",
      image: milnerchen,
      bio: "I am an aspiring software engineer passionate about creating innovative solutions and enhancing user experiences. With a strong foundation in web development and a keen interest in emerging technologies, I am always eager to learn and grow as a professional. My goal is to contribute to projects that make a positive impact on people's lives.",
      email: "milnerchen0@gmail.com",
      github: "https://github.com/milner-chen",
      linkedin: "https://www.linkedin.com/in/milner-chen-841330216/"
    },
    {
      name: "Shan Kim",
      role: "Backend Lead",
      image: shankim,
      bio: "I am an aspiring software engineer passionate about creating innovative solutions and enhancing user experiences. With a strong foundation in web development and a keen interest in emerging technologies, I am always eager to learn and grow as a professional. My goal is to contribute to projects that make a positive impact on people's lives.",
      email: "shankim35@gmail.com",
      github: "https://github.com/shank35",
      linkedin: "https://www.linkedin.com/in/shan-kim/"
    },
    {
      name: "Gary Hor",
      role: "Frontend Lead",
      image: garyhor,
      bio: "I am an aspiring software engineer passionate about creating innovative solutions and enhancing user experiences. With a strong foundation in web development and a keen interest in emerging technologies, I am always eager to learn and grow as a professional. My goal is to contribute to projects that make a positive impact on people's lives.",
      email: "garyhor95@gmail.com",
      github: "https://github.com/g-hor",
      linkedin: "https://www.linkedin.com/in/garyhor65/"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="aboutPageContainer">
      <h1>Meet Our Team</h1>
      <div className="aboutContainer">
        {teamMembers.map((member) => (
          <div className="team-member" key={member.name} >
            <img src={member.image} alt={member.name} style={{width: member.width, height: member.height}} />
            <h2>{member.name}</h2>
            <p className="member-role">{member.role}</p>
            <p className="member-email">{member.email}</p>
            <div className="social-buttons">
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;

import shankim from './shankim.jpg';
import garyhor from './garyhor.jpg';
import samkim from './samkim.jpg';
// import milnerchen from '';
import './AboutPage.scss';

const AboutPage = () => {

  const teamMembers = [
    {
      name: "Gary Hor",
      bio: "Frontend Lead",
      image: garyhor,
      width: "150px",
      height: "150px"
    },
    {
      name: "Shan Kim",
      bio: "Backend Lead",
      image: shankim,
      width: "150px",
      height: "150px"
    },
    {
      name: "Sam Kim",
      bio: "Team Lead",
      image: samkim,
      width: "150px",
      height: "150px"
    },
    {
      name: "Milner Chen",
      bio: "Flex",
      image: "",
      width: "150px",
      height: "150px"
    }
  ];

  return (
    <div>
      <h1>Meet Our Team</h1>
      {teamMembers.map((member) => (
        <div key={member.name}>
          <img src={member.image} alt={member.name} style={{width: member.width, height: member.height}} />
          <h2>{member.name}</h2>
          <p>{member.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutPage;

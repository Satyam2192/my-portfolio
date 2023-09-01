import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

const experiences = [
  {
    id: 1,
    date: "2023 - Present",
    title: "Web Development Lead",
    company_name: "Tech Solutions Inc.",
    icon: "/images/company-logo-1.png",
    iconBg: "#F472B6",
    points: [
      "Led a team of developers in creating a cutting-edge web application.",
      "Implemented new features and improved existing ones.",
      "Worked closely with designers to create a seamless user experience.",
    ],
  },
  {
    id: 2,
    date: "2022 - 2023",
    title: "Frontend Developer",
    company_name: "Software Co.",
    icon: "/images/company-logo-2.png",
    iconBg: "#60A5FA",
    points: [
      "Developed user interfaces for web applications.",
      "Collaborated with backend developers to integrate frontend with server-side logic.",
      "Worked on performance optimization and responsive design.",
    ],
  },
  // Add more experiences as needed
];

const ExperienceCard = ({ item }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  // const transitions = useTransition(show, null, {
  //   from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
  //   enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
  //   leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
  //   config: config.wobbly,
  // });

  return transitions.map(({ item, key, props }) =>
    item && (
      <animated.div key={key} style={props} className="rounded-lg shadow-lg p-6 space-y-4">
        <div className="flex items-center space-x-4">
          <img
            src={item.icon}
            alt="Company Logo"
            className="w-12 h-12 bg-white p-2 rounded-full"
            style={{ backgroundColor: item.iconBg }}
          />
          <div>
            <div className="font-bold text-xl">{item.title}</div>
            <div className="text-sm">{item.company_name}</div>
            <div className="text-sm">{item.date}</div>
          </div>
        </div>
        <ul className="list-disc list-inside">
          {item.points.map((point, index) => (
            <li key={index} className="text-sm">
              {point}
            </li>
          ))}
        </ul>
      </animated.div>
    )
  );
};

const Experience = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-10 text-white max-w-4xl">
        <h1 className="text-5xl font-bold">My Experiences</h1>
        <div className="grid grid-cols-1 gap-6">
          {experiences.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

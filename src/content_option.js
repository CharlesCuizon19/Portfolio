import charles from "./assets/images/charles2.png";
import vts_img from "./assets/images/manpro-logo.png"
import flexperience from "./assets/images/flexperience.jpg";

const logotext = "CAC";
const meta = {
    title: "Charles Cuizon | Portfolio",
    description: "Charles Angelo Cuizon — Full Stack Developer skilled in Laravel, React, and HTML. Recent BSIT graduate ready to build impactful web applications.",
};

const introdata = {
    title: "I’m Charles Angelo Cuizon",
    animated: {
        first: "Laravel | React | HTML Developer",
        second: "Junior Web Developer",
        third: "Let's build something awesome!",
    },
    description:
        "A recent Bachelor of Science in Information Technology graduate equipped with industry-relevant skills in software development, web technologies, and problem-solving. I specialize in Laravel, React, and clean code practices.",
    your_img_url: charles,
};

const dataabout = {
    title: "A bit about myself",
    aboutme:
        "I’m Charles Angelo Cuizon, a fresh IT graduate from STI College of Davao. I am passionate about full stack development, and have built systems like a vehicle tracking system and maintained a payroll system during my internship. I am also a public speaking champion, competitive in tech contests, and determined to grow professionally.",
};

const worktimeline = [
    {
        jobtitle: "Web Developer Intern",
        where: "Infinity Hub Digital Marketing, Davao City",
        date: "Feb 2025 – May 2025",
    },
];

const skills = [
    { name: "HTML / CSS / Tailwind", value: 100 },
    { name: "React.js", value: 85 },
    { name: "Laravel", value: 80 },
    { name: "Javascript", value: 80 },
    { name: "Figma / Canva / Photoshop", value: 70 },
    { name: "Desktop Hardware Repair", value: 70 },
];

const services = [
    {
        title: "Web Development",
        description:
            "Full stack web development using Laravel for the backend and React.js for the frontend with responsive, user-centered design.",
    },
    {
        title: "UI/UX Design",
        description:
            "Designing clean and functional interfaces using Figma, Canva, and Adobe Photoshop.",
    },
    {
        title: "Hardware Troubleshooting",
        description:
            "Basic hardware diagnostics and desktop unit repairs, both for academic and personal projects.",
    },
];

const dataportfolio1 = [
    {
        img: vts_img,
        description: "Vehicle Tracking System built during internship.",
        link: "http://tracker.manpromanagement.com",
    },
];
const dataportfolio2 = [
    {
        img: flexperience,
        description: "Vehicle Tracking System built during internship.",
        link: "http://tracker.manpromanagement.com",
    },
];

const contactConfig = {
    YOUR_EMAIL: "charlescuizon2003@gmail.com",
    YOUR_FONE: "09487546224",
    description:
        "I’m always open to new opportunities and collaborations. Let’s work together to build something impactful!",
};

const socialprofils = {
    // github: "https://github.com", // Add actual GitHub if available
    facebook: "https://www.facebook.com/charles.cuizon.1/",
    linkedin: "https://www.linkedin.com/in/charles-cuizon-8aa7761a5/",
    instagram: "https://www.instagram.com/chrlsanglo/",
};

export {
    meta,
    dataabout,
    dataportfolio1,
    dataportfolio2,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
 
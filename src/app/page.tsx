// "use client";
// import 'font-awesome/css/font-awesome.min.css';
// import { useEffect, useState } from "react";


// const ScrollIndicator = () => {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const updateProgressBar = () => {
//       const scroll = window.scrollY;
//       const height = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (scroll / height) * 100;
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", updateProgressBar);
//     return () => window.removeEventListener("scroll", updateProgressBar);
//   }, []);

//   return (
//     <div className="scroll-progress-container">
//       <div className="scroll-progress-bar" style={{ height: `${scrollProgress}%` }} />
//     </div>
//   );
// };

// const scrollToSection = (id: string) => {
//   const element = document.getElementById(id);
//   if (element) {
//     element.scrollIntoView({ behavior: "smooth" });
//   }
// };

// export default function Evgenija() {
//   const [binaries, setBinaries] = useState<{ id: number; value: string; x: number; y: number }[]>([]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBinaries((prev) => [
//         ...prev,
//         {
//           id: Math.random(),
//           value: Math.random() > 0.5 ? "1" : "0",
//           x: Math.random() * 100, 
//           y: Math.random() * 100, 
//         },
//       ]);

//       setTimeout(() => {
//         setBinaries((prev) => prev.slice(1)); 
//       }, 1500);
//     }, 200);

//     return () => clearInterval(interval);
//   }, []);

//   const ProjectCard = ({ title, description, image, url }: { title: string; description: string; image: string; url: string }) => {
//     return (
//       <div className="project-card fade-in">
//         <img src={image} alt={title} className="project-image" />
//         <div className="project-content">
//           <h3>{title}</h3>
//           <p>{description}</p>
//           <a href={url} target="_blank" rel="noopener noreferrer" className="project-button">
//             View Project
//           </a>
//         </div>
//       </div>
//     );
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//           } else {
//             entry.target.classList.remove("visible");
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     const fadeElements = document.querySelectorAll(".fade-in");
//     fadeElements.forEach((el) => observer.observe(el));

//     return () => fadeElements.forEach((el) => observer.unobserve(el));
//   }, []);

//   const [fullname, setFullname] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState([]);
//   const [success, setSuccess] = useState(false)

//   const handleSubmit = async (e: { preventDefault: () => void; }) => {
//     e.preventDefault()

//     const res = await fetch ('api/contact', {
//       method: "POST",
//       headers: {
//         "content-type": "application/json"
//       },
//       body: JSON.stringify({
//         fullname,
//         email,
//         message
//       })
//     })

//     const {msg, success} = await res.json()
//     setError(msg)
//     setSuccess(success)

//     if (success) {
//       setFullname('');
//       setEmail('');
//       setMessage('');
//   }
//   }

//   return (
    
//     <div className="main-container">
  

//       {/* Scroll Progress Bar */}
//       <ScrollIndicator />

//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="header">
//           <h1 className="fade-in">
//             Hi, I'm Evgenija, a front-end <span className="typing">developer</span>
//           </h1>
//         </div>

//         {/* Download CV Button */}
//   <a href="/EvgenijaCV.pdf" download className="download-btn">
//     Download CV
//   </a>

//         {/* Scroll Down Arrow */}
//         <div className="scroll-down" onClick={() => scrollToSection("projects")}>
//           ↓
//         </div>

//         {/* Full-Screen Binary Animation */}
//         <div className="binary-container">
//           {binaries.map((bin) => (
//             <span key={bin.id} className="binary" style={{ left: `${bin.x}%`, top: `${bin.y}%` }}>
//               {bin.value}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="projects-section">
//         <h2>My Projects</h2>
//         <div className="project-list">
//           <ProjectCard
//             title="ChatOrbit"
//             description="Just a simple little chat app I built with Next.js and the Gemini API. You type, the bot responds—nothing too fancy, just a fun way to mess around with AI conversations."
//             image="/project1.png"
//             url="https://first-chatbot-ai.vercel.app/"
//           />
//           <ProjectCard
//             title="Your Daily Quote"
//             description="A random quote generator because, why not? It pulls quotes from an API and gives you something new every time. Could be inspiring, could be completely random—either way, it’s something different with each click."
//             image="/project2.png"
//             url="https://quote-generator-app-ten.vercel.app/"
//           />
//         </div>
//       </section>
//       <div className="page-divider"></div>

//       {/* Language Section */}

//       <section id="language" className="language-section ">
//   <h3 className='techText'>Technologies I Use</h3>
//   <div className="language-list">
//     <div className="language-card">
//     <img src="/html.svg" alt="HTML" className="icon" />
//       <h4>HTML</h4>
//     </div>
//     <div className="language-card">
//     <img src="/css.svg" alt="CSS" className="icon" />
//       <h4>CSS</h4>
//     </div>
//     <div className="language-card">
//     <img src="/js.svg" alt="JS" className="icon" />
//       <h4>JavaScript</h4>
//     </div>
//     <div className="language-card">
//     <img src="/react.svg" alt="REACT" className="icon" />
//       <h4>React</h4>
//     </div>
//     <div className="language-card">
//     <img src="/scss.svg" alt="SCSS" className="icon" />
//       <h4>SCSS</h4>
//     </div>
//     <div className="language-card">
//     <img src="/ts.svg" alt="TS" className="icon" />
//       <h4>TypeScript</h4>
//     </div>
//     <div className="language-card">
//     <img src="/git.svg" alt="GIT" className="icon" />
//       <h4>Git</h4>
//     </div>
//     <div className="language-card">
//     <img src="/bootstrap.svg" alt="BOOSTRAP" className="icon" />
//       <h4>Bootstrap</h4>
//     </div>
//   </div>
// </section>
// <div className="page-divider"></div>

// {/* Contact Section */}
// <div className="contact-container">
//   <section id="contact" className="contact-section">
//     <h4>Contact Me</h4>
//     <p className='contact-p'>Please fill in the form below</p>
//     <form onSubmit={handleSubmit}>
//       <div className='fullnameInput'>
//         <label htmlFor="fullname">Full name</label>
//         <input onChange={e => setFullname(e.target.value)} value={fullname} type="text" id='fullname' placeholder='Your Name'/>
//       </div>

//       <div className='emailInput'>
//         <label htmlFor='email' id='email'>Email</label>
//         <input onChange={e => setEmail(e.target.value)} value={email} type="text" id='email' placeholder='Your Email' />
//       </div>

//       <div className='messageInput'>
//         <label htmlFor='message' id='message'>Message</label>
//         <textarea onChange={e => setMessage(e.target.value)} value={message} id="message" placeholder='Type your message here...'></textarea>
//       </div>

//       <button type='submit'>Send</button>
//     </form>

//     <div className={`errorSection ${success ? "successMsg" : "errorMsg"}`}>
//       {error && error.map((e, index) => (
//         <div key={index} className="message">
//           {e}
//         </div>
//       ))}
//     </div>
//   </section>
// </div>

//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgressBar = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scroll / height) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateProgressBar);
    return () => window.removeEventListener("scroll", updateProgressBar);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div className="scroll-progress-bar" style={{ height: `${scrollProgress}%` }} />
    </div>
  );
};

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Evgenija() {
  const [binaries, setBinaries] = useState<{ id: number; value: string; x: number; y: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBinaries((prev) => [
        ...prev,
        {
          id: Math.random(),
          value: Math.random() > 0.5 ? "1" : "0",
          x: Math.random() * 100, 
          y: Math.random() * 100, 
        },
      ]);

      setTimeout(() => {
        setBinaries((prev) => prev.slice(1)); 
      }, 1500);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const ProjectCard = ({ title, description, image, url }: { title: string; description: string; image: string; url: string }) => {
    return (
      <div className="project-card fade-in">
        <img src={image} alt={title} className="project-image" />
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="project-button">
            View Project
          </a>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => observer.observe(el));

    return () => fadeElements.forEach((el) => observer.unobserve(el));
  }, []);

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string[]>([]);  // Explicitly set the type to string[]
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);  // Add loading state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);  // Set loading state to true

    const res = await fetch('api/contact', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ fullname, email, message })
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
    setLoading(false);  // Set loading state to false

    if (success) {
      setFullname('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="main-container">

      {/* Scroll Progress Bar */}
      <ScrollIndicator />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="header">
          <h1 className="fade-in">
            Hi, I'm Evgenija, a front-end <span className="typing">developer</span>
          </h1>
        </div>

        {/* Download CV Button */}
        <a href="/EvgenijaCV.pdf" download className="download-btn">
          Download CV
        </a>

        {/* Scroll Down Arrow */}
        <div className="scroll-down" onClick={() => scrollToSection("projects")}>
          ↓
        </div>

        {/* Full-Screen Binary Animation */}
        <div className="binary-container">
          {binaries.map((bin) => (
            <span key={bin.id} className="binary" style={{ left: `${bin.x}%`, top: `${bin.y}%` }}>
              {bin.value}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <div className="project-list">
          <ProjectCard
            title="ChatOrbit"
            description="Just a simple little chat app I built with Next.js and the Gemini API. You type, the bot responds—nothing too fancy, just a fun way to mess around with AI conversations."
            image="/project1.png"
            url="https://first-chatbot-ai.vercel.app/"
          />
          <ProjectCard
            title="Your Daily Quote"
            description="A random quote generator because, why not? It pulls quotes from an API and gives you something new every time. Could be inspiring, could be completely random—either way, it’s something different with each click."
            image="/project2.png"
            url="https://quote-generator-app-ten.vercel.app/"
          />
        </div>
      </section>

      <div className="page-divider"></div>

      {/* Language Section */}
      <section id="language" className="language-section">
        <h3 className='techText'>Technologies I Use</h3>
        <div className="language-list">
        <div className="language-card">
     <img src="/html.svg" alt="HTML" className="icon" />
       <h4>HTML</h4>
    </div>
    <div className="language-card">
     <img src="/css.svg" alt="CSS" className="icon" />
       <h4>CSS</h4>
     </div>
     <div className="language-card">
     <img src="/js.svg" alt="JS" className="icon" />
       <h4>JavaScript</h4>
     </div>
     <div className="language-card">
     <img src="/react.svg" alt="REACT" className="icon" />
       <h4>React</h4>
     </div>
     <div className="language-card">
     <img src="/scss.svg" alt="SCSS" className="icon" />
       <h4>SCSS</h4>
     </div>
     <div className="language-card">
     <img src="/ts.svg" alt="TS" className="icon" />
       <h4>TypeScript</h4>
     </div>
     <div className="language-card">
     <img src="/git.svg" alt="GIT" className="icon" />
       <h4>Git</h4>
     </div>
     <div className="language-card">
     <img src="/bootstrap.svg" alt="BOOSTRAP" className="icon" />
       <h4>Bootstrap</h4>
     </div>
        </div>
      </section>

      <div className="page-divider"></div>

      {/* Contact Section */}
      <div className="contact-container">
        <section id="contact" className="contact-section">
          <h4>Contact Me</h4>
          <p className='contact-p'>Please fill in the form below</p>
          <form onSubmit={handleSubmit}>
            <div className='fullnameInput'>
              <label htmlFor="fullname">Full name</label>
              <input onChange={e => setFullname(e.target.value)} value={fullname} type="text" id='fullname' placeholder='Your Name'/>
            </div>

            <div className='emailInput'>
              <label htmlFor='email'>Email</label>
              <input onChange={e => setEmail(e.target.value)} value={email} type="text" id='email' placeholder='Your Email' />
            </div>

            <div className='messageInput'>
              <label htmlFor='message'>Message</label>
              <textarea onChange={e => setMessage(e.target.value)} value={message} id="message" placeholder='Type your message here...'></textarea>
            </div>

            <button type='submit' disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>

          <div className={`errorSection ${success ? "successMsg" : "errorMsg"}`}>
            {error && error.map((e, index) => (
              <div key={index} className="message">
                {e}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


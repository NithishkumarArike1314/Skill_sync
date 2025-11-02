function loadCourse(track) {
  const titleMap = {
    frontend: "Frontend Development",
    backend: "Backend Development",
    fullstack: "Full Stack Development"
  };

  const resources = {
    frontend: [
      {
        type: "YouTube",
        title: "Frontend Bootcamp",
        link: "https://www.youtube.com/watch?v=zJSY8tbf_ys",
        description: "Complete beginner-friendly course covering HTML, CSS, and JavaScript.",
        time: "6 hours"
      },
      {
        type: "PDF",
        title: "CSS Cheatsheet",
        link: "https://web.stanford.edu/class/cs142/cheatsheet-css.pdf",
        description: "Quick reference for CSS properties and syntax.",
        time: "15 mins"
      },
      {
        type: "Quiz",
        title: "JavaScript Quiz",
        link: "https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS",
        description: "Test your JavaScript basics with interactive questions.",
        time: "10 mins"
      },
      {
        type: "GitHub",
        title: "Frontend Projects",
        link: "https://github.com/sudheerj/reactjs-interview-questions",
        description: "Popular React interview questions and project ideas.",
        time: "Varies"
      },
      {
        type: "LinkedIn",
        title: "Find Frontend Mentors",
        link: "https://www.linkedin.com/search/results/people/?keywords=frontend%20developer",
        description: "Connect with professionals and mentors in frontend development.",
        time: "Explore anytime"
      },
      {
        type: "Tech News",
        title: "Frontend Trends",
        link: "https://frontendfoc.us/",
        description: "Weekly newsletter on frontend tools, frameworks, and updates.",
        time: "Weekly"
      },
      {
        type: "Trending",
        title: "Frontend Roadmap",
        link: "https://roadmap.sh/frontend",
        description: "Explore trending libraries like React, Vue, Tailwind CSS.",
        time: "30 mins"
      }
    ],

    backend: [
      {
        type: "YouTube",
        title: "Backend Tutorial",
        link: "https://www.youtube.com/watch?v=1oTuMPIwHmk",
        description: "Learn Node.js, Express, and database integration.",
        time: "3 hours"
      },
      {
        type: "PDF",
        title: "SQL Basics",
        link: "https://www.sqltutorial.org/sql-cheat-sheet.pdf",
        description: "Essential SQL commands and syntax guide.",
        time: "20 mins"
      },
      {
        type: "Quiz",
        title: "Backend MCQ",
        link: "https://www.geeksforgeeks.org/backend-development-mcq/",
        description: "Multiple choice questions to test backend concepts.",
        time: "15 mins"
      },
      {
        type: "GitHub",
        title: "Node.js Projects",
        link: "https://github.com/nodejs/node",
        description: "Official Node.js repository with examples and issues.",
        time: "Varies"
      },
      {
        type: "LinkedIn",
        title: "Find Backend Developers",
        link: "https://www.linkedin.com/search/results/people/?keywords=backend%20developer",
        description: "Explore backend-focused professionals and job roles.",
        time: "Explore anytime"
      },
      {
        type: "Tech News",
        title: "Backend Trends",
        link: "https://www.infoq.com/backend/",
        description: "Latest backend architecture, APIs, and server-side tools.",
        time: "Weekly"
      },
      {
        type: "Trending",
        title: "Backend Roadmap",
        link: "https://roadmap.sh/backend",
        description: "Learn about Express, SQL, authentication, and APIs.",
        time: "30 mins"
      }
    ],

    fullstack: [
      {
        type: "YouTube",
        title: "Full Stack Course",
        link: "https://www.youtube.com/watch?v=nu_pCVPKzTk",
        description: "Build complete apps with frontend and backend integration.",
        time: "7 hours"
      },
      {
        type: "PDF",
        title: "Full Stack Roadmap",
        link: "https://roadmap.sh/full-stack",
        description: "Visual roadmap for mastering full stack development.",
        time: "30 mins"
      },
      {
        type: "Quiz",
        title: "Full Stack Quiz",
        link: "https://www.includehelp.com/mcq/full-stack-development-multiple-choice-questions-mcqs.aspx",
        description: "Challenge your full stack knowledge.",
        time: "20 mins"
      },
      {
        type: "GitHub",
        title: "MERN Stack Projects",
        link: "https://github.com/HashirShohaib/MERN-Stack-Projects",
        description: "Real-world full stack projects using MongoDB, Express, React, Node.",
        time: "Varies"
      },
      {
        type: "LinkedIn",
        title: "Full Stack Professionals",
        link: "https://www.linkedin.com/search/results/people/?keywords=full%20stack%20developer",
        description: "Connect with full stack developers and recruiters.",
        time: "Explore anytime"
      },
      {
        type: "Tech News",
        title: "Full Stack Updates",
        link: "https://www.freecodecamp.org/news/tag/full-stack/",
        description: "Articles and tutorials on full stack development trends.",
        time: "Weekly"
      },
      {
        type: "Trending",
        title: "Top Full Stack Tools",
        link: "https://stackshare.io/full-stack",
        description: "Compare popular full stack tools and technologies.",
        time: "30 mins"
      }
    ]
  };

  document.getElementById("courseTitle").textContent = titleMap[track];
  const resourceContainer = document.getElementById("resources");
  resourceContainer.innerHTML = "";

  resources[track].forEach(res => {
    const card = document.createElement("div");
    card.className = "resource-card";
    card.innerHTML = `
      <h3>${res.type}: ${res.title}</h3>
      <p>${res.description}</p>
      <p><strong>Estimated Time:</strong> ${res.time}</p>
      <a href="${res.link}" target="_blank">Open Resource</a>
    `;
    resourceContainer.appendChild(card);
  });

  document.getElementById("courseDetails").style.display = "block";
}

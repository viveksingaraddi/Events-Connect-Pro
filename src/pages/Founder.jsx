import React from "react";

const Founder = () => {
  return (
    <div style={{padding:"40px", maxWidth:"1000px", margin:"auto"}}>

      {/* Hero Section */}
      <div style={{display:"flex", alignItems:"center", gap:"30px", flexWrap:"wrap"}}>
        <img
  src="/founder.jpg"
  alt="Founder"
  style={{
    width: "180px",
    height: "235px",
    borderRadius: "30%",
    objectFit: "cover",
    objectPosition: "center",
    border: "4px solid white",
    boxShadow:"0 8px 20px rgba(0,0,0,0.15)"
  }}
/>

        <div>
          <h1>Vivek Singaraddi</h1>
          <h3 style={{color:"#555"}}>Founder of Gigmithra</h3>
          <p>
            Building technology that connects event organizers with reliable workers.
          </p>
        </div>
      </div>

      <hr style={{margin:"40px 0"}}/>

      {/* About Section */}
      <section>
        <h2>About the Founder</h2>
        <p>
          I am Vivek Singaraddi, a developer and entrepreneur passionate about building
          real-world solutions using technology. I founded <strong>Gigmithra</strong>
          to bridge the gap between event organizers who need workers and students
          who are looking for flexible earning opportunities.
        </p>
      </section>

      <hr style={{margin:"40px 0"}}/>

      {/* Story Section */}
      <section>
        <h2>Why I Built Gigmithra</h2>
        <p>
          While observing the catering and event industry, I noticed a major
          challenge. Event organizers often struggle to find reliable workers
          on short notice, while many students search for part-time earning
          opportunities. This inspired me to build Gigmithra — a platform that
          connects both instantly.
        </p>
      </section>

    <section>
        <h2>Founder Journey</h2>

        <div style={{marginTop:"20px"}}>

            <div style={timelineItem}>
            <h4>2024</h4>
            <p>Started learning full-stack development and building web applications.</p>
            </div>

            <div style={timelineItem}>
            <h4>2025</h4>
            <p>Identified the problem in event industries where organizers struggle to find workers.</p>
            </div>

            <div style={timelineItem}>
            <h4>2026</h4>
            <p>Launched <strong>Gigmithra</strong> to connect event organizers with reliable workers instantly.</p>
            </div>

        </div>
    </section>

      <hr style={{margin:"40px 0"}}/>

      {/* Achievements */}
      <section>
        <h2>Achievements</h2>
        <ul>
          <li>Founder & Developer of Gigmithra</li>
          <li>Built a full-stack event hiring platform</li>
          <li>Developed scalable web applications</li>
          <li>Experience in React, Node.js, MongoDB</li>
        </ul>
      </section>

      <hr style={{margin:"40px 0"}}/>

      <section style={{marginTop:"40px"}}>
  <h2>Platform Vision & Impact</h2>

  <div style={{display:"flex", gap:"40px", flexWrap:"wrap", marginTop:"20px"}}>

    <div style={statCard}>
      <h1>1+</h1>
      <p>Startup Project Built</p>
    </div>

    <div style={statCard}>
      <h1>6+</h1>
      <p>Technologies Used</p>
    </div>

    <div style={statCard}>
      <h1>∞</h1>
      <p>Opportunities for Workers</p>
    </div>

  </div>
</section>

<hr style={{margin:"40px 0"}}/>

      {/* Tech Stack */}
      <section>
  <h2>Technologies Used to Build Gigmithra</h2>

  <div style={{display:"flex", flexWrap:"wrap", gap:"10px", marginTop:"15px"}}>

    <span style={techBadge}>React</span>
    <span style={techBadge}>Node.js</span>
    <span style={techBadge}>MongoDB</span>
    <span style={techBadge}>Firebase</span>
    <span style={techBadge}>Vercel</span>
    <span style={techBadge}>REST APIs</span>

  </div>
</section>

      <hr style={{margin:"40px 0"}}/>

      {/* Vision */}
      <section>
        <h2>Vision</h2>
        <p>
          My vision is to make Gigmithra the go-to platform for event workforce
          management across India, helping both organizers and workers connect
          quickly and efficiently.
        </p>
      </section>

      <hr style={{margin:"40px 0"}}/>

      <section style={{marginTop:"50px", textAlign:"center"}}>
  <h2>Founder’s Philosophy</h2>
  <p style={{fontStyle:"italic", maxWidth:"700px", margin:"auto"}}>
    "Technology should solve real-world problems. 
    Gigmithra is my step toward empowering workers 
    and simplifying event workforce management."
  </p>
</section>

      <hr style={{margin:"40px 0"}}/>
      

      {/* Contact */}
      <section>
        <h2>Connect with Me</h2>
        <p>
          GitHub: <a href="https://github.com/viveksingaraddi">github.com/viveksingaraddi</a>
        </p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/vivek-singaraddi/">linkedin.com/in/vivek-singaraddi</a>
        </p>
        <p>Email: <a href="mailto:vivek.singaraddi.dev@gmail.com">vivek.singaraddi.dev@gmail</a></p>
      </section>

    </div>
  );
};

const tagStyle = {
  background:"#f0f0f0",
  padding:"8px 14px",
  borderRadius:"20px",
  fontSize:"14px"
};

const timelineItem = {
  borderLeft:"3px solid #6366f1",
  paddingLeft:"15px",
  marginBottom:"20px"
};

const statCard = {
  background:"#f5f5f5",
  padding:"20px 30px",
  borderRadius:"10px",
  textAlign:"center",
  minWidth:"120px"
};

const techBadge = {
  background:"#111",
  color:"white",
  padding:"8px 14px",
  borderRadius:"20px",
  fontSize:"14px"
};

export default Founder;
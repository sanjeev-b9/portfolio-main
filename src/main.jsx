import React from "react";
import { createRoot } from "react-dom/client";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: #e8edf7;
    background: #080b14;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
  }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; min-width: 320px; background: #080b14; }
  a { color: inherit; text-decoration: none; }
  ::selection { background: #8b5cf6; color: white; }
`;

const skills = {
  Frontend: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Angular", "React Native", "HTML5", "CSS3", "Bootstrap"],
  Backend: ["Node.js", "Express.js", "REST APIs", "GraphQL", "PHP", "Drupal"],
  Databases: ["MariaDB", "MySQL"],
  "State Management": ["Redux", "Redux-Saga", "Redux Thunk", "Context API"],
  "Architecture & Performance": ["Micro Frontends (MFE)", "SSR", "Code Splitting", "Lazy Loading", "Responsive Design", "Performance Optimization"],
  Testing: ["Jest", "React Testing Library", "Playwright", "Jasmine"],
  Security: ["Application Security", "VAPT / Pen-Test Remediation", "Secure Coding", "SonarQube", "OSS/FOSS Vulnerability Remediation"],
  "Build & DevOps": ["Webpack", "Vite", "Rollup", "Azure DevOps", "CI/CD"],
  Tools: ["Git", "Chrome DevTools", "Redux DevTools"],
  "AI-Assisted Development": ["Claude Code", "Generative AI", "Prompt Engineering", "AI-assisted debugging", "Automated test generation"]
};

const experience = [
  {
    company: "DBS Tech India",
    role: "Application Specialist | Associate | Frontend Engineer",
    period: "Aug 2022 — Present",
    location: "Hyderabad, Telangana",
    highlights: [
      "Built DBS Marketplace, a multi-domain platform covering travel, car, home search and loan estimation using React.js, Next.js, TypeScript and Micro-Frontend architecture.",
      "Designed and developed GraphQL-based flight and hotel booking flows, enabling seamless search-to-payment experiences.",
      "Developed secure eDocuments functionality for DBS Credit Card customers, including secure authentication, encrypted data retrieval and instant downloads of eStatements and eAdvices.",
      "Developed and integrated application features with backend APIs and services, supporting secure data exchange and customer-facing financial workflows.",
      "Analyzed and remediated VAPT/penetration-testing findings across frontend and backend components, supporting successful security clearance for production releases.",
      "Resolved SonarQube, OSS and FOSS vulnerabilities, improving the overall security posture of existing applications.",
      "Improved application efficiency by 30% by transforming monolithic functionality into scalable, developer-friendly Micro-Frontends.",
      "Optimized React.js/Next.js performance using code splitting, lazy loading and rendering optimization, reducing page load time by ~25%.",
      "Developed and maintained unit and end-to-end test suites using Jest and Playwright, improving application reliability and regression coverage.",
      "Integrated Claude Code and AI-assisted development workflows for bug detection and automated test-case generation, contributing to a 35% reduction in production bugs.",
      "Led production releases through structured Change Request (CR) processes and contributed to CI/CD practices using Azure DevOps in Agile teams."
    ]
  },
  {
    company: "PrimEra Medical Technologies",
    role: "Software Engineer | React / Angular Developer",
    period: "Mar 2020 — Aug 2022",
    location: "Hyderabad, Telangana",
    highlights: [
      "Designed and developed the Prime Grand Rounds healthcare feedback platform using Angular, HTML5, CSS3 and Bootstrap.",
      "Built cross-platform iOS and Android applications using React Native, JSX and Redux.",
      "Developed modules for rounding, issues, reports, dashboards and administration, supporting healthcare workflow management.",
      "Designed and developed an Invoice Management Tool using React.js, Redux and Redux-Saga.",
      "Integrated frontend applications with APIs to support application workflows and data-driven modules.",
      "Applied Jasmine, Jest and Enzyme for unit and component testing, improving application reliability.",
      "Collaborated in Agile/Scrum teams and used Azure DevOps for issue tracking and development activities."
    ]
  },
  {
    company: "SKRAY Softech Pvt Ltd",
    role: "Front-End Developer | React.js",
    period: "Aug 2018 — Feb 2020",
    location: "Hyderabad, Telangana",
    highlights: [
      "Developed the Aajubaaju e-Classifieds platform using React.js with modules for user, listing and administration.",
      "Integrated Google Maps API for location-based services.",
      "Developed and maintained web applications for Imperial Sugar and Dixie Crystals using PHP, Drupal and HTML/CSS.",
      "Built responsive and cross-browser user interfaces for web and mobile platforms using JavaScript, HTML5 and CSS3."
    ]
  }
];

const projects = [
  {
    title: "DBS Marketplace",
    type: "Micro-Frontend Platform",
    description: "Multi-domain customer platform covering travel, car and home experiences, backed by GraphQL-powered flight and hotel booking flows and secure API integrations.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "MFE"]
  },
  {
    title: "DBS E-Document App",
    type: "Secure Customer Application",
    description: "Credit-card eDocuments experience with secure authentication, encrypted data retrieval and instant eStatement/eAdvice downloads, hardened via VAPT remediation.",
    tags: ["React", "Node.js", "Application Security", "Testing"]
  },
  {
    title: "Prime Grand Rounds",
    type: "Healthcare Platform",
    description: "Health feedback and rounding platform with dashboards, reports, administration and cross-platform mobile experiences.",
    tags: ["Angular", "React Native", "Redux", "Bootstrap"]
  },
  {
    title: "Aajubaaju",
    type: "e-Classifieds Platform",
    description: "React-based classified marketplace with user, listing and administration modules plus location services.",
    tags: ["React", "JavaScript", "Google Maps", "Responsive UI"]
  }
];

function App() {
  return (
    <>
      <GlobalStyle />
      <Page>
        <Header>
          <Logo href="#top">SB<span>.</span></Logo>
          <Nav>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Work</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Connect</a>
          </Nav>
          <ResumeButton href="/resume.pdf" target="_blank" rel="noreferrer">View Resume ↗</ResumeButton>
        </Header>

        <main id="top">
          <Hero>
            <HeroGlow />
            <HeroTopline><StatusDot /> Currently building digital experiences at DBS Tech India</HeroTopline>
            <Eyebrow>Full-Stack Engineer · React · Node.js · TypeScript</Eyebrow>
            <HeroTitle>
              I build <Gradient>scalable</Gradient> full-stack
              <br />experiences that matter.
            </HeroTitle>
            <HeroText>
              8+ years of experience engineering scalable, secure and high-performance web and
              mobile applications across FinTech, banking and healthcare products.
              Strong in React, Next.js, TypeScript, Node.js, Express.js, GraphQL and Micro-Frontends,
              with a track record of application security and VAPT remediation.
            </HeroText>
            <Actions>
              <PrimaryButton href="#experience">Explore my experience ↓</PrimaryButton>
              <SecondaryButton href="mailto:sanjeev.bomma1190@gmail.com">Connect with me</SecondaryButton>
            </Actions>
            <HeroMeta>
              <MetaItem><span>Based in</span><strong>Hyderabad, India</strong></MetaItem>
              <MetaItem><span>Specialization</span><strong>Full-Stack Architecture</strong></MetaItem>
              <MetaItem><span>Focus</span><strong>React + Node.js Ecosystem</strong></MetaItem>
            </HeroMeta>
            <Stats>
              <Stat><strong>8+</strong><span>Years experience</span></Stat>
              <Stat><strong>30%</strong><span>Efficiency improvement</span></Stat>
              <Stat><strong>25%</strong><span>Faster page loads</span></Stat>
              <Stat><strong>35%</strong><span>Fewer production bugs</span></Stat>
            </Stats>
          </Hero>

          <Section id="about">
            <SectionHeading>
              <Eyebrow>About</Eyebrow>
              <h2>Engineering with a product mindset.</h2>
            </SectionHeading>
            <AboutGrid>
              <AboutCard>
                <p>
                  I build scalable, secure and customer-focused applications across
                  web and mobile. My core strength is turning complex product requirements
                  into clean architecture, reusable components, reliable APIs and
                  trustworthy user experiences — end to end.
                </p>
                <p>
                  At DBS Tech India, I work across marketplace and secure e-document
                  experiences, integrating frontend applications with Node.js/Express
                  backend services, with a strong focus on Micro-Frontends, performance,
                  application security, VAPT remediation, testing and modern AI-assisted development.
                </p>
              </AboutCard>
              <QuoteCard>
                <span>“</span>
                <p>Passionate about emerging JavaScript frameworks and AI-driven development workflows.</p>
                <small>— Professional focus</small>
              </QuoteCard>
            </AboutGrid>
          </Section>

          <Section id="experience">
            <SectionHeading>
              <Eyebrow>Experience</Eyebrow>
              <h2>8+ years of building for real users.</h2>
            </SectionHeading>
            <Timeline>
              {experience.map((item) => (
                <TimelineItem key={item.company}>
                  <TimelineMarker />
                  <Time>{item.period}</Time>
                  <ExperienceCard>
                    <CompanyRow>
                      <div>
                        <h3>{item.company}</h3>
                        <Role>{item.role}</Role>
                      </div>
                      <Location>{item.location}</Location>
                    </CompanyRow>
                    <ul>
                      {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </ExperienceCard>
                </TimelineItem>
              ))}
            </Timeline>
          </Section>

          <Section id="projects">
            <SectionHeading>
              <Eyebrow>Selected Work</Eyebrow>
              <h2>Products, platforms and experiences.</h2>
            </SectionHeading>
            <ProjectGrid>
              {projects.map((project, index) => (
                <ProjectCard key={project.title}>
                  <ProjectType>{project.type}</ProjectType>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Tags>{project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}</Tags>
                </ProjectCard>
              ))}
            </ProjectGrid>
          </Section>

          <Section id="skills">
            <SectionHeading>
              <Eyebrow>Technical Expertise</Eyebrow>
              <h2>A modern full-stack engineering toolkit.</h2>
            </SectionHeading>
            <SkillGrid>
              {Object.entries(skills).map(([group, items]) => (
                <SkillGroup key={group}>
                  <h3>{group}</h3>
                  <Tags>{items.map(skill => <Tag key={skill}>{skill}</Tag>)}</Tags>
                </SkillGroup>
              ))}
            </SkillGrid>
          </Section>

          <Education>
            <Eyebrow>Education & Recognition</Eyebrow>
            <EducationGrid>
              <div>
                <h3>Bachelor of Technology — Computer Science</h3>
                <p>Rajiv Gandhi University of Knowledge Technologies, Basar · 2015</p>
                <p>Pre-University Course (XII) · Rajiv Gandhi University of Knowledge Technologies, Basar · 2011</p>
              </div>
              <Award>
                <strong>Extra Miler Award</strong>
                <span>Recognized for exceeding role expectations by developing productivity tools that reduced team working hours and streamlined operations.</span>
              </Award>
            </EducationGrid>
          </Education>

          <Contact id="contact">
            <Eyebrow>Let's Connect</Eyebrow>
            <h2>Open to the next opportunity.</h2>
            <p>
              I’m currently working at DBS Tech India and open to conversations about
              Full-Stack Engineer roles, challenging frontend and backend architecture problems,
              and teams building secure, meaningful digital products.
            </p>
            <ContactButton href="mailto:sanjeev.bomma1190@gmail.com">Get in touch ↗</ContactButton>
            <ContactLinks>
              <a href="tel:+919491481938">+91 94914 81938</a>
              <span>•</span>
              <span>Hyderabad, Telangana, India</span>
            </ContactLinks>
          </Contact>
        </main>

        <Footer>
          <span>© {new Date().getFullYear()} Sanjeevulu Bomma</span>
          <span>Built with React + styled-components</span>
        </Footer>
      </Page>
    </>
  );
}

const Page = styled.div`max-width: 1240px; margin: 0 auto; padding: 0 28px;`;
const Header = styled.header`
  height: 82px; display:flex; align-items:center; justify-content:space-between;
  position:sticky; top:0; z-index:20; backdrop-filter: blur(18px);
  background: rgba(8,11,20,.78); border-bottom:1px solid rgba(255,255,255,.06);
`;
const Logo = styled.a`font-size:24px; font-weight:900; letter-spacing:-1px; span{color:#a78bfa;}`;
const Nav = styled.nav`
  display:flex; gap:28px; color:#aeb7ca; font-size:14px;
  a:hover{color:#fff;} @media(max-width:760px){display:none;}
`;
const ResumeButton = styled.a`
  padding:10px 15px; border:1px solid rgba(167,139,250,.45); border-radius:10px;
  color:#ddd6fe; font-size:13px; font-weight:700; &:hover{background:rgba(167,139,250,.1);}
`;
const Hero = styled.section`
  min-height:calc(100vh - 82px); display:flex; flex-direction:column; justify-content:center;
  position:relative; padding:105px 0 90px; overflow:hidden;
`;
const HeroGlow = styled.div`
  position:absolute; width:520px; height:520px; right:-180px; top:60px;
  background:radial-gradient(circle, rgba(124,58,237,.22), transparent 66%); pointer-events:none;
`;
const Eyebrow = styled.div`
  color:#a78bfa; font-size:12px; font-weight:800; letter-spacing:2.2px;
  text-transform:uppercase; margin-bottom:20px;
`;
const HeroTitle = styled.h1`
  max-width:1020px; margin:0; font-size:clamp(46px,7vw,88px); line-height:.98;
  letter-spacing:-4.5px; font-weight:850;
  @media(max-width:600px){letter-spacing:-2px;}
`;
const Gradient = styled.span`background:linear-gradient(100deg,#c4b5fd,#60a5fa); -webkit-background-clip:text; color:transparent;`;
const HeroText = styled.p`max-width:710px; color:#9da8bd; font-size:19px; line-height:1.7; margin:30px 0 0;`;
const Actions = styled.div`display:flex; gap:12px; margin-top:34px; flex-wrap:wrap;`;
const PrimaryButton = styled.a`background:#f3f4f6; color:#111827; padding:14px 20px; border-radius:11px; font-weight:800; font-size:14px;`;
const SecondaryButton = styled.a`border:1px solid #30394d; color:#e5e7eb; padding:13px 20px; border-radius:11px; font-weight:800; font-size:14px;`;
const Stats = styled.div`
  display:grid; grid-template-columns:repeat(4,1fr); max-width:850px; margin-top:45px;
  border-top:1px solid #20283a; padding-top:25px;
  @media(max-width:700px){grid-template-columns:repeat(2,1fr);gap:25px;}
`;
const Stat = styled.div`display:flex; flex-direction:column; gap:6px; strong{font-size:25px;} span{color:#78849a;font-size:12px;}`;
const Section = styled.section`padding:110px 0; border-top:1px solid #1b2231;`;
const SectionHeading = styled.div`h2{font-size:clamp(32px,4vw,52px);letter-spacing:-2px;margin:0;}`;
const AboutGrid = styled.div`display:grid;grid-template-columns:1.4fr .8fr;gap:24px;margin-top:45px;@media(max-width:800px){grid-template-columns:1fr;}`;
const AboutCard = styled.div`background:#0e1320;border:1px solid #20283a;border-radius:18px;padding:34px;color:#aeb7ca;line-height:1.8;font-size:16px;`;
const QuoteCard = styled(AboutCard)`display:flex;flex-direction:column;justify-content:center;background:linear-gradient(145deg,#11162a,#0c101b);span{font-size:60px;color:#a78bfa;line-height:.5;}p{font-size:20px;color:#e5e7eb;line-height:1.5;}small{color:#69758a;}`;
const Timeline = styled.div`margin-top:45px;position:relative;padding-left:25px;border-left:1px solid #30394d;`;
const TimelineItem = styled.div`position:relative;margin-bottom:55px;`;
const TimelineMarker = styled.div`position:absolute;left:-31px;top:4px;width:11px;height:11px;border-radius:50%;background:#a78bfa;box-shadow:0 0 0 5px #080b14,0 0 20px rgba(167,139,250,.45);`;
const Time = styled.div`font-size:12px;color:#7d89a0;font-weight:700;margin-bottom:12px;`;
const ExperienceCard = styled.div`background:#0e1320;border:1px solid #20283a;border-radius:18px;padding:28px;`;
const CompanyRow = styled.div`display:flex;justify-content:space-between;gap:20px;align-items:flex-start;h3{font-size:22px;margin:0 0 6px;}`;
const Role = styled.div`color:#a78bfa;font-size:13px;font-weight:700;`;
const Location = styled.div`color:#66728a;font-size:12px;text-align:right;`;
const ExperienceList = styled.ul``;
const ProjectGrid = styled.div`display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:45px;@media(max-width:700px){grid-template-columns:1fr;}`;
const ProjectCard = styled.article`padding:30px;min-height:260px;background:#0e1320;border:1px solid #20283a;border-radius:18px;transition:.2s;position:relative;overflow:hidden;&:hover{transform:translateY(-4px);border-color:#3b4760;}`;
const HeroTopline = styled.div`
  display:flex; align-items:center; gap:9px; width:max-content; max-width:100%;
  padding:8px 12px; border:1px solid #273044; background:rgba(14,19,32,.7);
  border-radius:999px; color:#aeb7ca; font-size:12px; margin-bottom:24px;
`;
const StatusDot = styled.span`
  width:7px; height:7px; border-radius:50%; background:#34d399;
  box-shadow:0 0 0 4px rgba(52,211,153,.1);
`;
const HeroMeta = styled.div`
  display:flex; gap:0; margin-top:48px; max-width:820px;
  border-top:1px solid #20283a; border-bottom:1px solid #20283a;
  @media(max-width:700px){display:grid;grid-template-columns:1fr 1fr;}
`;
const MetaItem = styled.div`
  padding:18px 28px 18px 0; margin-right:28px; border-right:1px solid #20283a;
  display:flex; flex-direction:column; gap:5px;
  &:last-child{border:0;}
  span{font-size:10px;text-transform:uppercase;letter-spacing:1.4px;color:#66728a;}
  strong{font-size:13px;color:#d8deea;}
  @media(max-width:700px){border:0;margin:0;padding:16px 10px 16px 0;}
`;
const ProjectType = styled.div`font-size:11px;color:#a78bfa;text-transform:uppercase;letter-spacing:1.5px;margin-top:40px;`;
const Tags = styled.div`display:flex;flex-wrap:wrap;gap:7px;margin-top:20px;`;
const Tag = styled.span`font-size:11px;color:#aeb7ca;background:#171d2c;border:1px solid #273044;padding:6px 9px;border-radius:7px;`;
const SkillGrid = styled.div`display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:45px;@media(max-width:700px){grid-template-columns:1fr;}`;
const SkillGroup = styled.div`padding:25px;background:#0e1320;border:1px solid #20283a;border-radius:16px;h3{font-size:15px;margin:0 0 15px;}`;
const Education = styled.section`padding:95px 0;border-top:1px solid #1b2231;`;
const EducationGrid = styled.div`display:grid;grid-template-columns:1fr 1fr;gap:25px;@media(max-width:700px){grid-template-columns:1fr;}h3{font-size:20px;margin:0 0 8px;}p{color:#78849a;line-height:1.6;}`;
const Award = styled.div`background:#0e1320;border:1px solid #20283a;border-radius:16px;padding:24px;display:flex;flex-direction:column;gap:10px;strong{color:#ddd6fe;}span{color:#78849a;line-height:1.6;font-size:14px;}`;
const Contact = styled.section`
  padding:145px 0;text-align:center;border-top:1px solid #1b2231;
  h2{font-size:clamp(42px,7vw,78px);letter-spacing:-3px;margin:0;}
  p{color:#8793a8;max-width:700px;margin:20px auto 30px;line-height:1.8;}
`;
const ContactButton = styled.a`display:inline-block;font-size:18px;font-weight:800;color:#ddd6fe;border-bottom:1px solid #7c3aed;padding-bottom:7px;`;
const ContactLinks = styled.div`display:flex;justify-content:center;gap:10px;flex-wrap:wrap;color:#68748a;font-size:13px;margin-top:35px;`;
const Footer = styled.footer`border-top:1px solid #1b2231;padding:25px 0 35px;display:flex;justify-content:space-between;color:#59657a;font-size:12px;@media(max-width:600px){flex-direction:column;gap:8px;}`;

createRoot(document.getElementById("root")).render(<App />);

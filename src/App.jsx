import { useRef } from "react";
import Form from "./Form";
import Project from "./Project";
import { skills, projects, myInformations } from "./CustomizePortfolio";
import Hamburger from "./assets/Hamburger";
import Arrow from "./assets/Arrow";
import Linkedin from "./assets/Linkedin";
import Github from "./assets/Github";
import Download from "./assets/Download";
import Telegram from "./assets/Telegram";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const menuRef = useRef(null);

  function toggleMobileMenu() {
    menuRef.current.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  function closeMobileMenu() {
    menuRef.current.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  function handleScroll(element) {
    element.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="bg-[#0A0A0A] font-manrope text-[#C7C7C7]">
      <div className="container mx-auto">
        <header className="sm:h-24 h-[76px] flex justify-between items-center px-4 relative">
          <span className="font-bold sm:text-[18px] md:text-[22px] uppercase font-manrope">
            Amir Mousavi
          </span>
          <button onClick={toggleMobileMenu} className="sm:hidden">
            <Hamburger />
          </button>
          <nav
            onClick={closeMobileMenu}
            ref={menuRef}
            className="hidden absolute sm:static min-h-dvh top-0 sm:top-auto sm:min-h-0 sm:block bg-dark sm:bg-transparent sm:left-auto sm:w-auto left-0 w-full bg-opacity-95"
          >
            <ul className="flex flex-col sm:flex-row gap-8 sm:gap-4 text-sm font-medium px-5 py-10 sm:p-0 h-dvh sm:h-auto bg-secondary sm:bg-transparent w-2/3 sm:w-auto">
              <li>
                <button
                  className="w-full sm:w-auto text-left hover:text-white duration-300"
                  onClick={() => handleScroll(projectsRef)}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  className="w-full sm:w-auto text-left hover:text-white duration-300"
                  onClick={() => handleScroll(aboutRef)}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className="w-full sm:w-auto text-left hover:text-white duration-300"
                  onClick={() => handleScroll(skillsRef)}
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  className="w-full sm:w-auto text-left hover:text-white duration-300"
                  onClick={() => handleScroll(contactRef)}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <main>
        <div className="container mx-auto px-4">
          <section className="flex flex-col sm:flex-row items-center justify-between gap-16 sm:gap-2 mt-10 sm:mt-7 pb-[64px] sm:pb-[71px]">
            <div className="flex-1">
              <h1 className="font-manrope uppercase text-[37px] sm:text-[43px] md:text-[47px] lg:text-[64px] xl:text-[70px] leading-[120%] font-extrabold text-white">
                HI, I AM <br />
                {myInformations.fullName}
              </h1>
              <p className="text-base sm:text-lg mt-3 sm:mt-2">
                {myInformations.bio}
              </p>
              <div className="flex items-center gap-4 mt-10">
                <button
                  onClick={() => handleScroll(contactRef)}
                  className="bg-primary group text-sm sm:text-base text-dark font-bold flex items-center w-[163px] sm:w-[187px] h-12 sm:h-[54px] rounded-full"
                >
                  <span className="ml-4 sm:ml-7">CONTACT ME</span>
                  <div className="bg-dark rounded-full p-1 mr-3 ml-auto">
                    <Arrow />
                  </div>
                </button>
                <a
                  target="_blank"
                  className="bg-secondary h-12 sm:h-[54px] w-12 sm:w-[54px] flex items-center justify-center rounded-full"
                  href={myInformations.linkedinUrl}
                >
                  <Linkedin />
                </a>
                <a
                  target="_blank"
                  className="bg-secondary h-12 sm:h-[54px] w-12 sm:w-[54px] flex items-center justify-center rounded-full"
                  href={myInformations.githubUrl}
                >
                  <Github />
                </a>
              </div>
            </div>
            <div className="flex-1">
              <img
                className="aspect-[6/7] ml-auto object-cover w-[600px] hover:contrast-125 duration-300 rounded-2xl"
                src={myInformations.myPhoto}
                alt={myInformations.fullName}
              />
            </div>
          </section>
        </div>
        <div className="border-b border-[#484848]"></div>
        <section
          ref={projectsRef}
          className="container mx-auto px-4 pt-16 md:pt-20"
        >
          <h2 className="font-manrope uppercase font-extrabold text-[26px] md:text-[40px] lg:text-[50px] xl:text-[58px] leading-[100%] text-white">
            Featured Projects
          </h2>
          <p className="leading-[150%] mt-3 md:mt-2">
            Here are some of the selected projects that showcase my passion for{" "}
            <br />
            front-end development.
          </p>
          <div className="mt-16 md:mt-20 last:mb-16 md:last:mb-20">
            {projects.map((project, i) => (
              <Project data={project} key={i} />
            ))}
          </div>
        </section>
        <div className="border-b border-[#484848]"></div>
        <section
          ref={aboutRef}
          className="container mx-auto px-4 pt-20 md:pt-[122px] md:grid grid-cols-5 pb-20 md:pb-[120px]"
        >
          <div className="col-span-2">
            <h2 className="font-manrope uppercase font-extrabold text-[36px] md:text-[40px] lg:text-[50px] xl:text-[58px] leading-[100%] text-white">
              About me
            </h2>
          </div>
          <div className="col-span-3">
            <h4 className="text-[24px] text-white md:text-[32px] font-medium leading-[140%] mt-4 md:mt-0 mb-2 md:mb-4">
              {myInformations.aboutTitle}
            </h4>
            <p className="text-base md:text-[18px] leading-[160%] md:leading-[150%] mb-10 md:mb-[53px]">
              Hi there! I’m a 20-year-old frontend developer from Shiraz,
              studying IT.
              <br />
              I pay close attention to details and always try to deliver the
              best results. Solving problems excites me, and I’m always
              motivated to learn new things.
              <br />
              When I’m not coding, I enjoy playing chess, watching football, and
              catching up on movies and TV shows.
              <br />
              Feel free to reach out if you’d like to collaborate on something
              great!
            </p>
            <div className="flex items-center gap-3 md:gap-4 mt-10">
              <a
                href={myInformations.resumeUrl}
                className="bg-primary group text-sm sm:text-base text-dark font-bold flex items-center w-[212px] sm:w-[244px] h-12 sm:h-[54px] rounded-full"
              >
                <span className="ml-4 sm:ml-7">DOWNLOAD RESUME</span>
                <div className="bg-dark rounded-full p-1 mr-3 ml-auto">
                  <Download />
                </div>
              </a>
              <a
                target="_blank"
                className="bg-secondary h-12 sm:h-[54px] w-12 sm:w-[54px] flex items-center justify-center rounded-full"
                href={myInformations.linkedinUrl}
              >
                <Linkedin />
              </a>
              <a
                target="_blank"
                className="bg-secondary h-12 sm:h-[54px] w-12 sm:w-[54px] flex items-center justify-center rounded-full"
                href="https://github.com/amirmousav1"
              >
                <Github />
              </a>
            </div>
          </div>
        </section>
        <div className="border-b border-[#484848]"></div>
        <section
          ref={skillsRef}
          className="container mx-auto px-4 lg:flex pb-16 md:pb-[107px] pt-20 lg:pt-[120px] gap-6"
        >
          <div className="flex-1">
            <h3 className="font-manrope uppercase font-extrabold text-[34px] md:text-[40px] lg:text-[50px] xl:text-[58px] leading-[100%] text-white">
              My Capabilities
            </h3>
          </div>
          <div className="flex-1 mt-3 lg:mt-0">
            <p className="text-base md:text-[18px] leading-[160%] md:leading-[150%]">
              I love learning new things and growing my skills. Right now,
              I&apos;m good at the following:
            </p>
            <div className="mt-6 lg:mt-[32px]">
              <ul className="flex text-sm lg:text-base font-bold gap-3 lg:gap-4 flex-wrap">
                {skills.map((skill, i) => (
                  <li
                    key={i}
                    className="py-3 px-5 lg:py-4 lg:px-8 rounded-[100px] border leading-[100%] border-[#484848] flex items-center gap-2"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <div className="border-b border-[#484848]"></div>
        <section
          ref={contactRef}
          className="container md:flex mx-auto px-4 pb-16 md:pb-[80px] pt-[55px] lg:pt-[120px]"
        >
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-manrope uppercase font-extrabold text-[36px] md:text-[40px] lg:text-[50px] xl:text-[58px] leading-[100%] text-white">
                Let&apos;s connect
              </h3>
              <div className="mt-4 flex flex-col gap-2 md:text-[18px]">
                <span>
                  Say hello at{" "}
                  <span className="border-b py-1 border-primary text-white">
                    {myInformations.myEmail}
                  </span>
                </span>
                <span>
                  For more info, here&apos;s my{" "}
                  <a
                    className="border-b py-1 border-primary text-white"
                    href={myInformations.resumeUrl}
                  >
                    resume
                  </a>
                </span>
              </div>
              <div className="mt-10">
                <ul className="flex gap-8 md:gap-6 items-center">
                  <li>
                    <a href={myInformations.linkedinUrl} target="_blank">
                      <Linkedin size={25} />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/amirmousav1">
                      <Github size={22} />
                    </a>
                  </li>
                  <li>
                    <a href={myInformations.telegramUrl}>
                      <Telegram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span className="font-medium hidden md:block">
              ©2024 {myInformations.fullName}
            </span>
          </div>
          <div className="flex-1 mt-16 md:mt-0">
            <Form />
          </div>
        </section>
      </main>
      <footer className="md:hidden container mx-auto px-4 pt-4 pb-16">
        <span className="font-medium md:hidden">
          ©2024 {myInformations.fullName}
        </span>
      </footer>
    </div>
  );
}

export default App;

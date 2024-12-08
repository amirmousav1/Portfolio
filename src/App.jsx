import { useRef } from "react";
import Form from "./Form";
import Project from "./Project";

const skills = [
  "React",
  "NextJs",
  "JavaScript",
  "React Query",
  "Tailwind CSS",
  "Git",
  "Bootstrap",
  "CSS",
  "HTML",
];

const projects = [
  {
    title: "MagnetMovie",
    description:
      "MagnetMovie is a powerful tool to search for your favorite movies and download their torrent files or copy magnet links to start downloading effortlessly.",
    year: "2024",
    technologies: "React, React Router, TanStack, Tailwind",
    image: "./magnetmovie.png",
    demoLink: "https://magnetmovie.netlify.app",
    githubLink: "https://github.com/amirmousav1/MagnetMovie",
  },
  {
    title: "TickBoard",
    description:
      "Tickboard is a sleek and intuitive to-do application designed to streamline task management. With features like priority-based sorting, real-time task updates, and local storage persistence, Tickboard empowers users to stay organized and productive effortlessly.",
    year: "2024",
    technologies: "React, Tailwind",
    image: "./tickboard.png",
    demoLink: "https://tickboard.netlify.app",
    githubLink: "https://github.com/amirmousav1/TickBoard",
  },
];

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
            <svg
              width="32"
              height="14"
              viewBox="0 0 32 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1H32" stroke="#C7C7C7" strokeWidth="2" />
              <path d="M0 13H32" stroke="#C7C7C7" strokeWidth="2" />
            </svg>
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
              <h1 className="font-manrope text-[37px] sm:text-[43px] md:text-[47px] lg:text-[64px] xl:text-[70px] leading-[120%] font-extrabold text-white">
                HI, I AM <br />
                AMIR MOUSAVI
              </h1>
              <p className="text-base sm:text-lg mt-3 sm:mt-2">
                A Shiraz based front-end developer passionate about building
                accessible and user friendly websites.
              </p>
              <div className="flex items-center gap-4 mt-10">
                <button
                  onClick={() => handleScroll(contactRef)}
                  className="bg-primary group text-sm sm:text-base text-dark font-bold flex items-center w-[163px] sm:w-[187px] h-12 sm:h-[54px] rounded-full"
                >
                  <span className="ml-4 sm:ml-7">CONTACT ME</span>
                  <div className="bg-dark rounded-full p-1 mr-3 ml-auto">
                    <svg
                      className="size-1 invisible group-hover:size-6 group-hover:p-1 group-hover:visible duration-100"
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.99138 12.0146L10.5863 3.41974L10.5863 9.6576L12.2527 9.6576L12.2527 0.574818L3.16989 0.574818L3.16989 2.24123L9.40775 2.24123L0.812866 10.8361L1.99138 12.0146Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </button>
                <a
                  target="_blank"
                  className="bg-secondary h-12 sm:h-[54px] w-12 sm:w-[54px] flex items-center justify-center rounded-full"
                  href="https://www.linkedin.com/in/am1rmousav1/"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.39825 7.79682C6.70735 7.79682 7.76858 6.73558 7.76858 5.42649C7.76858 4.11739 6.70735 3.05615 5.39825 3.05615C4.08915 3.05615 3.02792 4.11739 3.02792 5.42649C3.02792 6.73558 4.08915 7.79682 5.39825 7.79682Z"
                      fill="#D3E97A"
                    />
                    <path
                      d="M10.0068 9.59282V22.7434H14.0898V16.2402C14.0898 14.5242 14.4127 12.8623 16.5403 12.8623C18.6388 12.8623 18.6648 14.8242 18.6648 16.3485V22.7445H22.75V15.5327C22.75 11.9902 21.9873 9.26782 17.8468 9.26782C15.8589 9.26782 14.5264 10.3587 13.9815 11.3912H13.9263V9.59282H10.0068ZM3.35292 9.59282H7.4425V22.7434H3.35292V9.59282Z"
                      fill="#D3E97A"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  className="bg-secondary h-12 sm:h-[54px] w-12 sm:w-[54px] flex items-center justify-center rounded-full"
                  href="https://github.com/amirmousav1"
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.0282 0.166748C5.06008 0.166748 0.223 5.00383 0.223 10.9719C0.223 15.7451 3.31808 19.7957 7.61242 21.2257C8.153 21.3232 8.348 20.9906 8.348 20.7046C8.348 20.4478 8.33933 19.7675 8.33608 18.8673C5.32983 19.5194 4.695 17.4178 4.695 17.4178C4.20533 16.1698 3.49575 15.8372 3.49575 15.8372C2.51533 15.1666 3.5705 15.1818 3.5705 15.1818C4.656 15.2576 5.22475 16.2954 5.22475 16.2954C6.18892 17.9464 7.75542 17.4698 8.36858 17.1935C8.46717 16.4948 8.74883 16.0181 9.0565 15.7483C6.658 15.4764 4.136 14.5491 4.136 10.4075C4.136 9.22992 4.55742 8.26358 5.24533 7.50958C5.13592 7.2355 4.76217 6.13592 5.35258 4.64958C5.35258 4.64958 6.25933 4.35817 8.32308 5.75567C9.20448 5.51589 10.1137 5.3935 11.0271 5.39167C11.9405 5.39315 12.8498 5.51554 13.7311 5.75567C15.7959 4.35708 16.7016 4.64958 16.7016 4.64958C17.292 6.13592 16.9215 7.2355 16.8088 7.50958C17.5022 8.26358 17.9182 9.22883 17.9182 10.4075C17.9182 14.5599 15.394 15.4721 12.9868 15.7397C13.3714 16.0733 13.7181 16.732 13.7181 17.7395C13.7181 19.1847 13.7051 20.3503 13.7051 20.7046C13.7051 20.9938 13.8979 21.3297 14.4493 21.2235C18.7415 19.7913 21.8333 15.744 21.8333 10.9719C21.8333 5.00383 16.9963 0.166748 11.0282 0.166748Z"
                      fill="#D3E97A"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex-1">
              <img
                className="aspect-[6/7] ml-auto object-cover w-[600px] hover:contrast-125 duration-300 rounded-2xl"
                src="./image.jpg"
                alt="Amir Mousavi"
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
              I am a front-end developer based in Shiraz
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
                href="#"
                className="bg-primary group text-sm sm:text-base text-dark font-bold flex items-center w-[212px] sm:w-[244px] h-12 sm:h-[54px] rounded-full"
              >
                <span className="ml-4 sm:ml-7">DOWNLOAD RESUME</span>
                <div className="bg-dark rounded-full p-1 mr-3 ml-auto">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-1 invisible group-hover:size-7 group-hover:p-1 group-hover:visible duration-100"
                  >
                    <path
                      d="M10.0001 13.3333L13.3334 9.16658H10.8334V3.33325H9.16675V9.16658H6.66675L10.0001 13.3333Z"
                      fill="white"
                    />
                    <path
                      d="M16.6667 15.0001H3.33341V9.16675H1.66675V15.0001C1.66675 15.9192 2.41425 16.6667 3.33341 16.6667H16.6667C17.5859 16.6667 18.3334 15.9192 18.3334 15.0001V9.16675H16.6667V15.0001Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </a>
              <a
                target="_blank"
                className="bg-secondary h-12 sm:h-[54px] w-12 sm:w-[54px] flex items-center justify-center rounded-full"
                href="https://www.linkedin.com/in/am1rmousav1/"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.39825 7.79682C6.70735 7.79682 7.76858 6.73558 7.76858 5.42649C7.76858 4.11739 6.70735 3.05615 5.39825 3.05615C4.08915 3.05615 3.02792 4.11739 3.02792 5.42649C3.02792 6.73558 4.08915 7.79682 5.39825 7.79682Z"
                    fill="#D3E97A"
                  />
                  <path
                    d="M10.0068 9.59282V22.7434H14.0898V16.2402C14.0898 14.5242 14.4127 12.8623 16.5403 12.8623C18.6388 12.8623 18.6648 14.8242 18.6648 16.3485V22.7445H22.75V15.5327C22.75 11.9902 21.9873 9.26782 17.8468 9.26782C15.8589 9.26782 14.5264 10.3587 13.9815 11.3912H13.9263V9.59282H10.0068ZM3.35292 9.59282H7.4425V22.7434H3.35292V9.59282Z"
                    fill="#D3E97A"
                  />
                </svg>
              </a>
              <a
                target="_blank"
                className="bg-secondary h-12 sm:h-[54px] w-12 sm:w-[54px] flex items-center justify-center rounded-full"
                href="https://github.com/amirmousav1"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.0282 0.166748C5.06008 0.166748 0.223 5.00383 0.223 10.9719C0.223 15.7451 3.31808 19.7957 7.61242 21.2257C8.153 21.3232 8.348 20.9906 8.348 20.7046C8.348 20.4478 8.33933 19.7675 8.33608 18.8673C5.32983 19.5194 4.695 17.4178 4.695 17.4178C4.20533 16.1698 3.49575 15.8372 3.49575 15.8372C2.51533 15.1666 3.5705 15.1818 3.5705 15.1818C4.656 15.2576 5.22475 16.2954 5.22475 16.2954C6.18892 17.9464 7.75542 17.4698 8.36858 17.1935C8.46717 16.4948 8.74883 16.0181 9.0565 15.7483C6.658 15.4764 4.136 14.5491 4.136 10.4075C4.136 9.22992 4.55742 8.26358 5.24533 7.50958C5.13592 7.2355 4.76217 6.13592 5.35258 4.64958C5.35258 4.64958 6.25933 4.35817 8.32308 5.75567C9.20448 5.51589 10.1137 5.3935 11.0271 5.39167C11.9405 5.39315 12.8498 5.51554 13.7311 5.75567C15.7959 4.35708 16.7016 4.64958 16.7016 4.64958C17.292 6.13592 16.9215 7.2355 16.8088 7.50958C17.5022 8.26358 17.9182 9.22883 17.9182 10.4075C17.9182 14.5599 15.394 15.4721 12.9868 15.7397C13.3714 16.0733 13.7181 16.732 13.7181 17.7395C13.7181 19.1847 13.7051 20.3503 13.7051 20.7046C13.7051 20.9938 13.8979 21.3297 14.4493 21.2235C18.7415 19.7913 21.8333 15.744 21.8333 10.9719C21.8333 5.00383 16.9963 0.166748 11.0282 0.166748Z"
                    fill="#D3E97A"
                  />
                </svg>
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
                    className="py-4 px-6 lg:py-5 lg:px-10 rounded-[100px] border leading-[100%] border-[#484848]"
                  >
                    {skill}
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
                    heyam1rmousav1@gmail.com
                  </span>
                </span>
                <span>
                  For more info, here&apos;s my{" "}
                  <a
                    className="border-b py-1 border-primary text-white"
                    href="#"
                  >
                    resume
                  </a>
                </span>
              </div>
              <div className="mt-10">
                <ul className="flex gap-8 md:gap-6">
                  <li>
                    <a href="https://www.linkedin.com/in/am1rmousav1/">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.644 9.59602C8.2552 9.59602 9.56134 8.28988 9.56134 6.67869C9.56134 5.06749 8.2552 3.76135 6.644 3.76135C5.0328 3.76135 3.72667 5.06749 3.72667 6.67869C3.72667 8.28988 5.0328 9.59602 6.644 9.59602Z"
                          fill="#D3E97A"
                        />
                        <path
                          d="M12.316 11.8067V27.992H17.3413V19.988C17.3413 17.876 17.7387 15.8307 20.3573 15.8307C22.94 15.8307 22.972 18.2453 22.972 20.1213V27.9933H28V19.1173C28 14.7573 27.0613 11.4067 21.9653 11.4067C19.5187 11.4067 17.8787 12.7493 17.208 14.02H17.14V11.8067H12.316ZM4.12666 11.8067H9.16V27.992H4.12666V11.8067Z"
                          fill="#D3E97A"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/amirmousav1">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 28 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.0347 0.666687C6.68933 0.666687 0.735992 6.62002 0.735992 13.9654C0.735992 19.84 4.54533 24.8254 9.83066 26.5854C10.496 26.7054 10.736 26.296 10.736 25.944C10.736 25.628 10.7253 24.7907 10.7213 23.6827C7.02133 24.4854 6.23999 21.8987 6.23999 21.8987C5.63733 20.3627 4.76399 19.9534 4.76399 19.9534C3.55733 19.128 4.85599 19.1467 4.85599 19.1467C6.19199 19.24 6.89199 20.5174 6.89199 20.5174C8.07866 22.5494 10.0067 21.9627 10.7613 21.6227C10.8827 20.7627 11.2293 20.176 11.608 19.844C8.65599 19.5094 5.55199 18.368 5.55199 13.2707C5.55199 11.8214 6.07066 10.632 6.91733 9.70402C6.78266 9.36669 6.32266 8.01335 7.04933 6.18402C7.04933 6.18402 8.16533 5.82535 10.7053 7.54535C11.7901 7.25025 12.9091 7.09961 14.0333 7.09735C15.1576 7.09918 16.2766 7.24982 17.3613 7.54535C19.9027 5.82402 21.0173 6.18402 21.0173 6.18402C21.744 8.01335 21.288 9.36669 21.1493 9.70402C22.0027 10.632 22.5147 11.82 22.5147 13.2707C22.5147 18.3814 19.408 19.504 16.4453 19.8334C16.9187 20.244 17.3453 21.0547 17.3453 22.2947C17.3453 24.0734 17.3293 25.508 17.3293 25.944C17.3293 26.3 17.5667 26.7134 18.2453 26.5827C23.528 24.82 27.3333 19.8387 27.3333 13.9654C27.3333 6.62002 21.38 0.666687 14.0347 0.666687Z"
                          fill="#D3E97A"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/shomabeguamir">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z"
                          fill="#D3E97A"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span className="font-medium hidden md:block">
              ©2024 Amir Mousavi
            </span>
          </div>
          <div className="flex-1 mt-16 md:mt-0">
            <Form />
          </div>
        </section>
      </main>
      <footer className="md:hidden container mx-auto px-4 pt-4 pb-16">
        <span className="font-medium md:hidden">©2024 Amir Mousavi</span>
      </footer>
    </div>
  );
}

export default App;

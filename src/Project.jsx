function Project({ data }) {
  return (
    <div className="md:flex items-center gap-12 mb-[96px] md:mb-[120px]">
      <div className="bg-[#1A1A1A] hover:bg-[#2D2D2D] duration-300 hover:-translate-y-5 flex-1 aspect-square rounded-xl md:w-[500px] flex items-center">
        <img
          className="rounded-xl object-cover h-full"
          src={`${data.image}`}
          alt={`${data.title}`}
        />
      </div>
      <div className="flex-1 mt-10 md:mt-0">
        <h3 className="text-[24px] md:text-[32px] text-white font-medium leading-[140%]">
          {data.title}
        </h3>
        <p className="mt-4 leading-[150%]">{data.description}</p>
        <div className="mt-4">
          <div className="border-b border-[#484848] py-4">
            <span className="font-semibold">Project Info</span>
          </div>
          <div className="border-b border-[#484848] py-4 flex justify-between font-medium text-sm">
            <span>Year</span>
            <span>{data.year}</span>
          </div>
          <div className="border-b border-[#484848] py-4 flex justify-between font-medium text-[13px] lg:text-sm">
            <span>Tools</span>
            <span>{data.technologies}</span>
          </div>
        </div>
        <div className="mt-10 text-sm md:text-base md:mt-12 flex gap-6">
          <a
            className="text-primary border-b-2 pb-1 leading-[150%] font-bold border-primary"
            href={`${data.demoLink}`}
            target="_blank"
          >
            <span className="inline mr-2">Live Demo</span>
            <svg
              className="inline"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.9897 14.2176L12.3036 3.90369V11.3891L14.3033 11.3891L14.3033 0.489781L3.40391 0.489781L3.40391 2.48948L10.8893 2.48948L0.575487 12.8033L1.9897 14.2176Z"
                fill="#D3E97A"
              />
            </svg>
          </a>
          <a
            className="text-primary pb-1 leading-[150%] px-[2px] border-b-2 font-bold border-primary"
            href={`${data.githubLink}`}
            target="_blank"
          >
            <span className="inline mr-2">See on Github</span>
            <svg
              className="inline"
              width="20"
              height="20"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.0282 0.166748C5.06011 0.166748 0.223022 5.00383 0.223022 10.9719C0.223022 15.7451 3.31811 19.7957 7.61244 21.2257C8.15302 21.3232 8.34802 20.9906 8.34802 20.7046C8.34802 20.4478 8.33936 19.7675 8.33611 18.8673C5.32986 19.5194 4.69502 17.4178 4.69502 17.4178C4.20536 16.1698 3.49577 15.8372 3.49577 15.8372C2.51536 15.1666 3.57052 15.1818 3.57052 15.1818C4.65602 15.2576 5.22477 16.2954 5.22477 16.2954C6.18894 17.9464 7.75544 17.4698 8.36861 17.1935C8.46719 16.4948 8.74886 16.0181 9.05652 15.7483C6.65802 15.4764 4.13602 14.5491 4.13602 10.4075C4.13602 9.22992 4.55744 8.26358 5.24536 7.50958C5.13594 7.2355 4.76219 6.13592 5.35261 4.64958C5.35261 4.64958 6.25936 4.35817 8.32311 5.75567C9.2045 5.51589 10.1137 5.3935 11.0271 5.39167C11.9406 5.39315 12.8498 5.51554 13.7311 5.75567C15.7959 4.35708 16.7016 4.64958 16.7016 4.64958C17.292 6.13592 16.9215 7.2355 16.8089 7.50958C17.5022 8.26358 17.9182 9.22883 17.9182 10.4075C17.9182 14.5599 15.394 15.4721 12.9869 15.7397C13.3714 16.0733 13.7181 16.732 13.7181 17.7395C13.7181 19.1847 13.7051 20.3503 13.7051 20.7046C13.7051 20.9938 13.8979 21.3297 14.4494 21.2235C18.7415 19.7913 21.8334 15.744 21.8334 10.9719C21.8334 5.00383 16.9963 0.166748 11.0282 0.166748Z"
                fill="#D3E97A"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;

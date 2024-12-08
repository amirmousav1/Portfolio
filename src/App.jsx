import { useRef } from "react";
import Form from "./Form";
import Project from "./Project";

const skills = [
  {
    name: "React",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 256 228"
      >
        <path
          fill="#00d8ff"
          d="M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848a156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165a168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923a168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026a347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815a329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627a310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695a359 359 0 0 1 11.036 20.54a330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86"
        ></path>
      </svg>
    ),
  },
  {
    name: "NextJs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 128 128"
      >
        <circle cx={64} cy={64} r={64}></circle>
        <path
          fill="url(#deviconNextjs0)"
          d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64 64 0 0 0 6.763-5.209"
        ></path>
        <path
          fill="url(#deviconNextjs1)"
          d="M81.778 38.4h8.533v51.2h-8.533z"
        ></path>
        <defs>
          <linearGradient
            id="deviconNextjs0"
            x1={109}
            x2={144.5}
            y1={116.5}
            y2={160.5}
            gradientTransform="scale(.71111)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff"></stop>
            <stop offset={1} stopColor="#fff" stopOpacity={0}></stop>
          </linearGradient>
          <linearGradient
            id="deviconNextjs1"
            x1={121}
            x2={120.799}
            y1={54}
            y2={106.875}
            gradientTransform="scale(.71111)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff"></stop>
            <stop offset={1} stopColor="#fff" stopOpacity={0}></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 256 256"
      >
        <path fill="#f7df1e" d="M0 0h256v256H0z"></path>
        <path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"></path>
      </svg>
    ),
  },
  {
    name: "React Query",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 256 230"
      >
        <path
          fill="#00435b"
          d="m157.98 142.487l-4.91 8.527a8.29 8.29 0 0 1-7.182 4.151H108.27a8.29 8.29 0 0 1-7.182-4.151l-4.911-8.527zm13.747-23.87l-8.658 15.034h-71.98l-8.658-15.034zm-8.34-23.342l8.354 14.506H82.417l8.354-14.506zm-17.5-22.066a8.29 8.29 0 0 1 7.183 4.151l5.228 9.079H95.86l5.229-9.079a8.29 8.29 0 0 1 7.182-4.151z"
        ></path>
        <path
          fill="#002b3b"
          d="M53.523 69.252c-4.167-20.206-5.062-35.704-2.368-46.957c1.602-6.693 4.53-12.153 8.984-16.093c4.702-4.159 10.646-6.2 17.326-6.2c11.018 0 22.602 5.025 34.98 14.57c5.05 3.894 10.29 8.587 15.732 14.082c.434-.557.923-1.083 1.469-1.57c15.386-13.71 28.34-22.23 39.42-25.514c6.588-1.954 12.773-2.14 18.405-.244c5.946 2 10.683 6.137 14.026 11.93c5.516 9.561 6.97 22.124 4.914 37.637c-.838 6.323-2.271 13.21-4.296 20.673c.764.092 1.53.262 2.288.513c19.521 6.47 33.345 13.426 41.714 21.377c4.98 4.73 8.231 9.996 9.407 15.826c1.24 6.153.03 12.324-3.308 18.113c-5.506 9.548-15.63 17.077-30.052 23.041c-5.79 2.395-12.343 4.564-19.664 6.515c.334.754.594 1.555.767 2.395c4.167 20.206 5.061 35.704 2.368 46.957c-1.602 6.693-4.531 12.153-8.985 16.093c-4.701 4.159-10.646 6.2-17.325 6.2c-11.019 0-22.602-5.025-34.98-14.57c-5.104-3.936-10.402-8.687-15.907-14.258a11.7 11.7 0 0 1-2.084 2.442c-15.386 13.712-28.34 22.23-39.42 25.515c-6.588 1.954-12.773 2.14-18.405.244c-5.946-2-10.683-6.137-14.026-11.93c-5.516-9.561-6.97-22.124-4.914-37.637c.869-6.551 2.376-13.709 4.518-21.485a11.7 11.7 0 0 1-2.51-.537c-19.521-6.47-33.345-13.426-41.714-21.377c-4.98-4.73-8.231-9.996-9.407-15.826c-1.24-6.153-.03-12.325 3.308-18.114c5.506-9.547 15.63-17.077 30.052-23.04c5.963-2.467 12.734-4.693 20.32-6.689a12 12 0 0 1-.633-2.082"
        ></path>
        <path
          fill="#ff4154"
          d="M189.647 161.333a3.684 3.684 0 0 1 4.235 2.81l.023.112l.207 1.075q10.065 52.915-14.18 52.915q-23.72 0-60.392-45.153a3.684 3.684 0 0 1 2.777-6.005h.114l1.288.009q15.432.084 30.004-1.076q17.2-1.37 35.924-4.687M78.646 134.667l.062.105l.646 1.127q7.765 13.5 16.18 25.627q9.912 14.28 22.29 28.914a3.684 3.684 0 0 1-.309 5.082l-.093.083l-.83.715q-40.96 35.096-53.244 14.012q-12.025-20.636 8.719-75.047a3.683 3.683 0 0 1 6.579-.618m124.857-52.054l.112.037l1.028.354q50.557 17.588 38.416 38.655q-11.874 20.605-69.041 30.004a3.683 3.683 0 0 1-3.773-5.501q8.188-13.928 14.749-27.717q7.44-15.638 13.965-33.57a3.684 3.684 0 0 1 4.432-2.295zM84.446 76.71a3.683 3.683 0 0 1 1.31 5.042q-8.19 13.927-14.75 27.717q-7.44 15.637-13.965 33.57a3.684 3.684 0 0 1-4.544 2.262l-.112-.037l-1.028-.355Q.8 127.322 12.941 106.255Q24.815 85.65 81.982 76.25c.85-.14 1.722.022 2.464.459m108.206-57.748q12.025 20.637-8.719 75.048a3.683 3.683 0 0 1-6.579.618l-.062-.105l-.646-1.127q-7.765-13.5-16.18-25.627q-9.912-14.28-22.29-28.914a3.684 3.684 0 0 1 .309-5.082l.093-.083l.83-.715q40.96-35.095 53.244-14.013M77.45 10.59q23.721 0 60.392 45.152a3.684 3.684 0 0 1-2.777 6.005h-.114l-1.288-.008q-15.431-.084-30.003 1.076q-17.202 1.37-35.925 4.687a3.684 3.684 0 0 1-4.234-2.81l-.024-.113l-.207-1.074Q53.204 10.59 77.45 10.59"
        ></path>
        <path
          fill="#ffd94c"
          d="M111.295 73.67h31.576a12.89 12.89 0 0 1 11.181 6.475l15.855 27.626a12.89 12.89 0 0 1 0 12.834l-15.855 27.626a12.89 12.89 0 0 1-11.181 6.475h-31.576c-4.618 0-8.883-2.47-11.182-6.475L84.26 120.605a12.89 12.89 0 0 1 0-12.834l15.854-27.626a12.89 12.89 0 0 1 11.182-6.475m26.763 8.338c4.62 0 8.888 2.473 11.185 6.481l11.056 19.288a12.89 12.89 0 0 1 0 12.822l-11.056 19.288a12.89 12.89 0 0 1-11.185 6.48h-21.95c-4.62 0-8.888-2.472-11.185-6.48l-11.056-19.288a12.89 12.89 0 0 1 0-12.822l11.056-19.288a12.89 12.89 0 0 1 11.184-6.48zm-5.187 9.12h-11.576a12.89 12.89 0 0 0-11.179 6.47l-5.842 10.167a12.89 12.89 0 0 0 0 12.846l5.842 10.168a12.89 12.89 0 0 0 11.179 6.47h11.576c4.616 0 8.88-2.468 11.179-6.47l5.842-10.168a12.89 12.89 0 0 0 0-12.846l-5.842-10.168a12.89 12.89 0 0 0-11.179-6.47m-4.994 8.729c4.612 0 8.873 2.464 11.173 6.46l.829 1.44a12.89 12.89 0 0 1 0 12.862l-.829 1.44a12.89 12.89 0 0 1-11.173 6.46h-1.588a12.89 12.89 0 0 1-11.173-6.46l-.829-1.44a12.89 12.89 0 0 1 0-12.862l.829-1.44a12.89 12.89 0 0 1 11.173-6.46zm-.792 8.599a5.74 5.74 0 0 0-4.97 2.866a5.73 5.73 0 0 0 0 5.732a5.738 5.738 0 0 0 9.937 0a5.73 5.73 0 0 0 0-5.732a5.74 5.74 0 0 0-4.967-2.866m-46.509 5.732h10.32"
        ></path>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 128 128"
      >
        <path
          fill="#38bdf8"
          d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"
        ></path>
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 128 128"
      >
        <path
          fill="#f34f29"
          d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.68 9.68 0 0 1-2.105-10.521L68.574 47.933l-.002 34.341a9.7 9.7 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.7 9.7 0 0 1 3.167-2.11V47.333a9.6 9.6 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333L3.264 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 0 0-.001-11.501"
        ></path>
      </svg>
    ),
  },
  {
    name: "Bootstrap",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 128 128"
      >
        <defs>
          <linearGradient
            id="deviconBootstrap0"
            x1={76.079}
            x2={523.48}
            y1={10.798}
            y2={365.95}
            gradientTransform="translate(1.11 14.613)scale(.24566)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#9013fe"></stop>
            <stop offset={1} stopColor="#6610f2"></stop>
          </linearGradient>
          <linearGradient
            id="deviconBootstrap1"
            x1={193.51}
            x2={293.51}
            y1={109.74}
            y2={278.87}
            gradientTransform="translate(0 52)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#fff"></stop>
            <stop offset={1} stopColor="#f1e5fc"></stop>
          </linearGradient>
          <filter
            id="deviconBootstrap2"
            width={197}
            height={249}
            x={161.9}
            y={135.46}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy={4}></feOffset>
            <feGaussianBlur stdDeviation={8}></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
        <path
          fill="url(#deviconBootstrap0)"
          d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099c-.228 6.546.068 15.026 2.202 21.94c2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883c-2.134 6.914-2.43 15.394-2.202 21.94c.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098c.228-6.546-.068-15.026-2.203-21.94c-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883c2.135-6.914 2.43-15.394 2.203-21.94"
        ></path>
        <path
          fill="url(#deviconBootstrap1)"
          d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355c0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219c0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279c0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49c0 23.459-16.484 35.941-47.605 35.941z"
          filter="url(#deviconBootstrap2)"
          transform="translate(1.494 2.203)scale(.24566)"
        ></path>
      </svg>
    ),
  },
  {
    name: "CSS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 128 128"
      >
        <path
          fill="#1572b6"
          d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"
        ></path>
        <path
          fill="#33a9dc"
          d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"
        ></path>
        <path
          fill="#fff"
          d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"
        ></path>
        <path
          fill="#ebebeb"
          d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"
        ></path>
        <path
          fill="#fff"
          d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"
        ></path>
        <path
          fill="#ebebeb"
          d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"
        ></path>
      </svg>
    ),
  },
  {
    name: "HTML",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 128 128"
      >
        <path
          fill="#e44d26"
          d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z"
        ></path>
        <path
          fill="#f16529"
          d="m64 116.8l36.378-10.086l8.559-95.878H64z"
        ></path>
        <path
          fill="#ebebeb"
          d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z"
        ></path>
        <path
          fill="#fff"
          d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z"
        ></path>
      </svg>
    ),
  },
  // "React",
  // "NextJs",
  // "JavaScript",
  // "React Query",
  // "Tailwind CSS",
  // "Git",
  // "Bootstrap",
  // "CSS",
  // "HTML",
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

import { Ilogo } from "./interFaceLogo";

const LogoWeb = ({ className }: Ilogo) => {
  return (
    <svg
      width="30"
      height="28"
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="30" height="28" rx="8" fill="url(#paint0_linear_108_990)" />
      <path
        d="M7 12C7 13.8565 7.7375 15.637 9.05025 16.9497C10.363 18.2625 12.1435 19 14 19C15.8565 19 17.637 18.2625 18.9497 16.9497C20.2625 15.637 21 13.8565 21 12L7 12Z"
        fill="#FFFEFE"
      />
      <defs>
        <linearGradient
          id="paint0_linear_108_990"
          x1="8.5"
          y1="4.61262e-07"
          x2="24"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6038" />
          <stop offset="1" stopColor="#FF4415" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LogoWeb;

//Import Images
import ignite from "./images/project_thumbnails/ignite.jpg";
import beatMaker from "./images/project_thumbnails/beatMaker.jpg";
import musicPlayer from "./images/project_thumbnails/musicPlayer.jpg";
import loanCal from "./images/project_thumbnails/loanCalculator.jpg";

export const ProjectState = () => {
  return [
    {
      title: "ignite",
      mainImg: ignite,
      url: "/projects/ignite",
      info: [
        {
          title: "Project Overview",
          description:
            "Ignite is a dynamic web app that provides up-to-date game information using React Hooks, Redux, and the RAWG.io API. It features interactive search and filtering for an enhanced user experience.",
        },
        {
          title: "Technologies Used",
          description:
            "Built with React.js, Redux for state management, and integrates real-time data from RAWG.io API",
        },
      ],
    },
    {
      title: "Music Player",
      mainImg: musicPlayer,
      url: "/projects/music-player",
      info: [
        {
          title: "Project Overview",
          description:
            "A sleek and modern music player built with React. It offers a curated playlist and allows users to play, pause, and skip tracks, all with a clean user interface.",
        },
        {
          title: "Technologies Used",
          description:
            "Developed with React.js, featuring state management using React Hooks and styled-components for custom styling",
        },
      ],
    },
    {
      title: "The Beat Maker",
      mainImg: beatMaker,
      url: "/projects/beat-maker",
      info: [
        {
          title: "Project Overview",
          description:
            "“An interactive beat-making application that lets users create and customize their own beats. It features a responsive grid interface for easy beat creation.",
        },
        {
          title: "Technologies Used",
          description:
            "Built with htmll and css and for sound generation and playback.",
        },
      ],
    },
    {
      title: "Loan Calculator",
      mainImg: loanCal,
      url: "/projects/loan-calculator",
      info: [
        {
          title: "Project Overview",
          description:
            "A simple and effective loan calculator that helps users estimate their monthly payments based on loan amount, interest rate, and term.",
        },
        {
          title: "Technologies Used",
          description:
            "Developed with React.js, featuring form handling and real-time calculations.",
        },
      ],
    },
  ];
};

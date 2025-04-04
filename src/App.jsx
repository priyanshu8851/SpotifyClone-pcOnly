import { useState } from 'react';
import './App.css';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { FaPlay } from "react-icons/fa";

import { BsThreeDots } from "react-icons/bs";

function App() {
  const [input, setInput] = useState("");

  const songs = [
    {
      id: 1,
      title: "Starboy",
      by: "Weekend",
      img: "./starboy.png",
      time: "4:16"
    },
    {
      id: 2,
      title: "Demons",
      by: "Imagine Dragons",
      img: "./1.png",
      time: "5:24"
    },
    {
      id: 3,
      title: "Mouth of the River",
      by: "Imagine Dragons",
      img: "./2.png",
      time: "6:23"
    },
    {
      id: 4,
      title: "Ghost Stories",
      by: "Coldplay",
      img: "./3.png",
      time: "3:10"

    },
    {
      id: 5,
      title: "Sparks",
      by: "Coldplay",
      img: "./4.png",
      time: "4:23"
    },
    {
      id: 6,
      title: "Viva La Vida",
      by: "Coldplay",
      img: "./5.png",
      time: "2:23"
    },
    {
      id: 7,
      title: "Hymn for the Weekend",
      by: "Coldplay",
      img: "./6.png",
      time: "5:23"
    },
    {
      id: 8,
      title: "Pain",
      by: "Coldplay",
      img: "./7.png",
      time: "3:23"
    },
  ];

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="spotify-left">
            <div className="left-up">
              <div className="logo">
                <img src="./Logo.png" alt="spotify-logo" />
              </div>
              <ul>
                <li><a href="#">For You</a></li>
                <li><a href="#">Top Tracks</a></li>
                <li><a href="#">Favourites</a></li>
                <li><a href="#">Recently Played</a></li>
              </ul>
            </div>
            <img src="./Profile.png" alt="profile-icon" className="profile-icon" />
          </div>

          <div className="spotify-mid">
            <h2>For You</h2>
            <div className="inp">
              <input
                type="text"
                placeholder="Search Song, Artist"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <img src="./Frame.png" alt="" />
            </div>

            <div className="songs-area">
              <ul>
                {songs.map((song) => (
                  <li key={song.id}>
                    <div className="song-left">
                      <img src={song.img} alt="" />
                      <div className="song-txt">
                        <p>{song.title}</p>
                        <span>{song.by}</span>
                      </div>
                    </div>
                    <div className="song-right">
                      <p>{song.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="spotify-right">
            <div className="sr-main">
              <div className="sr-head">
                <h3>Ghost Stories</h3>
                <span>Coldplay</span>
              </div>
              <img src="./Center.png" alt="" />
              <div className="player">
                <button>
                  <BsThreeDots />


                </button>
                <div className="mid-player">
                  <IoIosArrowDropleftCircle />
                  <FaPlay />
                  <IoIosArrowDropright />
                </div>
                <button>
                  <HiMiniSpeakerWave />
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer>
        <p>Made By <a href="https://priyanshukashyap.netlify.app/">Priyanshu</a></p>
        </footer>
      </div>
    </>
  );
}

export default App;

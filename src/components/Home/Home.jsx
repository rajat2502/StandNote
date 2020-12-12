import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Lottie from "react-lottie";
import animationData from "assets/lotties/chat.json";
import animationData1 from "assets/lotties/bubble.json";
import blogger from "assets/blogger.png";
import Notion from "assets/Notion.png";
import businessmen from "assets/businessmen.png";

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const anim2 = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 gap-2 p-12">
        <div>
          <h2 className=" pt-6 text-left text-6xl text-gray-700 font-bold">
            StandNote
          </h2>
          <h4 className="mb-4 pb-4 pt-2 text-left text-2xl text-gray-500 font-bold">
            Turn Conversations into Actions...
          </h4>
          <p className="text-xl font-semibold text-gray-700">
            Your easy to use online meeting assistant that backs you up with
            automated meeting minutes in every conversation. It will help you
            save time on board meetings, team management, and customer support
            such that you just focus on the conversation and never miss what’s
            important.
          </p>
        </div>
        <div>
          <Lottie options={defaultOptions} height={500} width={600} />
        </div>
      </div>
      <div className="bg-gray-200">
        <h1 className="mb-4 pt-12 text-center text-4xl text-gray-700 font-bold">
          What StandNote does?
        </h1>
        <div className="grid grid-cols-3 gap-4 px-28 pb-20 pt-16 content-center">
          <div>
            <img
              src={blogger}
              alt="record"
              style={{ margin: "auto", height: "100px", width: "100px" }}
            />
            <h4 className="mb-4 pb-4 pt-2 text-center text-2xl text-gray-500 font-bold">
              Stay focused and productive
            </h4>
            <p className="text-xl text-gray-800 text-center">
              Helps you save time on board meetings, team management, and
              customer support such that you just focus on the conversation and
              never miss what’s important.
            </p>
          </div>
          <div>
            <img
              src={businessmen}
              alt="record"
              style={{ margin: "auto", height: "100px", width: "100px" }}
            />
            <h4 className="mb-4 pb-4 pt-2 text-center text-2xl text-gray-500 font-bold">
              Sharable smart meeting notes
            </h4>
            <p className="text-xl text-gray-800 text-center">
              What’s more special is - using our unique machine learning
              algorithms, and extract essential insights and turn them into a
              comprehensive, collaborative meeting summary.
            </p>
          </div>
          <div>
            <img
              src={Notion}
              alt="record"
              style={{ margin: "auto", height: "100px", width: "100px" }}
            />
            <h4 className="mb-4 pb-4 pt-2 text-center text-2xl text-gray-500 font-bold">
              Directly save to Notion
            </h4>
            <p className="text-xl text-gray-800 text-center">
              Packed with a Notion integrations to further ease your work life.
              Use with anything and everything - Google meet, Zoom, Blue Jeans,
              GoToMeeting, Microsoft Teams, and more.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-12">
        <div>
          <Lottie options={anim2} height={300} width={300} />
        </div>
        <div className="pb-6">
          <h2 className=" pt-6 text-left text-5xl text-gray-700 font-bold">
            What we offer?
          </h2>
          <h4 className="mb-4 pb-4 pt-2 text-left text-2xl text-gray-500 font-bold">
            Make the most out of every conversation!
          </h4>
          <ul className="list-disc">
            <li className="list-inside text-xl">
              Transcribe interviews, podcasts, and videos.
            </li>
            <li className="list-inside text-xl">
              Empower team collaboration with easy sharing and search across all
              your conversations.
            </li>
            <li className="list-inside text-xl">
              Get AI-generated notes for key topics, capture important notes
              using Transcript highlights, and save these notes automatically to
              CRM records.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

import React from "react";
import AvaiterAbout1Img from "../../assets/about1.png";
import AvaiterAboutTeamImg from "../../assets/about-team1.png";
import AvaiterAboutTeam2Img from "../../assets/about-team-2.png";
import AvaiterAboutTeam3Img from "../../assets/about-team-3.png";
import AvaiterAboutTeam4Img from "../../assets/about-team-4.png";
import Reveal from "../../animation/Reveal";
import NewsLetter from "../../component/NewsLetter";

const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-7xl items-center justify-center md:px-6 py-4">
        <Reveal>
        <div className="flex flex-col flex-wrap items-center justify-center space-y-2">
          <h2 className="text-xl font-bold font-serif ">
            About Us
          </h2>
          <p className="text-sm font-semibold text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            praesentium maiores voluptatem illum, nam impedit id assumenda
            accusantium quis vitae tempora, laborum saepe. Nesciunt ea facere
            porro quam reiciendis earum?Lorem ipsum dolor sit amet consectetur
            adipisicing.Atque cupiditate volupLotates!Atque cupiditate ipsum
            dolor sit amet
          </p>
        </div>
        </Reveal>
        {/* our mission */}
        <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-6 md:py-16">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h2 className="text-xl font-bold font-serif">
              Our Mission
            </h2>
            <p className="text-sm font-semibold text-justify lg:pr-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              perspiciatis distinctio autem? Iure fugiat qui nesciunt, ullam sed
              fugit ea possimus deserunt, quo placeat minima labore incidunt,
              mollitia quae voluptatibus.
            </p>
            <p className="text-sm font-semibold text-justify lg:pr-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              perspiciatis distinctio autem? Iure fugiat qui nesciunt, ullam sed
              fugit ea possimus deserunt, quo placeat minima labore incidunt,
              mollitia quae voluptatibus.
            </p>
          </div>
          <div className="py-8">
            <img
              src={AvaiterAbout1Img}
              alt=""
              className="rounded-md hover:scale-95 transition-all duration-200"
            />
          </div>
        </div>
        </Reveal>
        {/* our vission */}
        <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="order-2 lg:order-1">
            <img
              src={AvaiterAbout1Img}
              alt=""
              className="rounded-md hover:scale-95 transition-all duration-200"
            />
          </div>
          <div className=" order-1 lg:order-2 flex flex-col items-center justify-center space-y-4">
            <h2 className="text-xl font-bold font-serif ">
              Our Vission
            </h2>
            <p className="text-sm font-semibold text-justify ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              perspiciatis distinctio autem? Iure fugiat qui nesciunt, ullam sed
              fugit ea possimus deserunt, quo placeat minima labore incidunt,
              mollitia quae voluptatibus.
            </p>
            <p className="text-sm font-semibold text-justify ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              perspiciatis distinctio autem? Iure fugiat qui nesciunt, ullam sed
              fugit ea possimus deserunt, quo placeat minima labore incidunt,
              mollitia quae voluptatibus.
            </p>
          </div>
        </div>
        </Reveal>
        {/*meet our trem */}
        <Reveal>
        <div className="py-16">
          <h2 className="text-xl font-bold font-serif text-center py-6">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col shadow-2xl items-center justify-center py-4">
              <img
                src={AvaiterAboutTeamImg}
                alt=""
                className="w-24 h-24 rounded-full bg-cover bg-center bg-no-repeat"
              />
              <h3 className=" font-bold">Wiliam son</h3>
              <p className="text-sm font-semibold ">CEO</p>
            </div>
            <div className="flex flex-col shadow-2xl items-center justify-center py-4">
              <img
                src={AvaiterAboutTeam2Img}
                alt=""
                className="w-24 h-24 rounded-full bg-cover bg-center bg-no-repeat"
              />
              <h3 className=" font-bold">Al-Mamun</h3>
              <p className="text-sm font-semibold">CTC</p>
            </div>
            <div className="flex flex-col shadow-2xl items-center justify-center py-4">
              <img
                src={AvaiterAboutTeam3Img}
                alt=""
                className="w-24 h-24 rounded-full bg-cover bg-center bg-no-repeat"
              />
              <h3 className=" font-bold">Wiliam kaly</h3>
              <p className="text-sm font-semibold ">S/Developer</p>
            </div>
            <div className="flex flex-col shadow-2xl items-center justify-center py-4">
              <img
                src={AvaiterAboutTeam4Img}
                alt=""
                className="w-24 h-24 rounded-full bg-cover bg-center bg-no-repeat"
              />
              <h3 className=" font-bold">Nayeem Ahmed</h3>
              <p className="text-sm font-semibold">
                Project Menager
              </p>
            </div>
          </div>
        </div>
        </Reveal>
        <NewsLetter />
      </div>
    </section>
  );
};

export default About;

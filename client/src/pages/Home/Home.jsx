import React from "react";
import HeroSec from "../../components/HeroSec/HeroSec";
import Speciality from "../../components/SpecialitySection/Speciality";
import Doctors from "../../components/Doctors/Doctors";

const Home = () => {
  return (
    <div className="border p-5 md:ps-10 md:pr-10 flex flex-col justify-center">
      <HeroSec />
      <Speciality />
      <Doctors />

    </div>
  );
};

export default Home;

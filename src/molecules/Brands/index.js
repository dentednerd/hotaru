import { EDF, GMB, HLR, JLR, LAD, SPT, TYLA, UNI } from '../../assets/logos';
import GradientBorder from "../../atoms/GradientBorder";

import "./Brands.scss";

const Brands = () => {
  return (
    <GradientBorder className="brands">
      <a href="https://www.hillarys.co.uk/" aria-label="Hillarys">
        <HLR />
      </a>
      <a href="https://www.edfenergy.com/" aria-label="EDF Energy">
        <EDF />
      </a>
      <a href="https://www.jaguarlandrover.com/" aria-label="Jaguar Land Rover">
        <JLR />
      </a>
      <a href="https://www.tyla.com/" aria-label="Tyla">
        <TYLA />
      </a>
      <a href="https://www.unilad.com/" aria-label="UNILAD">
        <UNI />
      </a>
      <a href="https://www.gamingbible.com/" aria-label="GAMINGbible">
        <GMB />
      </a>
      <a href="https://www.sportbible.com/" aria-label="SPORTbible">
        <SPT />
      </a>
      <a href="https://www.ladbible.com/" aria-label="LADbible">
        <LAD />
      </a>
    </GradientBorder>
  );
};

export default Brands;

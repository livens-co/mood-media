"use client";

import { useRef } from "react";
import "./style.scss";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

const AcademyCreators = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const scrollDistanceFraction = 0.5;

  const handleScroll = (forward: boolean) => {
    if (boxRef.current) {
      const box = boxRef.current;
      const width = box.clientWidth * scrollDistanceFraction;
      box.scrollLeft += forward ? width : -width;
    }
  };

  return (
    <div className="academyCreators">
      <div className="academyCreatorsInner">
        <div className="creatorsContainer" ref={boxRef}>
          <div className="creatorsContainerInner">
            <div className="creatorCard">
              <div className="image">
                <Image
                  src="/assets/academy/Marco_Cuccurin.jpeg"
                  alt="Marko Cuccurin"
                  width={240}
                  height={360}
                />
              </div>
              <div className="text">
                <h2>Marko Cuccurin</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  deleniti minima soluta. Alias, nostrum id repellat error quis
                  ex accusantium!
                </p>
              </div>
            </div>
            <div className="creatorCard">
              <div className="image">
                <Image
                  src="/assets/academy/Nika_Pavicic.jpeg"
                  alt="Nika Pavičić"
                  width={240}
                  height={360}
                />
              </div>
              <div className="text">
                <h2>Nika Pavičić</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  deleniti minima soluta. Alias, nostrum id repellat error quis
                  ex accusantium!
                </p>
              </div>
            </div>
            <div className="creatorCard">
              <div className="image">
                <Image
                  src="/assets/academy/Leon_Kosanovic.jpeg"
                  alt="Leon Kosanovic"
                  width={240}
                  height={360}
                />
              </div>
              <div className="text">
                <h2>Leon Kosanović</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  deleniti minima soluta. Alias, nostrum id repellat error quis
                  ex accusantium!
                </p>
              </div>
            </div>
            <div className="creatorCard">
              <div className="image">
                <Image
                  src="/assets/academy/Rafaela_eba.jpeg"
                  alt="Rafaela Seba"
                  width={240}
                  height={360}
                />
              </div>
              <div className="text">
                <h2>Rafaela Seba</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  deleniti minima soluta. Alias, nostrum id repellat error quis
                  ex accusantium!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation">
        <button onClick={() => handleScroll(false)}>
          <FaArrowLeftLong />
        </button>
        <button onClick={() => handleScroll(true)}>
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default AcademyCreators;

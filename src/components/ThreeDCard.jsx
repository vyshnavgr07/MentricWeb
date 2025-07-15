"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const ThreeDCard = ({ image, alt }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-transparent border-none w-[360px] sm:w-[400px] p-0 rounded-2xl group/card">
        <CardItem translateZ="100" className="w-full">
          <img
            src={image}
            alt={alt || "3D Image"}
            className="h-[440px] w-full object-cover rounded-2xl group-hover/card:shadow-2xl"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default ThreeDCard;

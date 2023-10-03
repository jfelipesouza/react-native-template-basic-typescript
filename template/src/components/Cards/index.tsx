import React from "react";

import { CardContainer, CardContent, CardTitle } from "./styled";

type CardProps = {
  title: string;
  children?: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardContent>{children}</CardContent>
    </CardContainer>
  );
};

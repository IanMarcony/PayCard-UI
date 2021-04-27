import React from "react";
import { useTheme } from "../../hooks/theme";

import {
  CardArea,
  BrandCard,
  CardNumberArea,
  CVVNumberCard,
  MoreInfoCard,
  NameCard,
} from "./styles";

function CreditCard() {
  const { theme } = useTheme();
  return (
    <CardArea theme={theme}>
      <BrandCard>
        <div id="red-circle"></div>
        <div id="yellow-circle"></div>
      </BrandCard>
      <CardNumberArea>
        <h1>CARD NUMBER</h1>
        <div>
          <div id="group">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div id="group">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div id="group">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <CVVNumberCard>1234</CVVNumberCard>
        </div>
        <MoreInfoCard>
          <h1>VALID THROUGH</h1>
          <span>01/28</span>
        </MoreInfoCard>
      </CardNumberArea>

      <NameCard>John Doe</NameCard>
    </CardArea>
  );
}

export default CreditCard;

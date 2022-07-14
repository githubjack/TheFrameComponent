import React from "react";
import styled, { css } from "styled-components";

import { Grid } from "@bedrock-layout/grid";

import shirt from "../public/assets/shirt.jpg";
import { Details } from "./new-arrival-parts";

const ratioStyles = css`
  aspect-ratio: var(--n) / var(--d);
  @supports not (aspect-ratio: 1/1) {
    padding-block-end: calc(var(--d) / var(--n) * 100%);
  }
`;

const Frame = styled.div`
  --n: ${(props) => (props.ratio ? props.ratio[0] : 1)};
  --d: ${(props) => (props.ratio ? props.ratio[1] : 1)};

  ${(props) => props.ratio && ratioStyles}

  position: relative;

  > * {
    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > img,
  > video {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

function NewArrivals() {
  return (
    <div>
      <Frame ratio={[1, 1]}>
        <img src={shirt} alt="" />
      </Frame>
      <Details>Ella Blouse - $35.99</Details>
    </div>
  );
}

export default function NewArrivalList() {
  return (
    <Grid gutter="xl" minItemWidth="15rem">
      <NewArrivals />
      <NewArrivals />
      <NewArrivals />
      <NewArrivals />
    </Grid>
  );
}

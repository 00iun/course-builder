"use client";

import { Container as MapDiv, NaverMap, Marker } from "react-naver-maps";

export default function Home() {
  return (
    <>
      <MapDiv
        style={{
          height: 400,
        }}
      >
        <NaverMap>
          <Marker defaultPosition={{ lat: 37.5666103, lng: 126.9783882 }} />
        </NaverMap>
      </MapDiv>
    </>
  );
}

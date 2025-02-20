"use client";

import { useEffect, useState } from "react";
import MapControlButton from "@/components/mapControlButton";
import { ContextNaverMap } from "@/components/context/myContext";

export default function map() {
  const { naverMap, setNaverMap } = ContextNaverMap();

  useEffect(() => {
    const loadingMap = () => {
      let map: naver.maps.Map;
      const center: naver.maps.LatLng = new naver.maps.LatLng(
        37.3595704,
        127.105399
      );

      map = new naver.maps.Map("map", {
        center: center,
        zoom: 16,
        scaleControl: true,
        logoControl: true,
        mapDataControl: true,
        zoomControl: true,
        mapTypeControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.TOP_RIGHT,
        },
      });

      setNaverMap(map);
    };
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_API_KEY_ID}`;
    script.onload = loadingMap;
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <div id="map" className="w-[1000px] h-[500px] "></div>
      <ul id="buttons" className="flex">
        <MapControlButton />
      </ul>
    </>
  );
}

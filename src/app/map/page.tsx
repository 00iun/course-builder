  "use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function map() {
  const [map, setMap] = useState<naver.maps.Map | null>(null);

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
        zoomControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.TOP_RIGHT,
        },
      });

      map.setOptions("mapTypeControl", true);

      setMap(map);
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
        <li>
          <Button className=" bg-slate-400 rounded">고정</Button>
        </li>
        <li>
          <Button
            className=" bg-slate-400 rounded"
            onClick={(e) => {
              map?.getOptions("disableKineticPan")
                ? map.setOptions("disableKineticPan", false)
                : map?.setOptions("disableKineticPan", true);
            }}
          >
            관성
          </Button>
        </li>
        <li>
          <Button className=" bg-slate-400 rounded">컨트롤</Button>
        </li>
      </ul>
    </>
  );
}

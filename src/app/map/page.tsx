"use client";

import { useEffect, useState } from "react";
import MapControlButton from "@/components/mapControlButton";

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
        scaleControl: true,
        logoControl: true,
        mapDataControl: true,
        zoomControl: true,
        mapTypeControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.TOP_RIGHT,
        },
      });

      setMap(map);
    };
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_API_KEY_ID}`;
    script.onload = loadingMap;
    document.head.appendChild(script);
  }, []);

  // var infowindow = new naver.maps.InfoWindow();

  // function onSuccessGeolocation(position) {
  //   var location = new naver.maps.LatLng(
  //     position.coords.latitude,
  //     position.coords.longitude
  //   );

  //   map?.setCenter(location); // 얻은 좌표를 지도의 중심으로 설정합니다.
  //   map?.setZoom(10); // 지도의 줌 레벨을 변경합니다.

  //   infowindow.setContent(
  //     '<div style="padding:20px;">' +
  //       "geolocation.getCurrentPosition() 위치" +
  //       "</div>"
  //   );

  //   infowindow.open(map, location);
  //   console.log("Coordinates: " + location.toString());
  // }

  // function onErrorGeolocation() {
  //   var center = map.getCenter();

  //   infowindow.setContent(
  //     '<div style="padding:20px;">' +
  //       '<h5 style="margin-bottom:5px;color:#f00;">Geolocation failed!</h5>' +
  //       "latitude: " +
  //       center.lat() +
  //       "<br />longitude: " +
  //       center.lng() +
  //       "</div>"
  //   );

  //   infowindow.open(map, center);
  // }

  // $(window).on("load", function () {
  //   if (navigator.geolocation) {
  //     /**
  //      * navigator.geolocation 은 Chrome 50 버젼 이후로 HTTP 환경에서 사용이 Deprecate 되어 HTTPS 환경에서만 사용 가능 합니다.
  //      * http://localhost 에서는 사용이 가능하며, 테스트 목적으로, Chrome 의 바로가기를 만들어서 아래와 같이 설정하면 접속은 가능합니다.
  //      * chrome.exe --unsafely-treat-insecure-origin-as-secure="http://example.com"
  //      */
  //     navigator.geolocation.getCurrentPosition(
  //       onSuccessGeolocation,
  //       onErrorGeolocation
  //     );
  //   } else {
  //     var center = map.getCenter();
  //     infowindow.setContent(
  //       '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>'
  //     );
  //     infowindow.open(map, center);
  //   }
  // });

  return (
    <>
      <div id="map" className="w-[1000px] h-[500px] "></div>
      <ul id="buttons" className="flex">
        <MapControlButton map={map} />
      </ul>
    </>
  );
}

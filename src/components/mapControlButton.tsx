"use client";

import { Button } from "./ui/button";
import { ContextNaverMap } from "./context/myContext";

function MapControl() {
  const { naverMap } = ContextNaverMap();
  console.log(naverMap);

  interface Props {
    event: React.MouseEvent<HTMLButtonElement>;
    options: string | any[];
  }
  function MapOption({ event, options }: NonNullable<Props>, navermap: naver.maps.Map = naverMap) {
    console.log(typeof navermap)
    event.preventDefault();
    if (typeof options === "string") options = [options];
    return options.map((item) => navermap.setOptions(item, !navermap.getOptions(item)));
  }

  const Clickhandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    options: string | any[]
  ) => MapOption({ event, options });
  return (
    <>
      <li>
        <Button
          className=" bg-slate-400 rounded"
          onClick={(e) => {
            Clickhandler(e, [
              "draggable",
              "pinchZoom",
              "scrollWheel",
              "keyboardShortcuts",
              "dragdisableDoubleTapZoomgable",
              "disableDoubleClickZoom",
              "disableTwoFingerTapZoom",
            ]);
          }}
        >
          고정
        </Button>
      </li>
      <li>
        <Button
          className=" bg-slate-400 rounded"
          onClick={(e) => {
            Clickhandler(e, "disableKineticPan");
          }}
        >
          관성
        </Button>
      </li>
      <li>
        <Button
          className=" bg-slate-400 rounded"
          onClick={(e) => {
            Clickhandler(e, "tileTransition");
          }}
        >
          타일
        </Button>
      </li>
      <li>
        <Button
          className=" bg-slate-400 rounded"
          onClick={(e) => {
            e.preventDefault();
            if (naverMap?.getOptions("minZoom") === 10) {
              naverMap.setOptions({
                minZoom: 7,
                maxZoom: 21,
              });
            } else {
              naverMap?.setOptions({
                minZoom: 10,
                maxZoom: 21,
              });
            }
          }}
        >
          줌인
        </Button>
      </li>
      <li>
        <Button
          className=" bg-slate-400 rounded"
          onClick={(e) => {
            Clickhandler(e, [
              "scaleControl",
              "logoControl",
              "mapDataControl",
              "zoomControl",
              "mapTypeControl",
            ]);
          }}
        >
          숨기기
        </Button>
      </li>
    </>
  );
}

export default MapControl;

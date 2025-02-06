"use client";

console.log('mapOption 호출')

interface Props {
  event: React.MouseEvent<HTMLButtonElement>;
  options: string | any[];
  map: any;
}
export default function MapOption({ event, options, map }: NonNullable<Props>) {
  console.log(options)
  event.preventDefault();

  if (typeof options === "string") options = [options];
  return options.map((item) => map.setOptions(item, !map.getOptions(item)))
}

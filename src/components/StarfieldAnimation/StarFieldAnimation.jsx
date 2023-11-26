import Starfield from "./Starfield";
export default function StarFieldAnimation() {
  return (
    <Starfield
      starCount={700}
      starColor={[161, 161, 170]}
      speedFactor={0.01}
      backgroundColor="#09090B"
    />
  );
}

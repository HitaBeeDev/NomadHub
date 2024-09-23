import backgroundVideo from "../assets/4.mp4";

function BackgroundGif() {
  return (
    <div>
      <video autoPlay loop muted className="absolute rounded-2xl opacity-80">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative mt-6 z-[1]">index page here</div>
    </div>
  );
}

export default BackgroundGif;

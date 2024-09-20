import backgroundVideo from "../assets/4.mp4";

function IndexPage() {
  return (
    <div className="relative h-[80vh] overflow-hidden mt-5 rounded-2xl">
      <video autoPlay loop muted className="absolute opacity-20">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative mt-6 z-[1]">index page here</div>
    </div>
  );
}

export default IndexPage;

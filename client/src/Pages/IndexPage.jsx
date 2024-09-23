import backgroundVideo from "../assets/4.mp4";

function IndexPage() {
  return (
    <div className="grid grid-cols-2 gap-5 h-[80vh] mt-6">
      <div className="col-span-1 relative">
        <video autoPlay loop muted className="absolute rounded-2xl opacity-30">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative mt-6 z-[1]">index page here</div>
      </div>

      <div className="col-span-1"> other Col here</div>
    </div>
  );
}

export default IndexPage;

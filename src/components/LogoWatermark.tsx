
const LogoWatermark = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img 
          src="/placeholder.svg" 
          alt="KK Legal Watermark" 
          className="w-96 h-96 md:w-[500px] md:h-[500px] opacity-[0.12] filter grayscale brightness-[1.2] contrast-[1.5] select-none"
        />
      </div>
    </div>
  );
};

export default LogoWatermark;

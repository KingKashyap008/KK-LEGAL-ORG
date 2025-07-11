
const LogoWatermark = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img 
          src="/lovable-uploads/d2c7383a-b808-4503-8eb7-7814803eba24.png" 
          alt="KK Legal Watermark" 
          className="w-96 h-96 md:w-[500px] md:h-[500px] opacity-[0.15] select-none"
          style={{ 
            filter: 'hue-rotate(15deg) saturate(2.8) brightness(1.5) contrast(1.8) sepia(0.4)'
          }}
        />
      </div>
    </div>
  );
};

export default LogoWatermark;

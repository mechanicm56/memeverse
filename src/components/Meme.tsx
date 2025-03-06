// components/MemeDisplay.tsx
import Image from "next/image";

interface MemeDisplayProps {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
}

const MemeDisplay: React.FC<MemeDisplayProps> = ({
  src,
  width = 300,
  height = 300,
  alt = "Meme",
}) => {
  return (
    <div className="transition-all duration-300 ease-in-out">
      <Image
        src={src}
        className="w-full rounded-xl"
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
      />
    </div>
  );
};

export default MemeDisplay;

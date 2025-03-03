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
    <Image
      src={src}
      className="w-full rounded-xl"
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
    />
  );
};

export default MemeDisplay;

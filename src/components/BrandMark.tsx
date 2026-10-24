import Image from "next/image";

type Props = {
  size?: number;
  className?: string;
};

const ASPECT = 500 / 260;

export default function BrandMark({ size = 28, className = "" }: Props) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const width = Math.round(size * ASPECT);

  return (
    <Image
      src={`${basePath}/brand/nx-mark.png`}
      alt="Nx Conglo"
      width={width}
      height={size}
      priority
      // Automatically inverts black to white in dark mode!
      className={`dark:invert transition-all duration-300 ${className}`}
    />
  );
}
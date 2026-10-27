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
      className={`dark:invert transition-opacity duration-300 opacity-100 dark:opacity-90 ${className}`}
    />
  );
}
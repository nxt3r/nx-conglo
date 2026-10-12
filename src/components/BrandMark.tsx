import Image from "next/image";

type Props = {
  /** Height of the rendered mark in pixels. Width is derived from the asset's aspect ratio. */
  size?: number;
  className?: string;
};

// 500 × 260 asset → width ÷ height
const ASPECT = 500 / 260;

export default function BrandMark({ size = 28, className = "" }: Props) {
  // Manual prefix — we verified this pattern works with static export + basePath.
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const width = Math.round(size * ASPECT);

  return (
    <Image
      src={`${basePath}/brand/nx-mark.png`}
      alt="Nx Conglo"
      width={width}
      height={size}
      priority
      className={className}
    />
  );
}
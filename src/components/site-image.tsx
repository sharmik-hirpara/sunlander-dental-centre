import Image, { type ImageProps } from "next/image";
import { publicAsset } from "@/lib/content";

export function SiteImage({ src, ...props }: ImageProps) {
  const resolved = typeof src === "string" ? publicAsset(src) : src;
  return <Image {...props} src={resolved} />;
}

import logoImg from "@/assets/logo.jpeg";

export default function LogoIcon({ size = 36 }: { size?: number }) {
  return (
    <img
      src="/logo0.png"
      alt="Ngola Projects"
      width={size}
      height={size}
      className="rounded-md object-contain"
    />
  );
}

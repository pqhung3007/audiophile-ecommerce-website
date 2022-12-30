import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className="text-neutral-500 duration-200 hover:text-accent-hover"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
}

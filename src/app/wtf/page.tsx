import { redirect } from "next/navigation";

export default function WTF() {
  redirect("https://www.youtube.com/watch?v=9PUjuouEQIw");

  return <div>WTF</div>;
}

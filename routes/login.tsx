import { PageProps } from "$fresh/server.ts";
import { Button } from "../components/Button.tsx";
import Code from "../islands/Code.tsx";

export default function Greet(props: PageProps) {
  return <Code />;
}

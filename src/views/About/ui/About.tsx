import { Certificates } from "./certificates";
import { LinaStory } from "./LinaStory";
import { Quality } from "./quality";
import { Validity } from "./validity";

export function About() {
  return (
    <div className="container">
      <LinaStory />
      <Quality />
      <Validity />
      <Certificates />
    </div>
  );
}

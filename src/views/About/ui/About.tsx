import { Certificates } from "./certificates";
import { LinaStory } from "./LinaStory";
import { Quality } from "./quality";
import { Validity } from "./validity";

export function about() {
  return (
    <>
      <LinaStory />
      <Quality />
      <Validity />
      <Certificates />
    </>
  );
}

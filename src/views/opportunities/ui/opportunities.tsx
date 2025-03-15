import { JobPosting } from "./jobPosting";
import { Conditions } from "./conditions";
import { ImageList } from "./imageList";
import { SkillsList } from "./skillsList";
import { Salaries } from "./salaries";

export function Opportunities() {
  return (
    <div className="container">
      <JobPosting />
      <Conditions />
      <ImageList />
      <SkillsList />
      <Salaries />
    </div>
  );
}

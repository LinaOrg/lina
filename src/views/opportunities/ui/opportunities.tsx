import { JobPosting } from "./jobPosting";
import { Conditions } from './conditions';
import ImageList from "./imageList/imageList";
import SkillsList from "./skillsList/skillsList";
import Salaries from "./salaries/salaries";



export function Opportunities() {
  return (
    <>
      <JobPosting />
      <Conditions/>
      <ImageList/>
      <SkillsList/>
      <Salaries/>
    </>
  );
}

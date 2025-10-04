import { ITrackLearningPeriod } from "../domain";

export const getCurrentLearningPeriod = (
  learningPeriods: ITrackLearningPeriod[]
) => {
  const lp = learningPeriods.find((lp) => {
    const now = new Date();
    return now >= new Date(lp.start_date) && now <= new Date(lp.end_date);
  });
  if (lp) return lp;
  return [...learningPeriods]
    .sort(
      (a, b) => new Date(b.end_date).getTime() - new Date(a.end_date).getTime()
    )
    .find((lp) => new Date(lp.end_date) < new Date());
};

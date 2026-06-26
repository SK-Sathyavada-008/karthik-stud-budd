import LessonPageClient from "./LessonPageClient";

export function generateStaticParams() {
  return [
    { subjectId: "physics", chapterId: "motion" },
    { subjectId: "physics", chapterId: "force" },
    { subjectId: "physics", chapterId: "gravitation" },
    { subjectId: "physics", chapterId: "work" }
  ];
}

export default function Page() {
  return <LessonPageClient />;
}

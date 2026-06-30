import { MOCK_CHAPTERS } from "@/lib/seedData";
import LessonPageClient from "./LessonPageClient";

export function generateStaticParams() {
  const params: { subjectId: string; chapterId: string }[] = [];
  Object.entries(MOCK_CHAPTERS).forEach(([subjectId, chapters]) => {
    chapters.forEach((ch) => {
      params.push({ subjectId, chapterId: ch.id });
    });
  });
  return params;
}

export default function Page() {
  return <LessonPageClient />;
}

import SubjectPageClient from "./SubjectPageClient";

export function generateStaticParams() {
  return [
    { subjectId: "physics" },
    { subjectId: "chemistry" },
    { subjectId: "biology" },
    { subjectId: "math" },
    { subjectId: "history" },
    { subjectId: "geography" },
    { subjectId: "civics" },
    { subjectId: "economics" },
    { subjectId: "english" },
    { subjectId: "it-402" }
  ];
}

export default function Page() {
  return <SubjectPageClient />;
}

import { notFound } from "next/navigation";
import { selectedWork } from "@/lib/data";
import ProjectPage from "@/components/portfolio/ProjectPage";

interface PostParams {
  params: Promise<{ slug: string }>;
}

// Add this ↓
export async function generateStaticParams() {
  return selectedWork.map((item) => ({
    slug: item.slug,
  }));
}

export default async function WebUIDesignPost({ params }: PostParams) {
  const { slug } = await params;
  const data = selectedWork.find((item) => item.slug === slug);

  if (!data) {
    notFound();
    return null; // unreachable, but satisfies TypeScript
  }

  return (
    <section>
      <ProjectPage data={data} />
    </section>
  );
}

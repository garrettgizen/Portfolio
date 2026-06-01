import { notFound } from "next/navigation";
import { allProjects } from "@/lib/data";
import ProjectPage from "@/components/portfolio/ProjectPage";

interface PostParams {
  params: Promise<{ category: string; slug: string }>;
}

// Add this ↓
export async function generateStaticParams() {
  return allProjects.map((item) => ({
    category: item.type.slug,
    slug: item.slug,
  }));
}

export default async function WebUIDesignPost({ params }: PostParams) {
  const { slug } = await params;
  const data = allProjects.find((item) => item.slug === slug);

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

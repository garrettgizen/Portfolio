import { notFound } from "next/navigation";
import { getPortfolioProjects, getProject } from "@/lib/fetches";
import ProjectPage from "@/components/portfolio/ProjectPage";

interface PostParams {
  params: Promise<{ category: string; slug: string }>;
}

// Add this ↓
export async function generateStaticParams() {
  const project = await getPortfolioProjects();
  return project.map((item) => ({
    category: item.category.slug,
    slug: item.slug,
  }));
}

export default async function WebUIDesignPost({ params }: PostParams) {
  const { slug } = await params;
  const data = await getProject(slug);

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

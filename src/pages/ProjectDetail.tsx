import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { projects } from "../data/project";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <p>Project not found</p>;

  return (
    <Layout>
      <section className="section-padding px-2 sm:px-4 md:px-8">
        <div className="container-luxury max-w-7xl mx-auto">
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl mb-4 break-words">{project.title}</h1>
          <p className="text-muted-foreground mb-8 text-base sm:text-lg max-w-3xl">{project.description}</p>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 mb-12">
            {project.gallery.map((img, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-sm"
              >
                <img
                  src={img}
                  alt={`Project image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Videos */}
          {/* {project.videos?.length > 0 && (
            <div className="space-y-6">
              {project.videos.map((video, index) => (
                <video
                  key={index}
                  src={video}
                  controls
                  className="w-full rounded-lg"
                />
              ))}
            </div>
          )} */}
        </div>
      </section>
    </Layout>
  );
}

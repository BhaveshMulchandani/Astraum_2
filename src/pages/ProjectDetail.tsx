import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { projects } from "../data/project";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <p>Project not found</p>;

  return (
    <Layout>
      <section className="section-padding px-2 sm:px-4 md:px-8 pt-24 sm:pt-28 md:pt-32">
        <div className="container-luxury max-w-7xl mx-auto">
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl mb-4 break-words">
            {project.title}
          </h1>
          <p className="text-muted-foreground mb-8 text-base sm:text-lg max-w-3xl">
            {project.description}
          </p>

          {/* Image Gallery */}
          {/* Image Gallery */}
          <div className="space-y-12 mb-12">
            {project.gallery.map((img, index) => {
              // Full width image (0, 3, 6, 9...)
              if (index % 3 === 0) {
                return (
                  <div
                    key={index}
                    className="relative w-full aspect-[16/9] overflow-hidden rounded-xl"
                  >
                    <img
                      src={img}
                      alt={`Project image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                );
              }

              // Two images row (1,2 | 4,5 | 7,8...)
              if (index % 3 === 1) {
                return (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                      <img
                        src={project.gallery[index]}
                        alt={`Project image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>

                    {project.gallery[index + 1] && (
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                        <img
                          src={project.gallery[index + 1]}
                          alt={`Project image ${index + 2}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                );
              }

              return null;
            })}
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

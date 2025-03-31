import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, Clock } from "lucide-react";
import PostImage from "@/components/blog/post-image";

export const metadata = {
  title: "Blog | Artículos sobre desarrollo y tecnología",
  description: "Explorando ideas sobre desarrollo de software, tecnología y crecimiento profesional.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  // Ordenar posts por fecha (más recientes primero)
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });
  
  // Obtener posts destacados (puedes usar una propiedad en el metadata o los 2 más recientes)
  const featuredPosts = sortedPosts.slice(0, 2);
  const regularPosts = sortedPosts.slice(2);
  
  // Función para formatear la fecha
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  return (
    <section className="max-w-5xl mx-auto px-4">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="text-center mb-12">
          <h1 className="font-bold text-4xl mb-3 tracking-tighter">Blog</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Artículos sobre desarrollo, tecnología y mis experiencias en el mundo digital
          </p>
        </div>
      </BlurFade>
      
      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Artículos destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post, id) => (
                <Link 
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <div className="rounded-lg overflow-hidden bg-card border border-border transition-all 
                                  hover:shadow-lg hover:border-primary/20 hover:scale-[1.01]">
                    <div className="aspect-video relative w-full overflow-hidden">
                      <PostImage
                        src={post.metadata.image}
                        alt={post.metadata.title}
                        slug={post.slug}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                        {post.metadata.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 mb-4">
                        {post.metadata.summary || post.metadata.description || ""}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarIcon size={14} className="mr-1" />
                        <span>{formatDate(post.metadata.publishedAt)}</span>
                        {post.metadata.readingTime && (
                          <>
                            <span className="mx-2">•</span>
                            <Clock size={14} className="mr-1" />
                            <span>{post.metadata.readingTime} min. lectura</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>
      )}
      
      {/* Regular Posts Section */}
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div>
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Todos los artículos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, id) => (
              <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <div className="h-full rounded-md border border-border p-4 hover:bg-card/50 transition-all
                                hover:border-primary/20 hover:shadow-sm">
                    <h3 className="font-medium text-lg mb-2 group-hover:text-primary transition-colors">
                      {post.metadata.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {post.metadata.summary || post.metadata.description || ""}
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground mt-auto">
                      <CalendarIcon size={12} className="mr-1" />
                      <span>{formatDate(post.metadata.publishedAt)}</span>
                    </div>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}

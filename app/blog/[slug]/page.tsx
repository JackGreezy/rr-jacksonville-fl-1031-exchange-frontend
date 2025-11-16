import { notFound } from "next/navigation";
import Script from "next/script";
import Breadcrumbs from "@/components/breadcrumbs";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const PRIMARY_CITY = "Jacksonville";
const PRIMARY_STATE_ABBR = "FL";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  
  // Placeholder - in production, fetch from Sanity
  const post = null;

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${(post as any).title} | 1031 Exchange ${PRIMARY_CITY} Blog`,
    description: (post as any).excerpt,
    alternates: {
      canonical: `https://www.1031exchangeofjacksonville.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  
  // Placeholder - in production, fetch from Sanity
  const post = null;

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: (post as any).title },
  ];

  return (
    <div className={`${inter.className} ${playfair.variable} bg-[#F9FAFB] text-[#1F2937]`}>
      <div className="mx-auto max-w-4xl px-6 py-12 md:px-10">
        <Breadcrumbs items={breadcrumbItems} />
        <article>
          <h1
            className={`${playfair.variable} text-4xl font-semibold leading-[1.15] tracking-tight text-[#003366] md:text-5xl`}
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            {(post as any).title}
          </h1>
          <time className="mt-4 block text-sm text-[#1F2937]/60">
            {(post as any).date}
          </time>
          <div className="prose prose-lg mt-8 max-w-none">
            {/* In production, render PortableText from Sanity */}
            <p>Blog post content will be rendered here from Sanity CMS.</p>
          </div>
        </article>
      </div>
      <Script id="breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbItems.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: item.href
              ? `https://www.1031exchangeofjacksonville.com${item.href}`
              : undefined,
          })),
        })}
      </Script>
    </div>
  );
}





import Link from "next/link";
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
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata() {
  return {
    title: `Blog | 1031 Exchange ${PRIMARY_CITY}`,
    description: `Articles and insights about 1031 exchanges, property identification, and investment strategies in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}.`,
  };
}

export default async function BlogPage({ searchParams }: Props) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const postsPerPageDesktop = 6;
  const postsPerPageMobile = 3;
  
  // Placeholder - in production, fetch from Sanity
  const allPosts: Array<{ slug: string; title: string; excerpt: string; date: string }> = [];
  
  const totalPages = Math.ceil(allPosts.length / postsPerPageDesktop);
  const startIndex = (currentPage - 1) * postsPerPageDesktop;
  const endIndex = startIndex + postsPerPageDesktop;
  const posts = allPosts.slice(startIndex, endIndex);

  return (
    <div className={`${inter.className} ${playfair.variable} bg-[#F9FAFB] text-[#1F2937]`}>
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog" },
          ]}
        />
        <h1
          className={`${playfair.variable} text-4xl font-semibold leading-[1.15] tracking-tight text-[#003366] md:text-5xl`}
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Blog
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#1F2937]/80">
          Insights and articles about 1031 exchanges, property identification, and investment strategies in {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}.
        </p>
        {posts.length === 0 ? (
          <div className="mt-12 rounded-2xl bg-[#E8F5FF] p-8 text-center">
            <p className="text-[#1F2937]/80">
              No blog posts available yet. Check back soon for updates.
            </p>
          </div>
        ) : (
          <>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-[#003366] group-hover:text-[#01264f]">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#1F2937]/80">
                    {post.excerpt}
                  </p>
                  <time className="mt-4 block text-xs text-[#1F2937]/60">
                    {post.date}
                  </time>
                </Link>
              ))}
            </div>
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center gap-2">
                {currentPage > 1 && (
                  <Link
                    href={`/blog?page=${currentPage - 1}`}
                    className="rounded-full border border-[#003366] px-4 py-2 text-sm font-semibold text-[#003366] transition hover:bg-[#003366] hover:text-white"
                  >
                    Previous
                  </Link>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Link
                    key={page}
                    href={`/blog?page=${page}`}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      page === currentPage
                        ? "bg-[#003366] text-white"
                        : "border border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white"
                    }`}
                  >
                    {page}
                  </Link>
                ))}
                {currentPage < totalPages && (
                  <Link
                    href={`/blog?page=${currentPage + 1}`}
                    className="rounded-full border border-[#003366] px-4 py-2 text-sm font-semibold text-[#003366] transition hover:bg-[#003366] hover:text-white"
                  >
                    Next
                  </Link>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}





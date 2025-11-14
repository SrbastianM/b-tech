export async function getPostBySlug(slug: string) {
  const res = await fetch(`/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}

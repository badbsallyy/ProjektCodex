import { BlogPost } from "@/types";
import { BlogCard } from "@/components/blog/BlogCard";

interface BlogGridProps {
  posts: BlogPost[];
}

export const BlogGrid = ({ posts }: BlogGridProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

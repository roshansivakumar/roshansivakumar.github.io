import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogPosts } from "@/data/blog";

const categoryLabels: Record<string, string> = {
  technical: "Technical Blogs",
  wisdom: "Dad's Wisdoms",
  recipes: "Mom's Recipes",
  mind: "Inside My Mind",
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id || "1"));

  if (!post) {
    return (
      <div className="min-h-screen py-20 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <Link to="/blog">
          <Button variant="outline">
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex(p => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link to="/blog">
          <Button variant="outline" className="mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Button>
        </Link>

        {/* Article Header */}
        <Card className="p-8 card-gradient border-border mb-8">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-3">
              {categoryLabels[post.category] || post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                {post.readTime}
              </div>
              <span>By {post.author}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <Button variant="outline" size="sm">
            <Share2 size={16} className="mr-2" />
            Share Article
          </Button>
        </Card>

        {/* Article Content */}
        <Card className="p-8 card-gradient border-border">
          <div className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-code:text-primary prose-a:text-primary">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          {prevPost ? (
            <Link to={`/blog/${prevPost.id}`}>
              <Button variant="outline">
                <ArrowLeft size={16} className="mr-2" />
                Previous Post
              </Button>
            </Link>
          ) : <div />}
          {nextPost ? (
            <Link to={`/blog/${nextPost.id}`}>
              <Button variant="outline">
                Next Post
                <ArrowLeft size={16} className="ml-2 rotate-180" />
              </Button>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

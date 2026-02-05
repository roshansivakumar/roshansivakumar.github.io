import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id || "1"));

  if (!project) {
    return (
      <div className="min-h-screen py-20 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <Link to="/projects">
          <Button variant="outline">
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link to="/projects">
          <Button variant="outline" className="mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Button>
        </Link>

        {/* Project Header */}
        <Card className="p-8 card-gradient border-border mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-1">
              <Badge variant="secondary" className="mb-3">
                {project.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {project.description}
              </p>
            </div>
          </div>

          {/* Project Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Started</p>
                <p className="font-medium">{project.startDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} className="text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Team Size</p>
                <p className="font-medium">{project.team.length} Members</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Target size={18} className="text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <Badge className="mt-1">{project.status}</Badge>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {project.links.demo && (
              <Button>
                <ExternalLink size={16} className="mr-2" />
                View Demo
              </Button>
            )}
            {project.links.github && (
              <Button variant="outline">
                <Github size={16} className="mr-2" />
                Source Code
              </Button>
            )}
            {project.links.docs && (
              <Button variant="outline">
                Documentation
              </Button>
            )}
            {project.links.paper && (
              <Button variant="outline">
                Research Paper
              </Button>
            )}
          </div>
        </Card>

        {/* Team, Technologies & Contact */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 card-gradient border-border">
            <h3 className="font-semibold mb-4">Team</h3>
            <ul className="space-y-2">
              {project.team.map((member, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {member}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 card-gradient border-border">
            <h3 className="font-semibold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 card-gradient border-border">
            <h3 className="font-semibold mb-4">Interested in This Project?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get in touch to discuss collaboration opportunities or technical details.
            </p>
            <Link to="/contact">
              <Button className="w-full">
                Contact Me
              </Button>
            </Link>
          </Card>
        </div>

        {/* Project Content */}
        <Card className="p-8 card-gradient border-border">
          <div className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-code:text-primary prose-a:text-primary">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {project.content}
            </ReactMarkdown>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetail;

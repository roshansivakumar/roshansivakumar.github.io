import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Zap, Shield, Brain, Target, Cpu, Radio } from "lucide-react";
import { projects } from "@/data/projects";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Radio: <Radio className="w-6 h-6" />,
};

const Projects = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "bg-primary text-primary-foreground";
      case "Deployment Ready": return "bg-secondary text-secondary-foreground";
      case "Beta Testing": return "bg-accent text-accent-foreground";
      case "Active Development": return "bg-muted text-muted-foreground";
      case "Research Phase": return "bg-destructive/20 text-destructive";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Projects & <span className="text-gradient">Innovation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of engineering projects spanning military technology, biomedical systems,
            AI diagnostics, and defense solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-gradient border-border hover:border-primary/20 smooth-transition">
              {/* Project Image */}
              <div className="aspect-video bg-muted/30 border-b border-border relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="p-4 rounded-full bg-background/10 backdrop-blur-sm">
                    {iconMap[project.icon]}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link to={`/projects/${project.id}`} className="flex-1">
                    <Button className="w-full">
                      View Details
                    </Button>
                  </Link>

                  <div className="flex gap-2">
                    {project.links.demo && (
                      <Button variant="outline" size="sm">
                        <ExternalLink size={16} />
                      </Button>
                    )}
                    {project.links.github && (
                      <Button variant="outline" size="sm">
                        <Github size={16} />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 card-gradient border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Interested in <span className="text-gradient">Collaborating</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects, innovative ideas,
              or opportunities to contribute to meaningful engineering challenges.
            </p>
            <Link to="/contact">
              <Button size="lg" className="tech-shadow">
                Let's Connect
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;

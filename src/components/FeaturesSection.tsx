import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Rocket, Target, Lightbulb, Code, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "IA Generativa",
    description: "Aprenda a usar ChatGPT, Midjourney, e outras ferramentas de IA para criar conteúdo profissional e automatizar processos.",
    badge: "Essencial"
  },
  {
    icon: Code,
    title: "Programação com IA",
    description: "Desenvolva aplicações completas usando GitHub Copilot, CodeWhisperer e outras ferramentas de código assistido por IA.",
    badge: "Avançado"
  },
  {
    icon: Target,
    title: "Automação Inteligente",
    description: "Crie workflows automatizados que economizam horas de trabalho usando IA para tarefas repetitivas.",
    badge: "Prático"
  },
  {
    icon: Lightbulb,
    title: "Estratégias de Negócio",
    description: "Descubra como implementar IA em seu negócio para aumentar produtividade e reduzir custos operacionais.",
    badge: "Estratégico"
  },
  {
    icon: Rocket,
    title: "Projetos Reais",
    description: "Aplique o conhecimento em projetos práticos que você pode usar imediatamente em sua carreira ou negócio.",
    badge: "Hands-on"
  },
  {
    icon: TrendingUp,
    title: "Tendências Futuras",
    description: "Mantenha-se atualizado com as últimas inovações e prepare-se para o futuro da inteligência artificial.",
    badge: "Futuro"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            ⚡ Conteúdo Exclusivo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tudo que você precisa para dominar
            <span className="gradient-primary bg-clip-text text-transparent block">
              Inteligência Artificial
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um programa completo e prático que vai do básico ao avançado, 
            com foco em aplicações reais que geram resultados imediatos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="relative group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full border-2 border-background" />
              ))}
            </div>
            <div className="text-left">
              <div className="font-semibold">+10.000 alunos já transformaram suas carreiras</div>
              <div className="text-sm text-muted-foreground">Junte-se a eles agora!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Zap, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-dark overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
              🚀 Lançamento Especial
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-primary bg-clip-text text-transparent">
                REVOLUÇÃO
              </span>
              <br />
              <span className="text-foreground">IA</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Domine as técnicas mais avançadas de Inteligência Artificial e transforme sua carreira em questão de semanas.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-primary">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-medium">Resultados Rápidos</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">+10.000 Alunos</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">Certificado</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6 animate-glow gradient-primary border-0 hover:scale-105 transition-transform">
                🔥 QUERO COMEÇAR AGORA
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10">
                Ver Demonstração
              </Button>
            </div>
            
            <div className="text-sm text-muted-foreground">
              ⚡ Acesso imediato • 💰 Garantia de 7 dias • 🎯 Suporte incluso
            </div>
          </div>
          
          {/* Right content - Video placeholder */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl overflow-hidden glass-effect">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto animate-pulse">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                  <p className="text-sm text-muted-foreground">Assista ao vídeo de apresentação</p>
                </div>
              </div>
              
              {/* Video overlay stats */}
              <div className="absolute top-4 left-4 bg-black/80 rounded-lg px-3 py-2">
                <span className="text-xs text-primary font-medium">🔴 AO VIVO</span>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-black/80 rounded-lg px-3 py-2">
                <span className="text-xs text-foreground">15:32</span>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary rounded-full p-3 animate-bounce">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent rounded-full p-3 animate-bounce" style={{ animationDelay: '1s' }}>
              <Award className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
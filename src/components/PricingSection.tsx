import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Zap, Clock, Shield, Gift } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            🔥 Oferta Limitada
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Investimento que se paga
            <span className="gradient-primary bg-clip-text text-transparent block">
              em poucas semanas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acesso completo por um preço especial de lançamento. 
            Valor normal: R$ 497 - Apenas hoje por:
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Free option */}
            <Card className="relative bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Gratuito</h3>
                <div className="text-4xl font-bold mb-6">
                  R$ <span className="text-muted-foreground">0</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">1 aula introdutória</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">E-book básico</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Projetos práticos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Suporte direto</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Certificado</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Começar Grátis
                </Button>
              </CardContent>
            </Card>
            
            {/* Main offer */}
            <Card className="relative scale-105 border-primary/30 bg-card/80 backdrop-blur-sm animate-glow">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1">
                  🏆 MAIS POPULAR
                </Badge>
              </div>
              
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">REVOLUÇÃO IA</h3>
                
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl text-muted-foreground line-through">R$ 497</span>
                    <Badge className="bg-destructive text-destructive-foreground">-90%</Badge>
                  </div>
                  <div className="text-6xl font-bold gradient-primary bg-clip-text text-transparent">
                    R$ 49
                  </div>
                  <div className="text-sm text-muted-foreground">pagamento único</div>
                </div>
                
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Curso completo (50+ aulas)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Projetos práticos reais</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Templates e ferramentas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Suporte direto no Telegram</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Certificado de conclusão</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Atualizações gratuitas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Garantia de 7 dias</span>
                  </li>
                </ul>
                
                <Button className="w-full text-lg py-6 gradient-primary border-0 hover:scale-105 transition-transform">
                  🚀 GARANTIR MINHA VAGA
                </Button>
                
                <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    <span>Pagamento Seguro</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    <span>Acesso Imediato</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Premium option */}
            <Card className="relative bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Premium</h3>
                <div className="text-4xl font-bold mb-6">
                  R$ <span>197</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Tudo do plano principal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Mentoria em grupo (2x/mês)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Análise de projetos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Comunidade VIP</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Bônus exclusivos</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/10">
                  Escolher Premium
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Urgency section */}
          <div className="mt-16 text-center">
            <Card className="glass-effect max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Clock className="w-6 h-6 text-primary animate-pulse" />
                  <h3 className="text-2xl font-bold">Oferta por tempo limitado!</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Apenas <span className="text-primary font-bold">47 vagas</span> restantes com esse desconto especial.
                  Depois disso, o valor volta para R$ 497.
                </p>
                
                {/* Countdown timer placeholder */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="bg-primary/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">23</div>
                    <div className="text-xs text-muted-foreground">HORAS</div>
                  </div>
                  <div className="text-primary">:</div>
                  <div className="bg-primary/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">45</div>
                    <div className="text-xs text-muted-foreground">MIN</div>
                  </div>
                  <div className="text-primary">:</div>
                  <div className="bg-primary/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">12</div>
                    <div className="text-xs text-muted-foreground">SEG</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Gift className="w-4 h-4" />
                    <span>Bônus exclusivos inclusos</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>Garantia incondicional</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Brain, 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  Clock, 
  Award,
  Instagram,
  Youtube,
  Linkedin,
  Twitter
} from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="gradient-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Final CTA Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
            🎯 Última Chance
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
            Não perca essa
            <span className="gradient-primary bg-clip-text text-transparent block">
              oportunidade única
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Junte-se aos milhares de profissionais que já transformaram suas carreiras com IA. 
            O futuro chegou, e você pode estar à frente dele.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="text-xl px-12 py-8 animate-glow gradient-primary border-0 hover:scale-105 transition-transform"
            >
              🚀 COMEÇAR AGORA - R$ 49
            </Button>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Ou</div>
              <Button variant="link" className="text-primary hover:text-primary/80">
                Ver demonstração gratuita →
              </Button>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 glass-effect rounded-2xl p-6">
              <Shield className="w-8 h-8 text-primary" />
              <div className="text-left">
                <div className="font-semibold">Garantia Total</div>
                <div className="text-sm text-muted-foreground">7 dias para reembolso</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 glass-effect rounded-2xl p-6">
              <Clock className="w-8 h-8 text-primary" />
              <div className="text-left">
                <div className="font-semibold">Acesso Imediato</div>
                <div className="text-sm text-muted-foreground">Comece em 2 minutos</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 glass-effect rounded-2xl p-6">
              <Award className="w-8 h-8 text-primary" />
              <div className="text-left">
                <div className="font-semibold">Certificado</div>
                <div className="text-sm text-muted-foreground">Reconhecido no mercado</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Separator className="opacity-20" />
      
      {/* Footer Links */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
                  REVOLUÇÃO IA
                </span>
              </div>
              <p className="text-muted-foreground mb-6">
                Transformando carreiras através da inteligência artificial. 
                O futuro da educação está aqui.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Youtube className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            {/* Course Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-foreground">Curso</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Conteúdo do Curso</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Projetos Práticos</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Certificação</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Comunidade</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Suporte</a></li>
              </ul>
            </div>
            
            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-foreground">Suporte</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Reembolso</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacidade</a></li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-foreground">Newsletter</h3>
              <p className="text-muted-foreground mb-4">
                Receba dicas exclusivas sobre IA direto no seu e-mail
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Seu melhor e-mail" 
                  className="bg-background/50 border-border/50"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+55 (11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>contato@revolucaoIA.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>São Paulo, Brasil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Separator className="opacity-20" />
      
      {/* Copyright */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 REVOLUÇÃO IA. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>CNPJ: 00.000.000/0001-00</span>
              <Separator orientation="vertical" className="h-4 opacity-50" />
              <span>Pagamento 100% seguro</span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default FooterSection;
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Desenvolvedor Full Stack",
    company: "Tech Startup",
    avatar: "/placeholder.svg",
    rating: 5,
    content: "Incrível como em apenas 3 semanas consegui implementar IA no meu trabalho. Minha produtividade aumentou 300% e já recebi uma promoção!",
    highlight: "Promoção em 3 semanas"
  },
  {
    name: "Ana Costa",
    role: "Marketing Manager",
    company: "E-commerce",
    avatar: "/placeholder.svg",
    rating: 5,
    content: "O curso mudou completamente minha forma de trabalhar. Agora automatizo campanhas inteiras e tenho muito mais tempo para estratégia.",
    highlight: "Automação completa"
  },
  {
    name: "Pedro Santos",
    role: "Empreendedor",
    company: "Agência Digital",
    avatar: "/placeholder.svg",
    rating: 5,
    content: "Implementei IA em toda minha agência. Reduzimos custos em 60% e aumentamos a qualidade dos projetos. ROI foi imediato!",
    highlight: "60% redução de custos"
  },
  {
    name: "Mariana Oliveira",
    role: "Product Manager",
    company: "Fintech",
    avatar: "/placeholder.svg",
    rating: 5,
    content: "O conteúdo é extremamente prático. Em poucas horas já estava aplicando as técnicas no meu dia a dia. Recomendo 100%!",
    highlight: "Aplicação imediata"
  },
  {
    name: "Lucas Ferreira",
    role: "Designer",
    company: "Freelancer",
    avatar: "/placeholder.svg",
    rating: 5,
    content: "Como freelancer, a IA me ajudou a entregar projetos 5x mais rápido. Minha receita mensal triplicou em 2 meses!",
    highlight: "Receita triplicada"
  },
  {
    name: "Juliana Rocha",
    role: "Data Scientist",
    company: "Consultoria",
    avatar: "/placeholder.svg",
    rating: 5,
    content: "Mesmo sendo da área técnica, aprendi técnicas que não conhecia. O curso é completo e sempre atualizado com as novidades.",
    highlight: "Sempre atualizado"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 gradient-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            💬 Depoimentos Reais
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Veja os resultados de quem
            <span className="gradient-primary bg-clip-text text-transparent block">
              já transformou sua carreira
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 10.000 profissionais já aplicaram essas técnicas e obtiveram resultados extraordinários
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30"
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/50 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Highlight badge */}
                <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
                  🎯 {testimonial.highlight}
                </Badge>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="bg-primary/20 text-primary">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="glass-effect rounded-2xl p-6">
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">10,000+</div>
            <div className="text-muted-foreground">Alunos Satisfeitos</div>
          </div>
          <div className="glass-effect rounded-2xl p-6">
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">98%</div>
            <div className="text-muted-foreground">Taxa de Aprovação</div>
          </div>
          <div className="glass-effect rounded-2xl p-6">
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">4.9★</div>
            <div className="text-muted-foreground">Avaliação Média</div>
          </div>
          <div className="glass-effect rounded-2xl p-6">
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">24h</div>
            <div className="text-muted-foreground">Suporte Rápido</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
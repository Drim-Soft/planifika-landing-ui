import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  BookOpen, 
  Users, 
  BarChart3, 
  Building, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Globe,
  Award,
  Shield,
  Zap,
  Calendar,
  MessageSquare,
  TrendingUp
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Logo } from '../components/ui/Logo';
import { DrimSoftLogo } from '../components/ui/DrimSoftLogo';


export function Landing() {
  const features = [
    {
      icon: BookOpen,
      title: 'Excelencia Académica',
      description: 'Optimiza tesis, investigación y proyectos académicos con flujos de trabajo estructurados diseñados para el éxito educativo.',
      color: '#3A6EA5'
    },
    {
      icon: Users,
      title: 'Aprendizaje Colaborativo',
      description: 'Conecta estudiantes, profesores e investigadores en un espacio de trabajo unificado que mejora la colaboración académica.',
      color: '#4CAF50'
    },
    {
      icon: BarChart3,
      title: 'Análisis Inteligente',
      description: 'Rastrea progreso, fechas límite y rendimiento con reportes comprensivos e insights basados en datos.',
      color: '#FFA726'
    },
    {
      icon: Shield,
      title: 'Seguridad Empresarial',
      description: 'Seguridad de nivel bancario con integración SSO, acceso basado en roles y cumplimiento de estándares educativos.',
      color: '#E53935'
    },
    {
      icon: Calendar,
      title: 'Calendario Académico',
      description: 'Sistema de calendario integrado con planificación semestral, seguimiento de hitos y gestión de fechas límite.',
      color: '#9C27B0'
    },
    {
  icon: Logo,
      title: 'Logro de Objetivos',
      description: 'Establece hitos, rastrea entregables y alcanza la excelencia académica con gestión de proyectos de precisión.',
      color: '#FFD369'
    }
  ];

  const testimonials = [
    {
      quote: "Planifika transformó cómo gestionamos proyectos de investigación. Las herramientas de colaboración son excepcionales y los análisis nos ayudan a rastrear el progreso estudiantil efectivamente.",
      author: "Dra. Sarah Johnson",
      role: "Profesora, Ciencias de la Computación",
      institution: "Universidad de Stanford",
      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "Como administrador institucional, las características de análisis y gestión de usuarios nos ahorran incontables horas. La plataforma escala hermosamente en toda nuestra universidad.",
      author: "Michael Chen",
      role: "Administrador Académico", 
      institution: "MIT",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "La experiencia estudiantil es intuitiva y atractiva. La gestión de mi proyecto de tesis se volvió mucho más organizada y colaborativa.",
      author: "Emily Rodriguez",
      role: "Candidata a PhD",
      institution: "UC Berkeley",
      avatar: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ];

  const stats = [
    { icon: Globe, label: '50+ Universidades', description: 'Confianza mundial' },
    { icon: Users, label: '10,000+ Estudiantes', description: 'Aprendices activos' },
    { icon: CheckCircle, label: '99.9% Tiempo activo', description: 'Plataforma confiable' },
    { icon: Award, label: '95% Satisfacción', description: 'Calificado por usuarios' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F7F7] via-white to-[#F7F7F7] academic-pattern">
      {/* Navegación Mejorada */}
      <nav className="absolute top-0 w-full z-20 bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FFD369] rounded-2xl opacity-20 blur-lg"></div>
                <div className="relative p-3 bg-[#FFD369]/10 rounded-2xl">
                  <Logo className="h-10 w-10" />
                </div>
              </div>
              <div className="ml-4">
                <span className="text-3xl font-bold text-[#222831] font-['Poppins']">Planifika</span>
                <div className="text-sm text-gray-500 font-['Inter'] -mt-1">Gestión de Proyectos Educativos</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#caracteristicas" className="text-gray-600 hover:text-[#3A6EA5] transition-colors font-['Inter'] font-medium">Características</a>
                <a href="#testimonios" className="text-gray-600 hover:text-[#3A6EA5] transition-colors font-['Inter'] font-medium">Testimonios</a>
                <Link to="/plans" className="text-gray-600 hover:text-[#3A6EA5] transition-colors font-['Inter'] font-medium">Planes y Precios</Link>
              </nav>
              <Link to="/login">
                <Button className="flex items-center space-x-2 font-['Poppins'] planifika-button-glow">
                  <span>Iniciar Sesión</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Sección Hero Mejorada */}
      <div className="relative overflow-hidden pt-32">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center max-w-5xl mx-auto">
            {/* Insignia de Confianza Mejorada */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#3A6EA5]/10 to-[#FFD369]/10 border border-[#3A6EA5]/20 text-[#3A6EA5] px-6 py-3 rounded-full mb-12 font-['Inter'] academic-glow">
              <Star className="h-5 w-5 text-[#FFD369]" />
              <span className="font-semibold">Confiado por 50+ Instituciones Educativas en Todo el Mundo</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#FFD369] fill-current" />
                ))}
              </div>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold text-[#222831] mb-8 font-['Poppins'] leading-tight">
              Gestión de Proyectos
              <span className="block text-gradient bg-gradient-to-r from-[#3A6EA5] to-[#FFD369] bg-clip-text text-transparent">
                Educativos
              </span>
              <span className="block text-4xl lg:text-5xl text-gray-600 mt-2">Reimaginada</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-['Inter'] leading-relaxed">
              Potencia tu institución académica con una plataforma integral diseñada para gestionar 
              proyectos estudiantiles, iniciativas de investigación y experiencias de aprendizaje colaborativo con claridad y eficiencia sin precedentes.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link to="/login">
                <Button 
                  size="lg" 
                  className="px-10 py-5 text-xl font-['Poppins'] rounded-2xl shadow-2xl shadow-[#FFD369]/30 hover:shadow-[#FFD369]/50 transform hover:scale-105 transition-all duration-300"
                >
                  <span>Comenzar Prueba Gratuita</span>
                  <ArrowRight className="h-6 w-6 ml-2" />
                </Button>
              </Link>
              <Link to="/join">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-10 py-5 text-xl font-['Poppins'] rounded-2xl border-2 border-gray-300 hover:border-[#3A6EA5] hover:text-[#3A6EA5] transform hover:scale-105 transition-all duration-300"
                >
                  Solicitar Demo Institucional
                </Button>
              </Link>
            </div>

            {/* Indicadores de Confianza Mejorados */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 p-4 bg-white/60 rounded-2xl border border-gray-200/50 academic-glow">
                  <stat.icon className="h-8 w-8 text-[#3A6EA5]" />
                  <div className="text-lg font-bold text-[#222831] font-['Poppins']">{stat.label}</div>
                  <div className="text-sm text-gray-600 font-['Inter']">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decoraciones de Fondo Mejoradas */}
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-[#3A6EA5]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-10 w-48 h-48 bg-[#FFD369]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-[#4CAF50]/10 rounded-full blur-2xl"></div>
      </div>

      {/* Sección de Características Mejorada */}
      <div id="caracteristicas" className="py-32 bg-white relative">
        <div className="absolute inset-0 academic-pattern opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-[#222831] mb-8 font-['Poppins']">
              Todo lo que Necesitas para el
              <span className="block text-gradient">Éxito Académico</span>
            </h2>
            <p className="text-xl text-gray-600 font-['Inter'] max-w-3xl mx-auto leading-relaxed">
              Herramientas integrales diseñadas específicamente para instituciones educativas, 
              excelencia en investigación y colaboración académica a escala.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group text-center p-8 planifika-card-hover academic-glow"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br rounded-2xl group-hover:scale-110 transition-all duration-300"
                     style={{ 
                       background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                       border: `1px solid ${feature.color}30`
                     }}>
                  <feature.icon className="h-10 w-10" style={{ color: feature.color }} />
                </div>
                <h3 className="text-2xl font-semibold text-[#222831] mb-4 font-['Poppins'] group-hover:text-[#3A6EA5] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-['Inter'] leading-relaxed text-lg">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonios Mejorados */}
      <div id="testimonios" className="py-32 bg-gradient-to-br from-[#F7F7F7] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-[#222831] mb-8 font-['Poppins']">
              Confiado por Líderes
              <span className="block text-gradient">Educativos Mundiales</span>
            </h2>
            <p className="text-xl text-gray-600 font-['Inter'] max-w-2xl mx-auto">
              Descubre cómo las instituciones están transformando su gestión de proyectos académicos
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-8 planifika-card-hover academic-glow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-[#FFD369] fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-8 font-['Inter'] italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="h-16 w-16 rounded-2xl object-cover ring-2 ring-gray-200"
                  />
                  <div>
                    <div className="font-bold text-[#222831] font-['Poppins'] text-lg">{testimonial.author}</div>
                    <div className="text-sm text-gray-600 font-['Inter']">{testimonial.role}</div>
                    <div className="text-sm text-[#3A6EA5] font-['Inter'] font-medium">{testimonial.institution}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Logos de Instituciones */}
          <div className="mt-20 text-center">
            <p className="text-gray-500 font-['Inter'] mb-8">Confiado por instituciones educativas líderes</p>
            <div className="flex items-center justify-center space-x-12 opacity-60">
              <Building className="h-12 w-12 text-gray-400" />
              <Building className="h-12 w-12 text-gray-400" />
              <Building className="h-12 w-12 text-gray-400" />
              <Building className="h-12 w-12 text-gray-400" />
              <Building className="h-12 w-12 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Sección CTA Mejorada */}
      <div className="py-32 bg-gradient-to-r from-[#222831] via-[#3A6EA5] to-[#222831] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-[#FFD369]/20 rounded-full mb-8">
            <Logo className="h-12 w-12" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 font-['Poppins'] leading-tight">
            ¿Listo para Transformar tu
            <span className="block text-[#FFD369]">Experiencia Educativa?</span>
          </h2>
          
          <p className="text-xl text-gray-200 mb-12 font-['Inter'] leading-relaxed max-w-3xl mx-auto">
            Únete a miles de educadores y estudiantes que ya usan Planifika para lograr la excelencia académica. 
            Comienza tu prueba gratuita hoy y experimenta el futuro de la gestión de proyectos educativos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/login">
              <Button 
                size="lg" 
                className="px-12 py-6 text-xl font-['Poppins'] rounded-2xl shadow-2xl shadow-[#FFD369]/30 hover:shadow-[#FFD369]/50 transform hover:scale-105 transition-all duration-300"
              >
                <Zap className="h-6 w-6 mr-3" />
                Comenzar Prueba Gratuita
              </Button>
            </Link>
            <Link to="/join">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-12 py-6 text-xl font-['Poppins'] rounded-2xl border-2 border-gray-300 text-white hover:bg-white hover:text-[#222831] transform hover:scale-105 transition-all duration-300"
              >
                <Calendar className="h-6 w-6 mr-3" />
                Agendar Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Mejorado */}
      <footer className="bg-[#222831] text-white py-20 relative">
        <div className="absolute inset-0 academic-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 mb-16">
            {/* Sección de Marca Mejorada */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#FFD369] rounded-xl opacity-20 blur-lg"></div>
                  <div className="relative p-2 bg-[#FFD369]/10 rounded-xl">
                    <Logo className="h-10 w-10" />
                  </div>
                </div>
                <div className="ml-4">
                  <span className="text-3xl font-bold font-['Poppins']">Planifika</span>
                  <div className="text-sm text-gray-400 font-['Inter'] -mt-1">Excelencia Educativa</div>
                </div>
              </div>
              <p className="text-gray-400 font-['Inter'] leading-relaxed text-lg max-w-md mb-6">
                Empoderando instituciones educativas con soluciones integrales de gestión de proyectos 
                diseñadas para la excelencia académica, colaboración en investigación y éxito estudiantil.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-[#3A6EA5]" />
                  <span className="text-sm text-gray-400 font-['Inter']">50+ Países</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-[#FFD369]" />
                  <span className="text-sm text-gray-400 font-['Inter']">Galardonado</span>
                </div>
              </div>
            </div>
            
            {/* Secciones de Enlaces Mejoradas */}
            <div>
              <h4 className="font-bold mb-6 font-['Poppins'] text-lg">Plataforma</h4>
              <ul className="space-y-3 text-gray-400 font-['Inter']">
                <li><a href="#" className="hover:text-[#FFD369] transition-colors hover:underline">Características</a></li>
                <li><a href="#" className="hover:text-[#FFD369] transition-colors hover:underline">Precios</a></li>
                <li><a href="#" className="hover:text-[#FFD369] transition-colors hover:underline">Seguridad</a></li>
                <li><a href="#" className="hover:text-[#FFD369] transition-colors hover:underline">Integraciones</a></li>
                <li><a href="#" className="hover:text-[#FFD369] transition-colors hover:underline">Documentación API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 font-['Poppins'] text-lg">Educación</h4>
              <ul className="space-y-3 text-gray-400 font-['Inter']">
                <li><a href="#" className="hover:text-[#FFD369] transition-colors hover:underline">Para Universidades</a></li>
                <li><a href="#" className="hover:text-[#FFD369] transition-colors hover:underline">Para Escuelas K-12</a></li>
                <li><a href="#" className="hover:text-[#FFD369] transition-colors hover:underline">Instituciones de Investigación</a></li>
                <li><a href="#" className="hover:text-[#FFD369] transition-colors hover:underline">Casos de Estudio</a></li>
                <li><a href="#" className="hover:text-[#FFD369] transition-colors hover:underline">Mejores Prácticas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 font-['Poppins'] text-lg">Soporte</h4>
              <ul className="space-y-3 text-gray-400 font-['Inter']">
                <li><a href="#" className="hover:text-[#FFD369] transition-colors hover:underline">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-[#FFD369] transition-colors hover:underline">Documentación</a></li>
                <li><a href="#" className="hover:text-[#FFD369] transition-colors hover:underline">Contactar Soporte</a></li>
                <li><a href="#" className="hover:text-[#FFD369] transition-colors hover:underline">Estado del Sistema</a></li>
                <li><a href="#" className="hover:text-[#FFD369] transition-colors hover:underline">Foro de Comunidad</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 font-['Inter'] mb-4 md:mb-0">
              © 2025 Planifika por DrimSoft. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center p-4 bg-gradient-to-r from-[#3A6EA5]/10 to-[#FFD369]/10 rounded-2xl border border-[#3A6EA5]/20">
              <span className="text-sm text-gray-300 mr-3 font-['Inter']">Orgullosamente desarrollado por</span>
              <div className="flex items-center">
                <DrimSoftLogo className="h-6 w-6" />
                <span className="ml-3 text-xl font-bold text-[#3A6EA5] font-['Poppins']">DrimSoft</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const newsData = [
  {
    id: 1,
    type: 'company',
    title: 'Запуск нового продукта в 2025',
    description: 'Мы рады представить нашу новую линейку решений для автоматизации бизнеса',
    date: '15 декабря 2024',
    image: 'https://cdn.poehali.dev/projects/0d9923ac-7630-404c-b49d-5c102d13a75f/files/fe51b155-c203-4498-8ea9-8014d267d949.jpg'
  },
  {
    id: 2,
    type: 'industry',
    title: 'Тренды цифровизации в 2025',
    description: 'Аналитики прогнозируют рост инвестиций в AI и облачные технологии на 40%',
    date: '10 декабря 2024',
    image: 'https://cdn.poehali.dev/projects/0d9923ac-7630-404c-b49d-5c102d13a75f/files/fe51b155-c203-4498-8ea9-8014d267d949.jpg'
  },
  {
    id: 3,
    type: 'company',
    title: 'Наша команда получила премию "Лучший работодатель года"',
    description: 'Признание нашей корпоративной культуры и заботы о сотрудниках',
    date: '5 декабря 2024',
    image: 'https://cdn.poehali.dev/projects/0d9923ac-7630-404c-b49d-5c102d13a75f/files/fe51b155-c203-4498-8ea9-8014d267d949.jpg'
  },
  {
    id: 4,
    type: 'industry',
    title: 'Новые требования к кибербезопасности',
    description: 'Регуляторы ужесточают стандарты защиты персональных данных',
    date: '1 декабря 2024',
    image: 'https://cdn.poehali.dev/projects/0d9923ac-7630-404c-b49d-5c102d13a75f/files/fe51b155-c203-4498-8ea9-8014d267d949.jpg'
  },
  {
    id: 5,
    type: 'company',
    title: 'Открытие офиса в Санкт-Петербурге',
    description: 'Расширяем географию присутствия и приглашаем новых специалистов',
    date: '28 ноября 2024',
    image: 'https://cdn.poehali.dev/projects/0d9923ac-7630-404c-b49d-5c102d13a75f/files/fe51b155-c203-4498-8ea9-8014d267d949.jpg'
  },
  {
    id: 6,
    type: 'industry',
    title: 'Рынок SaaS вырос на 25% за год',
    description: 'Компании активно переходят на облачные решения для оптимизации расходов',
    date: '20 ноября 2024',
    image: 'https://cdn.poehali.dev/projects/0d9923ac-7630-404c-b49d-5c102d13a75f/files/fe51b155-c203-4498-8ea9-8014d267d949.jpg'
  }
];

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'company' | 'industry'>('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const filteredNews = activeFilter === 'all' 
    ? newsData 
    : newsData.filter(item => item.type === activeFilter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto relative z-10 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-scale-in">
              Инновации для вашего бизнеса
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Мы создаём решения, которые меняют индустрию и открывают новые возможности
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" variant="secondary" className="text-lg px-8 hover:scale-105 transition-transform">
                Узнать больше
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">О компании</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы — команда профессионалов, которая создаёт будущее цифровых технологий
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 animate-fade-in">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Lightbulb" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Инновации</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Внедряем передовые технологии и создаём уникальные решения для бизнеса
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 animate-fade-in [animation-delay:100ms]">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl">Команда</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Более 200 специалистов с экспертизой в разных областях работают над вашими проектами
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 animate-fade-in [animation-delay:200ms]">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Award" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-2xl">Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Подтверждено международными сертификатами и наградами в области технологий
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Новости</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Следите за обновлениями компании и трендами отрасли
            </p>
            
            <div className="flex gap-3 justify-center flex-wrap">
              <Button 
                variant={activeFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('all')}
                className="transition-all"
              >
                <Icon name="Globe" size={18} className="mr-2" />
                Все новости
              </Button>
              <Button 
                variant={activeFilter === 'company' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('company')}
                className="transition-all"
              >
                <Icon name="Building2" size={18} className="mr-2" />
                Компания
              </Button>
              <Button 
                variant={activeFilter === 'industry' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('industry')}
                className="transition-all"
              >
                <Icon name="TrendingUp" size={18} className="mr-2" />
                Отрасль
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredNews.map((news, index) => (
              <Card 
                key={news.id} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover opacity-50"
                  />
                  <Badge 
                    className="absolute top-4 right-4"
                    variant={news.type === 'company' ? 'default' : 'secondary'}
                  >
                    {news.type === 'company' ? 'Компания' : 'Отрасль'}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                    {news.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {news.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{news.description}</p>
                  <Button variant="link" className="mt-4 px-0 text-primary">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in">
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle>Адрес</CardTitle>
                      <CardDescription className="text-base mt-2">
                        г. Москва, ул. Тверская, д. 1<br />
                        БЦ "Инновация", этаж 10
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <CardTitle>Телефон</CardTitle>
                      <CardDescription className="text-base mt-2">
                        +7 (495) 123-45-67<br />
                        Пн-Пт: 9:00 - 18:00
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-accent" />
                    </div>
                    <div>
                      <CardTitle>Email</CardTitle>
                      <CardDescription className="text-base mt-2">
                        info@company.ru<br />
                        sales@company.ru
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <Card className="border-2 animate-fade-in [animation-delay:200ms]">
              <CardHeader>
                <CardTitle className="text-2xl">Напишите нам</CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами в течение 24 часов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Ваше сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      className="min-h-32"
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 text-lg" size="lg">
                    Отправить сообщение
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Компания</h3>
              <p className="text-white/80">
                Создаём инновационные решения для цифровой трансформации бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#about" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li>Разработка ПО</li>
                <li>Консалтинг</li>
                <li>Автоматизация</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Github" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 Компания. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
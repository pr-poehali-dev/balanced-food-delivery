import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [calories, setCalories] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('1300 ккал');
  const [selectedDays, setSelectedDays] = useState('7');
  const [orderName, setOrderName] = useState('');
  const [orderPhone, setOrderPhone] = useState('');
  const [orderEmail, setOrderEmail] = useState('');

  const calculateCalories = () => {
    if (weight && height && age) {
      const bmr = 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) + 5;
      setCalories(Math.round(bmr * 1.55));
    }
  };

  const programs = [
    {
      title: '1000 ккал',
      description: 'Интенсивное снижение веса под контролем специалиста',
      calories: '1000',
      icon: 'TrendingDown',
      color: 'bg-primary/10 text-primary',
      price: 900
    },
    {
      title: '1300 ккал',
      description: 'Комфортное похудение с разнообразным меню',
      calories: '1300',
      icon: 'TrendingDown',
      color: 'bg-primary/10 text-primary',
      price: 1000
    },
    {
      title: '1500 ккал',
      description: 'Сбалансированное снижение веса',
      calories: '1500',
      icon: 'Scale',
      color: 'bg-secondary/10 text-secondary',
      price: 1100
    },
    {
      title: '1800 ккал',
      description: 'Поддержание формы и легкое похудение',
      calories: '1800',
      icon: 'Activity',
      color: 'bg-accent/10 text-accent',
      price: 1200
    },
    {
      title: '2200 ккал',
      description: 'Поддержание веса при активном образе жизни',
      calories: '2200',
      icon: 'Zap',
      color: 'bg-accent/10 text-accent',
      price: 1300
    },
    {
      title: '2500 ккал',
      description: 'Набор мышечной массы и активные тренировки',
      calories: '2500',
      icon: 'TrendingUp',
      color: 'bg-secondary/10 text-secondary',
      price: 1400
    },
    {
      title: '3500 ккал',
      description: 'Максимальный набор массы для атлетов',
      calories: '3500',
      icon: 'Dumbbell',
      color: 'bg-primary/10 text-primary',
      price: 1600
    }
  ];

  const menuCategories = [
    {
      name: 'Завтраки',
      items: [
        { name: 'Овсяная каша с ягодами', calories: 350, protein: 12 },
        { name: 'Омлет с овощами', calories: 280, protein: 18 },
        { name: 'Панкейки из цельнозерновой муки', calories: 320, protein: 10 }
      ]
    },
    {
      name: 'Обеды',
      items: [
        { name: 'Куриная грудка с киноа', calories: 450, protein: 35 },
        { name: 'Лосось с овощами на пару', calories: 520, protein: 38 },
        { name: 'Индейка с гречкой', calories: 480, protein: 32 }
      ]
    },
    {
      name: 'Ужины',
      items: [
        { name: 'Салат с тунцом', calories: 380, protein: 28 },
        { name: 'Куриное филе с овощами', calories: 420, protein: 30 },
        { name: 'Рыба на гриле с зеленью', calories: 400, protein: 33 }
      ]
    }
  ];

  const reviews = [
    {
      name: 'Анна К.',
      text: 'За 2 месяца похудела на 8 кг! Еда вкусная, доставка всегда вовремя. Очень довольна результатом!',
      rating: 5,
      program: '1300 ккал'
    },
    {
      name: 'Дмитрий С.',
      text: 'Отличный сервис! Набрал 5 кг мышечной массы за 3 месяца. Меню разнообразное, калорийность подобрана идеально.',
      rating: 5,
      program: '2500 ккал'
    },
    {
      name: 'Елена М.',
      text: 'Удобно для занятых людей. Не нужно думать о готовке, всё привозят готовое. Качество блюд на высоте!',
      rating: 5,
      program: '1800 ккал'
    }
  ];

  const faqItems = [
    {
      question: 'Как работает доставка?',
      answer: 'Мы доставляем свежие блюда каждое утро с 6:00 до 8:00. Еда упакована в экологичные контейнеры с указанием калорийности и БЖУ.'
    },
    {
      question: 'Можно ли менять меню?',
      answer: 'Да! Вы можете корректировать меню в личном кабинете за 24 часа до доставки. Мы учтем ваши предпочтения и исключим нежелательные продукты.'
    },
    {
      question: 'Как подбирается калорийность?',
      answer: 'Наш нутрициолог рассчитывает калорийность исходя из ваших целей, возраста, веса, роста и уровня активности. Программа корректируется по мере достижения результатов.'
    },
    {
      question: 'Какие города доступны?',
      answer: 'Мы доставляем по Москве, Санкт-Петербургу, Казани и Екатеринбургу. Планируем расширение в другие города.'
    }
  ];

  const calculateOrderPrice = () => {
    const selectedProgramData = programs.find(p => p.title === selectedProgram);
    const basePrice = selectedProgramData?.price || 1000;
    const days = Number(selectedDays);
    const discount = days >= 30 ? 0.15 : days >= 14 ? 0.1 : days >= 7 ? 0.05 : 0;
    return Math.round(basePrice * days * (1 - discount));
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо за заказ! Мы свяжемся с вами по номеру ${orderPhone}`);
    setOrderDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-coral-turquoise flex items-center justify-center">
              <Icon name="Salad" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ЗдоровЕда
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#programs" className="hover:text-primary transition-colors">Программы</a>
            <a href="#menu" className="hover:text-primary transition-colors">Меню</a>
            <a href="#calculator" className="hover:text-primary transition-colors">Калькулятор</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <div className="flex items-center gap-2">
            <Dialog open={orderDialogOpen} onOpenChange={setOrderDialogOpen}>
              <DialogTrigger asChild>
                <Button className="hidden md:flex gradient-coral-turquoise text-white hover:opacity-90">
                  Заказать
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Заказать программу питания</DialogTitle>
                  <DialogDescription>
                    Выберите программу и количество дней. Мы свяжемся с вами для подтверждения заказа.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleOrderSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Программа</Label>
                    <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {programs.map((program) => (
                          <SelectItem key={program.title} value={program.title}>
                            {program.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Количество дней</Label>
                    <Select value={selectedDays} onValueChange={setSelectedDays}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 дня</SelectItem>
                        <SelectItem value="7">7 дней (скидка 5%)</SelectItem>
                        <SelectItem value="14">14 дней (скидка 10%)</SelectItem>
                        <SelectItem value="30">30 дней (скидка 15%)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Итого:</span>
                      <span className="text-2xl font-bold text-primary">{calculateOrderPrice()} ₽</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label htmlFor="order-name">Ваше имя</Label>
                    <Input
                      id="order-name"
                      placeholder="Иван Иванов"
                      value={orderName}
                      onChange={(e) => setOrderName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="order-phone">Телефон</Label>
                    <Input
                      id="order-phone"
                      placeholder="+7 (900) 123-45-67"
                      value={orderPhone}
                      onChange={(e) => setOrderPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="order-email">Email</Label>
                    <Input
                      id="order-email"
                      type="email"
                      placeholder="your@email.com"
                      value={orderEmail}
                      onChange={(e) => setOrderEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full gradient-coral-turquoise text-white hover:opacity-90">
                    Оформить заказ
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col gap-6 mt-8">
                  <a 
                    href="#programs" 
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Программы
                  </a>
                  <a 
                    href="#menu" 
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Меню
                  </a>
                  <a 
                    href="#calculator" 
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Калькулятор
                  </a>
                  <a 
                    href="#reviews" 
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Отзывы
                  </a>
                  <a 
                    href="#faq" 
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQ
                  </a>
                  <a 
                    href="#contacts" 
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Контакты
                  </a>
                  <Separator />
                  <Button 
                    className="gradient-coral-turquoise text-white hover:opacity-90"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setOrderDialogOpen(true);
                    }}
                  >
                    Заказать программу
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 gradient-coral-turquoise opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-accent/20 text-accent-foreground hover:bg-accent/30">
                Индивидуальный подход к каждому
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Правильное питание{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  с доставкой
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Сбалансированные программы питания под ваши цели. Свежие блюда каждый день. Без готовки и подсчёта калорий.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="gradient-coral-turquoise text-white hover:opacity-90"
                  onClick={() => setOrderDialogOpen(true)}
                >
                  <Icon name="Sparkles" className="mr-2" size={20} />
                  Подобрать программу
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="PlayCircle" className="mr-2" size={20} />
                  Как это работает
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">200+</div>
                  <div className="text-sm text-muted-foreground">Блюд в меню</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">4.9</div>
                  <div className="text-sm text-muted-foreground">Средняя оценка</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -top-4 -right-4 w-72 h-72 gradient-mint rounded-full blur-3xl opacity-20"></div>
              <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl shadow-2xl relative z-10 w-full hover-scale p-12 flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-24 h-24 rounded-full gradient-coral-turquoise flex items-center justify-center mb-6">
                  <Icon name="Salad" className="text-white" size={48} />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-8">
                  ЗдоровЕда
                </div>
                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                  <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center">
                    <Icon name="Salad" className="text-accent mb-2" size={32} />
                    <div className="text-xs text-muted-foreground">Завтрак</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center">
                    <Icon name="Apple" className="text-secondary mb-2" size={32} />
                    <div className="text-xs text-muted-foreground">Перекус</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center">
                    <Icon name="Beef" className="text-primary mb-2" size={32} />
                    <div className="text-xs text-muted-foreground">Обед</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center">
                    <Icon name="Fish" className="text-accent mb-2" size={32} />
                    <div className="text-xs text-muted-foreground">Ужин</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наши программы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Индивидуальные программы под{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ваши цели
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите программу, которая подходит именно вам. Меню составляет профессиональный нутрициолог.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover-scale border-2 hover:border-primary/20">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl ${program.color} flex items-center justify-center mb-4`}>
                    <Icon name={program.icon} size={32} />
                  </div>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon name="Flame" className="text-primary" size={20} />
                      <span className="font-semibold">{program.calories} ккал/день</span>
                    </div>
                    <div className="text-lg font-bold text-primary">{program.price} ₽/день</div>
                  </div>
                  <Separator />
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-accent" size={16} />
                      <span>5 приёмов пищи</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-accent" size={16} />
                      <span>Свежие продукты</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-accent" size={16} />
                      <span>Без глютена и ГМО</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full gradient-coral-turquoise text-white hover:opacity-90"
                    onClick={() => {
                      setSelectedProgram(program.title);
                      setOrderDialogOpen(true);
                    }}
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наше меню</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Разнообразное и{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                вкусное меню
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Более 200 блюд, приготовленных из свежих продуктов. Меню обновляется еженедельно.
            </p>
          </div>

          <Tabs defaultValue="Завтраки" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {menuCategories.map((category) => (
                <TabsTrigger key={category.name} value={category.name} className="text-base">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {menuCategories.map((category) => (
              <TabsContent key={category.name} value={category.name} className="space-y-4">
                {category.items.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Icon name="Flame" size={16} className="text-primary" />
                            <span>{item.calories} ккал</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Beef" size={16} className="text-secondary" />
                            <span>{item.protein}г белка</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Icon name="Plus" size={16} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline">
              Посмотреть полное меню
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Калькулятор калорий</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Рассчитайте свою{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  норму калорий
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Узнайте, сколько калорий вам нужно для достижения ваших целей
              </p>
            </div>

            <Card className="shadow-xl border-2">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="weight" className="flex items-center gap-2">
                      <Icon name="Weight" size={16} className="text-primary" />
                      Вес (кг)
                    </Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="70"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height" className="flex items-center gap-2">
                      <Icon name="Ruler" size={16} className="text-secondary" />
                      Рост (см)
                    </Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="170"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age" className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} className="text-accent" />
                      Возраст
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="30"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                </div>

                <Button
                  onClick={calculateCalories}
                  className="w-full gradient-coral-turquoise text-white hover:opacity-90"
                  size="lg"
                >
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Рассчитать
                </Button>

                {calories && (
                  <div className="mt-8 p-6 rounded-xl gradient-mint text-white text-center animate-scale-in">
                    <div className="text-lg mb-2">Ваша дневная норма калорий:</div>
                    <div className="text-5xl font-bold mb-2">{calories}</div>
                    <div className="text-sm opacity-90">ккал при умеренной активности</div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Отзывы клиентов</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Что говорят наши{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                клиенты
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover-scale">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full gradient-coral-turquoise flex items-center justify-center text-white font-bold text-lg">
                      {review.name[0]}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs">{review.program}</Badge>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <Badge>О нас</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">
                Мы делаем{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  правильное питание
                </span>{' '}
                доступным
              </h2>
              <p className="text-lg text-muted-foreground">
                ЗдоровЕда — это команда профессионалов: нутрициологов, поваров и технологов. Мы создали сервис, который помогает людям питаться правильно без лишних усилий.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Профессиональная команда</div>
                    <div className="text-sm text-muted-foreground">Нутрициологи и повара с опытом более 10 лет</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Leaf" className="text-secondary" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Только свежие продукты</div>
                    <div className="text-sm text-muted-foreground">Закупаем продукты ежедневно у проверенных поставщиков</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="text-accent" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Контроль качества</div>
                    <div className="text-sm text-muted-foreground">Все блюда проходят проверку на соответствие стандартам</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/a211daab-3bd9-496b-ae61-c31666a94863/files/2be7f009-f9ff-47ab-86fa-809a782e4228.jpg"
                alt="О нас"
                className="rounded-3xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">FAQ</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Частые{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  вопросы
                </span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-xl px-6">
                  <AccordionTrigger className="text-left hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Условия доставки</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Доставляем свежие блюда{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                каждое утро
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all hover-scale">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon name="Clock" className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Утренняя доставка</h3>
                <p className="text-sm text-muted-foreground">С 6:00 до 8:00 каждый день</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all hover-scale">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <Icon name="Truck" className="text-secondary" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Бесплатная доставка</h3>
                <p className="text-sm text-muted-foreground">При заказе от 3 дней</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all hover-scale">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Icon name="Snowflake" className="text-accent" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Термосумки</h3>
                <p className="text-sm text-muted-foreground">Сохраняем свежесть продуктов</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all hover-scale">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon name="Package" className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Эко-упаковка</h3>
                <p className="text-sm text-muted-foreground">Безопасные материалы</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Свяжитесь{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  с нами
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-coral-turquoise flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Телефон</div>
                        <a href="tel:+79001234567" className="text-muted-foreground hover:text-primary transition-colors">
                          +7 (900) 123-45-67
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-mint flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Email</div>
                        <a href="mailto:info@zdoroveda.ru" className="text-muted-foreground hover:text-primary transition-colors">
                          info@zdoroveda.ru
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" className="text-accent" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Адрес</div>
                        <p className="text-muted-foreground">
                          г. Москва, ул. Примерная, 123
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="message">Сообщение</Label>
                      <Input id="message" placeholder="Ваш вопрос" />
                    </div>
                    <Button className="w-full gradient-coral-turquoise text-white hover:opacity-90">
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full gradient-coral-turquoise flex items-center justify-center">
                  <Icon name="Salad" className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold">ЗдоровЕда</span>
              </div>
              <p className="text-sm text-gray-400">
                Правильное питание с доставкой. Индивидуальный подход к каждому клиенту.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Программы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Похудение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Набор массы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поддержание формы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#delivery" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>
            </div>
          </div>
          <Separator className="bg-white/10 mb-8" />
          <div className="text-center text-sm text-gray-400">
            © 2024 ЗдоровЕда. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
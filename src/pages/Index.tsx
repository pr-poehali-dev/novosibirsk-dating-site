import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const profiles = [
    {
      id: 1,
      name: "Анна",
      age: 25,
      height: 165,
      weight: 55,
      eyeColor: "карие",
      hairColor: "шатен",
      district: "Центральный",
      phone: "+7 (383) 555-0123",
      photo: "/img/43978e41-82b0-49f1-97e1-0eebeaeb06d5.jpg",
    },
    {
      id: 2,
      name: "Елена",
      age: 28,
      height: 170,
      weight: 58,
      eyeColor: "зелёные",
      hairColor: "блондинка",
      district: "Октябрьский",
      phone: "+7 (383) 555-0124",
      photo: "/img/08c534d3-edc5-4697-8d45-b48bb548d427.jpg",
    },
    {
      id: 3,
      name: "Мария",
      age: 24,
      height: 162,
      weight: 52,
      eyeColor: "голубые",
      hairColor: "рыжая",
      district: "Советский",
      phone: "+7 (383) 555-0125",
      photo: "/img/33c8050b-c39a-4271-b838-2a579eeb9dd8.jpg",
    },
    {
      id: 4,
      name: "Ольга",
      age: 26,
      height: 168,
      weight: 56,
      eyeColor: "серые",
      hairColor: "брюнетка",
      district: "Железнодорожный",
      phone: "+7 (383) 555-0126",
      photo: "/img/43978e41-82b0-49f1-97e1-0eebeaeb06d5.jpg",
    },
    {
      id: 5,
      name: "Татьяна",
      age: 29,
      height: 163,
      weight: 54,
      eyeColor: "карие",
      hairColor: "шатен",
      district: "Заельцовский",
      phone: "+7 (383) 555-0127",
      photo: "/img/08c534d3-edc5-4697-8d45-b48bb548d427.jpg",
    },
    {
      id: 6,
      name: "Екатерина",
      age: 27,
      height: 166,
      weight: 57,
      eyeColor: "зелёные",
      hairColor: "блондинка",
      district: "Кировский",
      phone: "+7 (383) 555-0128",
      photo: "/img/33c8050b-c39a-4271-b838-2a579eeb9dd8.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-roboto">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="text-primary" size={28} />
              <h1 className="text-2xl font-bold text-primary">
                НСК Знакомства
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Главная
              </a>
              <a
                href="#catalog"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Каталог
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Контакты
              </a>
            </nav>
            <Button variant="outline" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Найди свою вторую половинку в Новосибирске
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-open-sans">
            Более 50 анкет красивых девушек ждут знакомства с тобой. Все профили
            проверены и содержат актуальную информацию.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Search" className="mr-2" size={20} />
              Просмотреть анкеты
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Каталог анкет
            </h3>
            <p className="text-gray-600 font-open-sans">
              Познакомься с девушками из разных районов Новосибирска
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((profile) => (
              <Card
                key={profile.id}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src={profile.photo}
                        alt={profile.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">
                        {profile.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        {profile.age} лет, {profile.district}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {profile.height}см
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {profile.weight}кг
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {profile.eyeColor}
                        </Badge>
                      </div>
                      <Button size="sm" className="w-full">
                        <Icon name="Eye" className="mr-2" size={16} />
                        Смотреть анкету
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Показать ещё анкеты
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Свяжитесь с нами
            </h3>
            <p className="text-gray-600 mb-8 font-open-sans">
              Есть вопросы? Хотите добавить свою анкету? Мы всегда готовы
              помочь!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Телефон</h4>
                <p className="text-gray-600">+7 (383) 555-0100</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-gray-600">info@nsk-dating.ru</p>
              </div>
            </div>

            <Card className="p-6">
              <div className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Ваш телефон" />
                <Textarea placeholder="Ваше сообщение" rows={4} />
                <Button className="w-full">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Heart" className="text-primary" size={24} />
              <span className="text-xl font-bold">НСК Знакомства</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
            <p>&copy; 2024 НСК Знакомства. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

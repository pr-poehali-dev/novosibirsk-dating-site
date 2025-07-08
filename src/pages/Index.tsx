import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedProfile, setSelectedProfile] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
      photos: [
        "/img/43978e41-82b0-49f1-97e1-0eebeaeb06d5.jpg",
        "/img/bd9f4f8f-b117-4dd5-b4da-7bcf61495a4e.jpg",
        "/img/35bdb577-aa53-4467-b317-003fe13a35e4.jpg",
      ],
      description:
        "Привет! Меня зовут Анна, работаю маркетологом. Люблю активный отдых, путешествия и хорошие книги. Ищу серьёзные отношения с добрым и честным человеком.",
      interests: ["путешествия", "чтение", "йога", "кино"],
      education: "Высшее экономическое",
      work: "Маркетолог",
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
      photos: [
        "/img/08c534d3-edc5-4697-8d45-b48bb548d427.jpg",
        "/img/c2563903-407d-43d5-9e2e-ae7ded60c9f3.jpg",
        "/img/bd9f4f8f-b117-4dd5-b4da-7bcf61495a4e.jpg",
      ],
      description:
        "Меня зовут Елена, я дизайнер интерьеров. Очень творческий человек, обожаю создавать красоту вокруг себя. В свободное время рисую и хожу на выставки.",
      interests: ["дизайн", "искусство", "рисование", "выставки"],
      education: "Высшее художественное",
      work: "Дизайнер интерьеров",
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
      photos: [
        "/img/33c8050b-c39a-4271-b838-2a579eeb9dd8.jpg",
        "/img/35bdb577-aa53-4467-b317-003fe13a35e4.jpg",
        "/img/c2563903-407d-43d5-9e2e-ae7ded60c9f3.jpg",
      ],
      description:
        "Привет! Я Мария, преподаю английский язык детям. Очень люблю животных, у меня есть кошка. Ищу надёжного партнёра для создания семьи.",
      interests: ["языки", "животные", "преподавание", "природа"],
      education: "Высшее филологическое",
      work: "Преподаватель английского",
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
      photos: [
        "/img/43978e41-82b0-49f1-97e1-0eebeaeb06d5.jpg",
        "/img/bd9f4f8f-b117-4dd5-b4da-7bcf61495a4e.jpg",
      ],
      description:
        "Меня зовут Ольга, работаю врачом. Очень ответственный человек, забочусь о здоровье других. Хочу найти мужчину, который разделит со мной интересы.",
      interests: ["медицина", "здоровье", "спорт", "семья"],
      education: "Высшее медицинское",
      work: "Врач-терапевт",
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
      photos: [
        "/img/08c534d3-edc5-4697-8d45-b48bb548d427.jpg",
        "/img/c2563903-407d-43d5-9e2e-ae7ded60c9f3.jpg",
      ],
      description:
        "Привет! Меня зовут Татьяна, я психолог. Помогаю людям решать их проблемы, но и сама ищу поддержку в лице любящего мужчины. Очень домашняя.",
      interests: ["психология", "саморазвитие", "кулинария", "дом"],
      education: "Высшее психологическое",
      work: "Психолог",
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
      photos: [
        "/img/33c8050b-c39a-4271-b838-2a579eeb9dd8.jpg",
        "/img/35bdb577-aa53-4467-b317-003fe13a35e4.jpg",
        "/img/bd9f4f8f-b117-4dd5-b4da-7bcf61495a4e.jpg",
      ],
      description:
        "Меня зовут Екатерина, работаю юристом. Очень целеустремлённая, но в душе мечтательная. Люблю театр, классическую музыку и романтические прогулки.",
      interests: ["право", "театр", "музыка", "прогулки"],
      education: "Высшее юридическое",
      work: "Юрист",
    },
  ];

  const handleViewProfile = (profileId: number) => {
    setSelectedProfile(profileId);
    setIsDialogOpen(true);
  };

  const selectedProfileData = profiles.find((p) => p.id === selectedProfile);

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
                      <Button
                        size="sm"
                        className="w-full"
                        onClick={() => handleViewProfile(profile.id)}
                      >
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

      {/* Profile Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProfileData && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedProfileData.name}, {selectedProfileData.age} лет
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Photo Gallery */}
                <div className="w-full">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selectedProfileData.photos.map((photo, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-square overflow-hidden rounded-lg">
                            <img
                              src={photo}
                              alt={`${selectedProfileData.name} фото ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>

                {/* Basic Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Рост</p>
                    <p className="font-medium">
                      {selectedProfileData.height} см
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Вес</p>
                    <p className="font-medium">
                      {selectedProfileData.weight} кг
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Цвет глаз</p>
                    <p className="font-medium">
                      {selectedProfileData.eyeColor}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Цвет волос</p>
                    <p className="font-medium">
                      {selectedProfileData.hairColor}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Район</p>
                    <p className="font-medium">
                      {selectedProfileData.district}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Телефон</p>
                    <p className="font-medium">{selectedProfileData.phone}</p>
                  </div>
                </div>

                <Separator />

                {/* Description */}
                <div>
                  <h4 className="font-semibold mb-2">О себе</h4>
                  <p className="text-gray-700 font-open-sans">
                    {selectedProfileData.description}
                  </p>
                </div>

                {/* Professional Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Образование</p>
                    <p className="font-medium">
                      {selectedProfileData.education}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Работа</p>
                    <p className="font-medium">{selectedProfileData.work}</p>
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <h4 className="font-semibold mb-2">Интересы</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProfileData.interests.map((interest, index) => (
                      <Badge key={index} variant="secondary">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Contact Button */}
                <div className="pt-4">
                  <Button className="w-full" size="lg">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Связаться: {selectedProfileData.phone}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

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

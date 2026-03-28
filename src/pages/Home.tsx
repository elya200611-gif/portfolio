import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BentoCard } from "@/components/ui/BentoCard";

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-black selection:text-white">
      <Navbar />

      <main className="px-6 md:px-12 max-w-7xl mx-auto pt-24 md:pt-32 pb-20">

        {/* Hero Section */}
        <section className="min-h-[70vh] md:min-h-[80vh] flex flex-col justify-between mb-20 md:mb-32">
          <Reveal>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-neutral-200 text-xs md:text-sm font-medium mb-6 md:mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Сайты & Фирменный стиль
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 md:gap-8">
            <Reveal delay={0.1}>
              <h1 className="text-6xl sm:text-7xl md:text-[12vw] leading-[0.9] md:leading-[0.8] font-display font-bold tracking-tighter uppercase">
                Эля <br />
                <span className="text-neutral-300">Ринадова</span>
              </h1>
            </Reveal>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
              <Reveal delay={0.2} className="max-w-xl">
                <p className="text-lg md:text-2xl leading-relaxed font-light text-neutral-600">
                  Сайты и айдентика — с вниманием к каждой детали вашего бизнеса.
                  Работаю на стыке анализа и эстетики, чтобы результат был не просто красивым, а точным.
                </p>
              </Reveal>

              <Reveal delay={0.3} className="w-full md:w-auto">
                <MagneticButton href="https://t.me/ellrinad" target="_blank" className="w-full md:w-auto bg-black text-white px-8 py-6 rounded-full text-lg group">
                  Обсудить проект
                  <ArrowDown className="ml-2 w-5 h-5 transition-transform group-hover:translate-y-1" />
                </MagneticButton>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Specialization Section */}
        <section id="specialization" className="mb-20 md:mb-32 scroll-mt-32">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-display font-medium mb-8 md:mb-12">Моя специализация</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <Reveal delay={0.1} className="h-full">
              <BentoCard
                title="Сайт под ключ"
                subtitle="01"
                className="h-[320px] md:h-[400px]"
              >

                <p className="text-sm md:text-base text-neutral-500 mt-4 max-w-[80%]">
                  Проектирую и верстаю сама, без потерь на передачу.
                </p>
              </BentoCard>
            </Reveal>

            <Reveal delay={0.2} className="h-full">
              <BentoCard
                title="ИИ в работе"
                subtitle="02"
                dark
                className="h-[320px] md:h-[400px]"
              >

                <p className="text-sm md:text-base text-neutral-400 mt-4 max-w-[80%]">
                  Ускоряю процесс там, где это уместно.
                </p>
              </BentoCard>
            </Reveal>

            <Reveal delay={0.3} className="h-full">
              <BentoCard
                title="Анализ до дизайна"
                subtitle="03"
                className="h-[320px] md:h-[400px]"
              >

                <p className="text-sm md:text-base text-neutral-500 mt-4 max-w-[80%]">
                  Изучаю ваш рынок, прежде чем приступить к дизайну.
                </p>
              </BentoCard>
            </Reveal>
          </div>
        </section>

        {/* Selected Works */}
        <section id="projects" className="mb-20 md:mb-32 scroll-mt-32">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-display font-medium mb-8 md:mb-12">Кейсы</h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-16 md:gap-24">
            <Reveal delay={0.1} className="w-full">
              <Link to="/case-study" className="group block">
                <div className="relative aspect-[4/3] md:aspect-[16/9] bg-neutral-100 rounded-2xl md:rounded-3xl overflow-hidden mb-6">
                  <img
                    src="/slide 26.png"
                    alt="Business Orbit"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                  <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-white px-6 py-3 rounded-full flex items-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Смотреть кейс <ArrowUpRight size={16} />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start gap-2">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-medium mb-1 group-hover:underline decoration-1 underline-offset-4">Бизнес-Орбита</h3>
                    <p className="text-sm md:text-base text-neutral-500">Сайт / Айдентика</p>
                  </div>
                  <div className="md:text-right max-w-xs">
                    <p className="text-sm md:text-base text-neutral-500">Онлайн-курс по ведению бизнеса</p>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Second project */}
            <Reveal delay={0.2} className="w-full">
              <Link to="/case-study-2" className="group block">
                <div className="relative aspect-[4/3] md:aspect-[16/9] bg-neutral-100 rounded-2xl md:rounded-3xl overflow-hidden mb-6">
                  <img
                    src="/скин слайд 21.png"
                    alt="skin"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                  <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-white px-6 py-3 rounded-full flex items-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Смотреть кейс <ArrowUpRight size={16} />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start gap-2">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-medium mb-1 group-hover:underline decoration-1 underline-offset-4">skin</h3>
                    <p className="text-sm md:text-base text-neutral-500">Сайт / Айдентика</p>
                  </div>
                  <div className="md:text-right max-w-xs">
                    <p className="text-sm md:text-base text-neutral-500">Магазин одежды</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20 md:mb-32 scroll-mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="aspect-[3/4] bg-neutral-100 rounded-3xl overflow-hidden">
                <img
                  src="/photo_2026-03-27_18-15-57.jpg"
                  alt="Эля Ринадова"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </Reveal>
            <div className="flex flex-col gap-6">
              <Reveal delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-display font-medium">Обо мне</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  К каждому проекту я отношусь как к маленькой жизни:
                  её можно улучшить, добавить яркости и света — нужно только увидеть, что в ней уже есть.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  В отличие от тех, кто делает ради галочки или просто чтобы работало,
                  я соединяю два начала: собственное видение и глубокий анализ.
                  Это не случайное сочетание — это единственный способ делать по-настоящему живой дизайн.
                  Ведь в любом бизнесе, как и в жизни, никогда нет чёткого плана.
                  Всегда есть разветвления — они рождаются из чувств и эмоций, но направляются разумом.
                  Именно этот баланс я удерживаю в каждой работе.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="flex gap-4 mt-4">
                  <div className="flex flex-col">
                    <span className="text-3xl font-display font-bold">5+</span>
                    <span className="text-sm text-neutral-500">Года опыта</span>
                  </div>
                  <div className="w-px h-12 bg-neutral-200" />
                  <div className="flex flex-col">
                    <span className="text-3xl font-display font-bold">15+</span>
                    <span className="text-sm text-neutral-500">Проектов</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="mb-20 md:mb-32 scroll-mt-32">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-display font-medium mb-12">Отзывы клиентов</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal delay={0.1}>
              <div className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100">
                <p className="text-lg italic mb-6">
                  «Эля справилась отлично! Продемонстрировала профессионализм и внимательность к деталям, будем обращаться вновь. Заказывали разработку логотипа для IT-студии.»
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-200 rounded-full" />
                  <div>
                    <p className="font-medium">scrmt</p>
                    <p className="text-sm text-neutral-500">Директор</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100">
                <p className="text-lg italic mb-6">
                  «Работаем с Элей по разному визуальному оформлению! Ответственный человек, который всегда на связи и делает все вовремя. Результатом довольны: дизайн получается стильным, актуальным и точно попадает в цель. Смело обращайтесь!»
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-200 rounded-full" />
                  <div>
                    <p className="font-medium">Мария</p>
                    <p className="text-sm text-neutral-500">Директор</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100">
                <p className="text-lg italic mb-6">
                  «Эля, очень рада, что тебя нашла, ты просто супер, сразу быстро поняла что я хочу и сделала стильно, красиво , как я и хотела, буду теперь всегда к тебе обращаться и рекомендовать 🙏»
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-200 rounded-full" />
                  <div>
                    <p className="font-medium">Алиса</p>
                    <p className="text-sm text-neutral-500">Блогер</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100">
                <p className="text-lg italic mb-6">
                  «Эля спасибо тебе большое за логотипы ❤️❤️❤️ просто нереально красивые ❤️❤️❤️ поняла с полуслова какой дизайн я хотела ❤️❤️❤️»
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-200 rounded-full" />
                  <div>
                    <p className="font-medium">Алиса</p>
                    <p className="text-sm text-neutral-500">Блогер</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-20 md:mb-32 scroll-mt-32">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-display font-medium mb-12">Услуги</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal delay={0.1}>
              <div className="border-t border-neutral-200 pt-8">
                <h3 className="text-xl font-medium mb-4">Одностраничный сайт</h3>
                <p className="text-neutral-600 mb-6">Полный цикл разработки: от прототипа и дизайна до верстки на Webflow. Идеально для экспертов и малого бизнеса.</p>
                <p className="text-2xl font-display font-bold">от 40 000 ₽</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="border-t border-neutral-200 pt-8">
                <h3 className="text-xl font-medium mb-4">Айдентика / Фирменный стиль</h3>
                <p className="text-neutral-600 mb-6">Разработка логотипа, подбор шрифтов и цветов, создание гайдлайна. Формируем узнаваемый и дорогой образ бренда.</p>
                <p className="text-2xl font-display font-bold">от 30 000 ₽</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="border-t border-neutral-200 pt-8">
                <h3 className="text-xl font-medium mb-4">Дизайн-сопровождение</h3>
                <p className="text-neutral-600 mb-6">Регулярная работа над вашим проектом: соц сети, баннеры, презентации, обновление сайта. Ваш личный дизайнер на аутсорсе.</p>
                <p className="text-2xl font-display font-bold">от 20 000 ₽ / мес</p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="border-t border-neutral-200 pt-8">
                <h3 className="text-xl font-medium mb-4">Консультация</h3>
                <p className="text-neutral-600 mb-6">Мы разбираем ваш бизнес: что уже работает, что мешает расти и как дизайн может это изменить.</p>
                <p className="text-2xl font-display font-bold">Бесплатно</p>
              </div>
            </Reveal>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

import { useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, Check, X, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function CaseStudy2() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [lmsVisibleCount, setLmsVisibleCount] = useState(3);
  const { scrollYProgress } = useScroll();

  const galleryItems = [
    {
      id: 1,
      src: "/skin-ecommerce-olive.vercel.app_.png",
      alt: "Flower Shop Website",
      label: "Главная страница",
      fullWidth: true
    },
  ];

  const lmsItems = [
    { id: 1, src: "/скин слайд 1.png", alt: "LMS 1", fullWidth: true },
    { id: 2, src: "/скин слайд 2.png", alt: "LMS 2", fullWidth: true },
    { id: 3, src: "/скин слайд 3.png", alt: "LMS 3", fullWidth: true },
    { id: 4, src: "/скин слайд 4.png", alt: "LMS 4", fullWidth: true },
    { id: 5, src: "/скин слайд 5.png", alt: "LMS 5", fullWidth: true },
    { id: 6, src: "/скин слайд 6.png", alt: "LMS 6", fullWidth: true },
    { id: 7, src: "/скин слайд 7.png", alt: "LMS 1", fullWidth: true },
    { id: 8, src: "/скин слайд 8.png", alt: "LMS 2", fullWidth: true },
    { id: 9, src: "/скин слайд 9.png", alt: "LMS 3", fullWidth: true },
    { id: 10, src: "/скин слайд 10.png", alt: "LMS 4", fullWidth: true },
    { id: 11, src: "/скин слайд 11.png", alt: "LMS 5", fullWidth: true },
    { id: 12, src: "/скин слайд 12.png", alt: "LMS 6", fullWidth: true },
    { id: 13, src: "/скин слайд 13.png", alt: "LMS 3", fullWidth: true },
    { id: 14, src: "/скин слайд 14.png", alt: "LMS 4", fullWidth: true },
    { id: 15, src: "/скин слайд 15.png", alt: "LMS 5", fullWidth: true },
    { id: 16, src: "/скин слайд 16.png", alt: "LMS 6", fullWidth: true },
    { id: 17, src: "/скин слайд 17.png", alt: "LMS 7", fullWidth: true },
    { id: 18, src: "/скин слайд 18.png", alt: "LMS 8", fullWidth: true },
    { id: 19, src: "/скин слайд 19.png", alt: "LMS 9", fullWidth: true },
    { id: 20, src: "/скин слайд 20.png", alt: "LMS 10", fullWidth: true },
    { id: 21, src: "/скин слайд 21.png", alt: "LMS 11", fullWidth: true },
    { id: 22, src: "/скин слайд 22.png", alt: "LMS 12", fullWidth: true },
    { id: 23, src: "/скин слайд 23.png", alt: "LMS 13", fullWidth: true },
    { id: 24, src: "/скин слайд 24.png", alt: "LMS 14", fullWidth: true },
  ];

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, galleryItems.length));
  };

  const showMoreLms = () => {
    setLmsVisibleCount(prev => Math.min(prev + 13, lmsItems.length));
  };

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-black selection:text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-50"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="pt-24 md:pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <Reveal>
          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-neutral-500 mb-6 md:mb-8">
            <span>Главная</span>
            <span>/</span>
            <span>Кейсы</span>
            <span>/</span>
            <span className="text-black font-medium">Магазин одежды</span>
          </div>
        </Reveal>

        {/* Hero */}
        <section className="mb-20 md:mb-32">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-display font-medium tracking-tighter leading-[1] md:leading-[0.9] mb-8">
              Сайт для уникального магазина одежды <br />
              <span className="text-neutral-400">Сайт и Айдентика</span>
            </h1>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 border-t border-neutral-200 pt-8">
            <Reveal delay={0.1}>
              <div>
                <p className="text-[10px] md:text-xs uppercase tracking-wider text-neutral-500 mb-2">Клиент</p>
                <p className="text-base md:text-lg font-medium">Магазин одежды</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <p className="text-[10px] md:text-xs uppercase tracking-wider text-neutral-500 mb-2">Роль</p>
                <p className="text-base md:text-lg font-medium">Мульти-дизайнер (Сайт + Айдентика)</p>
              </div>
            </Reveal>
            <Reveal delay={0.3} className="col-span-2 md:col-span-1">
              <div>
                <p className="text-[10px] md:text-xs uppercase tracking-wider text-neutral-500 mb-2">Результат</p>
                <p className="text-3xl md:text-4xl font-display font-bold">Прибавление новой аудитории</p>
                <p className="text-xs md:text-sm text-neutral-500">через айдентику</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Challenge */}
        <section className="mb-20 md:mb-32 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-display font-medium">Проблема</h2>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.1}>
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                Магазин имел только соц сети, что ограничивало возможности автоматизации заказов и не позволяло показать весь ассортимент в удобном виде.
                Клиенты часто путались в ценах и наличии.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Solution Comparison */}
        <section className="mb-20 md:mb-32">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-display font-medium mb-8 md:mb-12">Решение: Проанализировать аудиторию и создать новое позиционирование</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <Reveal delay={0.1} className="w-full">
              <div className="bg-neutral-50 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-neutral-100 h-full">
                <div className="flex items-start gap-4 mb-4 md:mb-6">
                  <div className="p-2 bg-red-100 rounded-full text-red-600 shrink-0">
                    <X size={18} />
                  </div>
                  <p className="text-base md:text-lg">Заказы только через Директ</p>
                </div>
                <div className="flex items-start gap-4 mb-4 md:mb-6">
                  <div className="p-2 bg-red-100 rounded-full text-red-600 shrink-0">
                    <X size={18} />
                  </div>
                  <p className="text-base md:text-lg">Сложно отследить наличие</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-red-100 rounded-full text-red-600 shrink-0">
                    <X size={18} />
                  </div>
                  <p className="text-base md:text-lg">Нет единого визуального стиля</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="w-full">
              <div className="bg-black text-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-neutral-800 h-full">
                <div className="flex items-start gap-4 mb-4 md:mb-6">
                  <div className="p-2 bg-white/20 rounded-full text-white shrink-0">
                    <Check size={18} />
                  </div>
                  <p className="text-base md:text-lg">Удобный каталог с фильтрами</p>
                </div>
                <div className="flex items-start gap-4 mb-4 md:mb-6">
                  <div className="p-2 bg-white/20 rounded-full text-white shrink-0">
                    <Check size={18} />
                  </div>
                  <p className="text-base md:text-lg">Сильный характер бренда — запоминается с первого взгляда</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/20 rounded-full text-white shrink-0">
                    <Check size={18} />
                  </div>
                  <p className="text-base md:text-lg">Единый стиль от билборда до витрины</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Visual Gallery */}
        <section className="mb-20 md:mb-32">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-display font-medium mb-8 md:mb-12">Интерфейс сайта</h2>
          </Reveal>

          <div className="flex flex-col gap-6 md:gap-8">
            {galleryItems.slice(0, visibleCount).map((item) => (
              <div key={item.id} className="w-full">
                <Reveal delay={0.1} className="w-full">
                  <div className="w-full bg-neutral-100 rounded-2xl md:rounded-3xl overflow-hidden relative group">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs md:text-sm font-medium">
                      {item.label}
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>

          {visibleCount < galleryItems.length && (
            <div className="mt-12 flex justify-center">
              <MagneticButton
                onClick={showMore}
                variant="outline"
                className="group flex items-center gap-2 px-8 py-4 border-neutral-200 hover:border-black transition-colors"
              >
                Показать еще <Plus size={18} className="transition-transform group-hover:rotate-90" />
              </MagneticButton>
            </div>
          )}
        </section>

        {/* LMS Gallery */}
        <section className="mb-20 md:mb-32">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-display font-medium mb-8 md:mb-12">Фирменный стиль</h2>
          </Reveal>

          <div className="flex flex-col gap-6 md:gap-8">
            {lmsItems.slice(0, lmsVisibleCount).map((item) => (
              <div key={item.id} className="w-full">
                <Reveal delay={0.1} className="w-full">
                  <div className="w-full bg-neutral-100 rounded-2xl md:rounded-3xl overflow-hidden relative group">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs md:text-sm font-medium">

                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>

          {lmsVisibleCount < lmsItems.length && (
            <div className="mt-12 flex justify-center">
              <MagneticButton
                onClick={showMoreLms}
                variant="outline"
                className="group flex items-center gap-2 px-8 py-4 border-neutral-200 hover:border-black transition-colors"
              >
                Показать еще <Plus size={18} className="transition-transform group-hover:rotate-90" />
              </MagneticButton>
            </div>
          )}
        </section>

        {/* Tech Highlight */}
        <section className="mb-20 md:mb-32">
          <Reveal className="w-full">
            <div className="bg-black text-white rounded-2xl md:rounded-3xl p-8 md:p-16 overflow-hidden relative">
              <div className="relative z-10 max-w-2xl">
                <p className="text-neutral-400 uppercase tracking-wider text-[10px] md:text-sm mb-4">Первый шаг</p>
                <h2 className="text-3xl md:text-5xl font-display font-medium mb-6 md:mb-8">
                  Хочешь так же?
                </h2>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-10 md:mb-12">
                  Разберу ваш бизнес и покажу, какой дизайн даст результат — на бесплатном созвоне.
                </p>
                <MagneticButton href="https://t.me/ellrinad" target="_blank" variant="secondary" className="w-full md:w-auto bg-white text-black hover:bg-neutral-200">
                  Записаться на созвон <ArrowUpRight className="ml-2 w-4 h-4" />
                </MagneticButton>
              </div>

              {/* Abstract Background Element */}
              <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-1/2 right-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-900 rounded-full blur-[80px] md:blur-[120px]" />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Next Project */}
        <section className="border-t border-neutral-200 pt-12 flex justify-end">
          <Link to="/case-study" className="group flex items-center gap-4 text-xl font-medium hover:opacity-50 transition-opacity">
            Следующий кейс <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </section>

      </main>

      <Footer />
    </div>
  );
}

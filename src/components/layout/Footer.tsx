import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-24 gap-12">
          <Reveal>
            <h2 className="text-5xl md:text-9xl font-display font-medium tracking-tighter leading-[1] md:leading-[0.9]">
              Раскрой свой <br />
              <span className="text-neutral-500">бизнес.</span>
            </h2>
            <p className="text-xl font-medium mb-4 mt-50">Запишись на бесплатный разбор</p>
          </Reveal>
          <Reveal delay={0.2} className="w-full md:w-auto">
            <MagneticButton href="https://t.me/m/B_VekzFYMDEy" target="_blank" className="w-full md:w-auto group bg-white text-black px-10 py-6 text-lg">
              Записаться
              <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </MagneticButton>
          </Reveal>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500">
          <p>© 2026 Эля Ринадова. Все права защищены.</p>
          <div className="flex gap-8">
            <a href="https://t.me/webdesignelya" className="hover:text-white transition-colors">Telegram</a>
            <a href="https://www.instagram.com/elya.rinadova/" className="hover:text-white transition-colors">Instagram*</a>
            <a href="https://www.behance.net/elyarinadova" className="hover:text-white transition-colors">Behance</a>
          </div>
          <p>Instagram — проект Meta Platforms Inc., деятельность которой в России запрещена</p>
        </div>
      </div>
    </footer>
  );
}

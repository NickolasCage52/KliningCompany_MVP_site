import { Container } from '@/components/layout/container';

export function AboutSection() {
  return (
    <section id="o-nas" className="w-full py-16 sm:py-24 scroll-mt-20">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            О нас
          </h2>
          <p className="mt-6 text-slate-600 leading-relaxed">
            Компания «Большая уборка» — ваш надёжный партнёр в создании чистоты и порядка.
            Мы — команда опытных профессионалов, предлагающая широкий спектр услуг по уборке.
            Наше кредо — качество, надёжность и индивидуальный подход к каждому клиенту.
            Доверьте нам заботу о вашем пространстве, и вы оцените безупречный результат!
          </p>
          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-300"
          >
            <span aria-hidden>▶</span>
            Проиграть видео
          </button>
        </div>
      </Container>
    </section>
  );
}

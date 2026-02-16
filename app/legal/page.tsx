import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { site } from '@/data/site';

export const metadata = {
  title: 'Правовая информация',
  description: `Правовая информация и условия оказания услуг ${site.name}.`,
};

export default function LegalPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container>
        <nav className="text-sm text-slate-500 mb-6" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-primary-600">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Правовая информация</span>
        </nav>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Правовая информация
        </h1>
        <div className="mt-8 max-w-3xl space-y-4 text-slate-600">
          <p>
            Использование сайта {site.name} означает согласие с изложенными здесь условиями.
            Компания осуществляет деятельность в соответствии с законодательством Российской Федерации.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-slate-900">Условия оказания услуг</h2>
          <p>
            Стоимость услуг согласовывается до начала работ. Оплата производится по завершении уборки после проверки качества заказчиком.
            Мы принимаем наличные, банковские карты и переводы на расчётный счёт. Для юридических лиц предусмотрено заключение договора.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-slate-900">Ответственность</h2>
          <p>
            Компания несёт полную ответственность за имущество заказчика во время проведения уборки.
            Работы выполняют сотрудники с необходимым опытом и документами. Техника безопасности на объектах соблюдается.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-slate-900">Контакты</h2>
          <p>
            По вопросам сотрудничества и претензиям: {site.phone}, {site.email}.
          </p>
        </div>
      </Container>
    </div>
  );
}

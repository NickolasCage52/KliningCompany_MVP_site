import Link from 'next/link';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/container';
import { site } from '@/data/site';
import { OrderForm } from '@/components/forms/order-form';

const baseUrl = 'https://bigyborka.ru';

export const metadata: Metadata = {
  title: 'Контакты',
  description: `Связаться с ${site.name}: ${site.phone}, ${site.email}. ${site.schedule}. Москва и Московская область.`,
  openGraph: {
    title: `Контакты | ${site.name}`,
    description: `Связаться с ${site.name}: ${site.phone}, ${site.email}. ${site.schedule}.`,
    url: `${baseUrl}/kontakty`,
    locale: 'ru_RU',
  },
  alternates: { canonical: `${baseUrl}/kontakty` },
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container>
        <nav className="text-sm text-slate-500 mb-6" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-primary-600">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Контакты</span>
        </nav>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Контакты
        </h1>
        <p className="mt-2 text-slate-600">
          Свяжитесь с нами любым удобным способом. Работаем {site.schedule.toLowerCase()}.
        </p>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Телефон</h2>
            <a href={`tel:${site.phoneRaw}`} className="mt-1 block text-primary-600 font-medium hover:underline">
              {site.phone}
            </a>
            <p className="mt-4 text-sm text-slate-500">{site.schedule}</p>
            <h2 className="mt-8 text-lg font-semibold text-slate-900">Email</h2>
            <a href={`mailto:${site.email}`} className="mt-1 block text-primary-600 hover:underline">
              {site.email}
            </a>
            <h2 className="mt-8 text-lg font-semibold text-slate-900">Мессенджеры</h2>
            <ul className="mt-2 flex flex-wrap gap-4">
              <li>
                <a href={site.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={site.social.vk} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                  VK
                </a>
              </li>
              <li>
                <a href={site.social.telegram} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                  Telegram
                </a>
              </li>
            </ul>
            <p className="mt-6 text-slate-600">{site.region}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Обратный звонок</h2>
            <p className="mt-1 text-sm text-slate-600">
              Оставьте имя и телефон — перезвоним в удобное время.
            </p>
            <div className="mt-6">
              <OrderForm compact />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

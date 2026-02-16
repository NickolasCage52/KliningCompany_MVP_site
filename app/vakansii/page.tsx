import Link from 'next/link';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { site } from '@/data/site';

const baseUrl = 'https://bigyborka.ru';

export const metadata: Metadata = {
  title: 'Вакансии',
  description: `Вакансии в клининговой компании ${site.name}. Москва и МО. Работа для клинеров и бригадиров.`,
  openGraph: {
    title: `Вакансии | ${site.name}`,
    url: `${baseUrl}/vakansii`,
    locale: 'ru_RU',
  },
  alternates: { canonical: `${baseUrl}/vakansii` },
};

export default function VacanciesPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container>
        <nav className="text-sm text-slate-500 mb-6" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-primary-600">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Вакансии</span>
        </nav>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Вакансии
        </h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Мы всегда рады ответственным сотрудникам. Оставьте заявку — с вами свяжется HR.
        </p>
        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50/50 p-6 max-w-2xl">
          <h2 className="text-lg font-semibold text-slate-900">Клинер</h2>
          <p className="mt-2 text-slate-600">
            Уборка квартир, офисов, помещений после ремонта. Опыт от 1 года приветствуется. Гибкий график, официальное оформление.
          </p>
          <p className="mt-2 text-sm text-slate-500">Москва и Московская область</p>
          <Button asChild className="mt-4">
            <a href="/#zayavka">Откликнуться</a>
          </Button>
        </div>
        <p className="mt-8 text-slate-600">
          По вопросам трудоустройства: <a href={`tel:${site.phoneRaw}`} className="text-primary-600 hover:underline">{site.phone}</a>,{' '}
          <a href={`mailto:${site.email}`} className="text-primary-600 hover:underline">{site.email}</a>.
        </p>
      </Container>
    </div>
  );
}

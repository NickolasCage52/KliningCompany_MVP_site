import Link from 'next/link';
import { site } from '@/data/site';
import { Container } from './container';

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-semibold text-slate-900">{site.name}</p>
            <p className="mt-1 text-sm text-slate-600">{site.description}</p>
            <p className="mt-2 text-sm font-medium text-slate-700">{site.phoneDisplay}</p>
            <p className="text-sm text-slate-600">{site.schedule}</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Частным клиентам</p>
            <ul className="mt-2 space-y-1">
              {site.nav.individuals.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-600 hover:text-primary-600">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Юридическим лицам</p>
            <ul className="mt-2 space-y-1">
              {site.nav.business.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-600 hover:text-primary-600">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Контакты</p>
            <ul className="mt-2 space-y-1">
              <li>
                <a href={`tel:${site.phoneRaw}`} className="text-sm text-slate-600 hover:text-primary-600">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-sm text-slate-600 hover:text-primary-600">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-2 mt-2">
                <a href={site.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary-600" aria-label="WhatsApp">
                  WhatsApp
                </a>
                <a href={site.social.vk} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary-600" aria-label="VK">
                  Vk
                </a>
                <a href={site.social.telegram} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary-600" aria-label="Telegram">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {site.legal.companyName}. {site.legal.rights}.
          </p>
          <div className="flex gap-6">
            <Link href="/kontakty" className="text-sm text-slate-500 hover:text-primary-600">
              Контакты
            </Link>
            <Link href="/legal" className="text-sm text-slate-500 hover:text-primary-600">
              Правовая информация
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

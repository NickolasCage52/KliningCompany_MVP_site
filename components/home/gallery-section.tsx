import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { completedReports } from '@/data/reports';

export function GallerySection() {
  return (
    <section id="foto-video" className="w-full py-16 sm:py-24 bg-slate-50 scroll-mt-20">
      <Container>
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Фото с места
        </h2>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-48 w-64 shrink-0 rounded-lg bg-slate-200"
              aria-hidden
            />
          ))}
        </div>
        <h2 className="font-display mt-12 text-2xl font-bold text-slate-900">
          Видео с нами
        </h2>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-4">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="h-40 w-72 shrink-0 rounded-lg bg-slate-200 flex items-center justify-center text-slate-500 text-sm"
            >
              Видео {i}
            </div>
          ))}
        </div>
        <h2 className="font-display mt-12 text-2xl font-bold text-slate-900">
          Выполненные работы
        </h2>
        <div className="mt-6 space-y-6">
          {completedReports.map((report) => (
            <div key={report.id} className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="h-40 w-full sm:w-48 shrink-0 rounded-lg bg-slate-200" />
                <div>
                  <h3 className="font-semibold text-slate-900">{report.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                    {report.excerpt}
                  </p>
                  <Link
                    href={report.href}
                    className="mt-2 inline-block text-sm font-medium text-primary-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded"
                  >
                    Читать далее
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

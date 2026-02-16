import { Container } from '@/components/layout/container';
import { Card, CardContent } from '@/components/ui/card';
import { reviews } from '@/data/reviews';
import { site } from '@/data/site';
import { Badge } from '@/components/ui/badge';

export function ReviewsSection() {
  const featured = reviews.slice(0, 6);
  return (
    <section id="otzyvy" className="w-full py-16 sm:py-24 bg-slate-50 scroll-mt-20">
      <Container>
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Клиенты скажут вам больше
        </h2>
        <p className="mt-2 text-slate-600">
          Отзывы с Яндекс, Авито, 2GIS, Profi.ru, Google.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((r) => (
            <Card key={r.id} className="rounded-2xl border-slate-200 overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 motion-reduce:transform-none">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="font-semibold text-slate-900">{r.author}</span>
                  <Badge variant="secondary" className="rounded-lg">{r.source}</Badge>
                </div>
                <p className="mt-1 text-xs text-slate-500">{r.date}</p>
                <p className="mt-3 text-slate-600 leading-relaxed line-clamp-4">{r.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href={site.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded"
          >
            Посмотреть все
          </a>
        </div>
      </Container>
    </section>
  );
}

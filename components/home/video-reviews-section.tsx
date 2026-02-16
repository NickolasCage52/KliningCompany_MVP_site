import { Container } from '@/components/layout/container';

export function VideoReviewsSection() {
  const items = [
    { id: '1', name: 'Отзыв от Людмилы' },
    { id: '2', name: 'Отзыв от Маргариты' },
    { id: '3', name: 'Отзыв от Ольги' },
  ];

  return (
    <section id="video-otzyvy" className="w-full py-16 sm:py-24 scroll-mt-20">
      <Container>
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Видеоотзывы
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex aspect-video items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-500"
            >
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

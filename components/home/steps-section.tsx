import { Container } from '@/components/layout/container';
import { steps } from '@/data/trust';

export function StepsSection() {
  return (
    <section id="nasha-rabota" className="w-full py-16 sm:py-24 scroll-mt-20">
      <Container>
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Процесс уборки
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.id} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-semibold">
                  {step.id}
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
              </div>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="absolute left-5 top-12 hidden h-full w-px bg-slate-200 md:block" aria-hidden />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

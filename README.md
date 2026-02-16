# Большая Уборка — сайт клининговой компании

Современный лендинг клининговой компании (Москва и МО): услуги, расчёт стоимости, заявки, отзывы, FAQ.

## Стек

- **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**
- **React Hook Form** + **Zod** для форм и валидации
- **Radix UI** (Accordion, Dialog, Tabs) для доступных компонентов

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

Если появляется **ChunkLoadError** (timeout при загрузке layout), очистите кэш и перезапустите:

```bash
npm run dev:clean
```

## Деплой на GitHub Pages

1. В репозитории: **Settings → Pages → Build and deployment** — источник выберите **GitHub Actions**.
2. При пуше в ветку `main` workflow `.github/workflows/deploy.yml` соберёт статический экспорт и выложит его на GitHub Pages.
3. Сайт будет доступен по адресу: `https://<ваш-username>.github.io/KliningCompany_MVP_site/`

## Сборка и тесты

```bash
npm run build
npm test
```

## Структура

- `app/` — страницы и layout (главная, услуги, контакты, правовая информация, вакансии)
- `components/` — UI-компоненты и блоки главной (hero, услуги, отзывы, FAQ, формы)
- `data/` — контент: сайт, услуги, отзывы, FAQ, шаги, промо (редактируемый слой)
- `lib/` — утилиты и логика расчёта стоимости (`lib/pricing`)

## Конверсии

- **Заявка на обратный звонок** — форма (имя, телефон; опционально адрес, дата, тип услуги) с honeypot и успешным состоянием.
- **Рассчёт стоимости** — калькулятор по типу уборки, площади, окнам, балкону; результат выводится на странице.

SEO: мета-теги, Open Graph, `sitemap.xml`, `robots.txt`, JSON-LD (LocalBusiness). Мобильная панель с CTA внизу экрана. Для фавиконки добавьте `public/favicon.ico`.
# KliningCompany_MVP_site

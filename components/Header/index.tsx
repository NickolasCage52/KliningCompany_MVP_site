'use client';

import * as React from 'react';
import Link from 'next/link';
import { site } from '@/data/site';
import { Container } from '@/components/layout/container';
import { Topbar } from './Topbar';
import { MainNav } from './MainNav';
import { HeaderCtas } from './HeaderCtas';
import { MobileNavDrawer } from './MobileNavDrawer';

/**
 * Шапка: верхняя полоса (Topbar) + основная строка (логотип | нав | CTA).
 * Сетка без наложений: логотип и CTA с фиксированной зоной, нав занимает остаток.
 */
export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const phoneDisplay = site.phoneDisplay;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <Topbar />

      {/* Основная строка: расширенный контейнер (до 1536px), всё влезает без прокрутки */}
      <Container className="header-container w-full min-w-0 max-w-[1536px]">
        <div className="grid h-16 min-h-16 w-full min-w-0 grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-4 xl:gap-6">
          {/* Логотип: полный текст без троеточий и сокращений */}
          <Link
            href="/"
            className="flex shrink-0 flex-col justify-center text-left"
            aria-label={`${site.tagline} ${site.name} — главная`}
          >
            <span className="whitespace-nowrap font-semibold leading-tight text-slate-900 transition-colors hover:text-primary-600 text-base sm:text-lg">
              {site.tagline}
            </span>
            <span className="whitespace-nowrap text-xs font-normal leading-tight text-slate-600 sm:text-sm">
              {site.name}
            </span>
          </Link>

          {/* Навигация: вся ширина колонки, без прокрутки — всё видно */}
          <div className="flex min-w-0 justify-center overflow-visible">
            <MainNav />
          </div>

          {/* Десктоп: телефон + кнопки */}
          <div className="hidden min-w-0 justify-end xl:flex">
            <HeaderCtas variant="desktop" phoneDisplay={phoneDisplay} />
          </div>

          {/* Планшет/мобильный: CTA + бургер */}
          <div className="flex min-w-0 flex-nowrap items-center justify-end gap-2 xl:hidden">
            <HeaderCtas variant="mobile" phoneDisplay={phoneDisplay} />
            <button
              type="button"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label="Меню"
              aria-controls="mobile-nav-drawer"
            >
              <span className="sr-only">Меню</span>
              {mobileOpen ? <span aria-hidden>✕</span> : <span aria-hidden>☰</span>}
            </button>
          </div>
        </div>
      </Container>

      <MobileNavDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        phoneDisplay={phoneDisplay}
      />
    </header>
  );
}

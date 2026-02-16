'use client';

import * as React from 'react';
import Link from 'next/link';
import { site } from '@/data/site';
import { NavDropdown, CLOSE_DELAY_MS } from './NavDropdown';

/** Main links always visible in nav bar */
const MAIN_VISIBLE = 3;
const mainLinks = site.nav.main.slice(0, MAIN_VISIBLE);
const moreLinks = site.nav.main.slice(MAIN_VISIBLE);

function useDropdownDelay() {
  const [open, setOpen] = React.useState<string | null>(null);
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleClose = React.useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setOpen(null), CLOSE_DELAY_MS);
  }, []);

  const cancelClose = React.useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const openDropdown = React.useCallback((id: string) => {
    cancelClose();
    setOpen(id);
  }, [cancelClose]);

  const closeDropdown = React.useCallback(() => setOpen(null), []);

  React.useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  return { open, setOpen: closeDropdown, scheduleClose, cancelClose, openDropdown };
}

/**
 * Desktop main nav: two dropdowns (Частным клиентам, Юридическим лицам) + main links + "Ещё" dropdown.
 * Visible from xl (1280px). Uses portal for dropdowns so they are never clipped.
 */
export function MainNav() {
  const { open, setOpen, scheduleClose, cancelClose, openDropdown } = useDropdownDelay();
  const individualsRef = React.useRef<HTMLButtonElement>(null);
  const businessRef = React.useRef<HTMLButtonElement>(null);
  const moreRef = React.useRef<HTMLButtonElement>(null);

  return (
    <nav
      className="hidden xl:flex flex-1 flex-nowrap items-center justify-center gap-2 xl:gap-2.5 min-w-max text-sm"
      aria-label="Основное меню"
    >
      <NavDropdown
        id="individuals"
        label="Частным клиентам"
        items={site.nav.individuals}
        open={open === 'individuals'}
        onOpen={() => openDropdown('individuals')}
        onClose={setOpen}
        onScheduleClose={scheduleClose}
        onCancelClose={cancelClose}
        triggerRef={individualsRef}
        ariaControls="nav-menu-individuals"
      />
      <NavDropdown
        id="business"
        label="Юридическим лицам"
        items={site.nav.business}
        open={open === 'business'}
        onOpen={() => openDropdown('business')}
        onClose={setOpen}
        onScheduleClose={scheduleClose}
        onCancelClose={cancelClose}
        triggerRef={businessRef}
        ariaControls="nav-menu-business"
      />

      {mainLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="shrink-0 whitespace-nowrap py-2 font-medium text-slate-700 hover:text-primary-600"
        >
          {item.label}
        </Link>
      ))}

      {moreLinks.length > 0 && (
        <NavDropdown
          id="more"
          label="Ещё"
          items={moreLinks}
          open={open === 'more'}
          onOpen={() => openDropdown('more')}
          onClose={setOpen}
          onScheduleClose={scheduleClose}
          onCancelClose={cancelClose}
          triggerRef={moreRef}
          ariaControls="nav-menu-more"
        />
      )}
    </nav>
  );
}

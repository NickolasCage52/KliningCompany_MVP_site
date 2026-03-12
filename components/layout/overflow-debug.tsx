'use client';

import * as React from 'react';

/** В режиме разработки логирует элементы, вызывающие horizontal overflow. */
export function OverflowDebug() {
  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    function run() {
      const vw = document.documentElement.clientWidth;
      const sw = document.documentElement.scrollWidth;
      const delta = sw - vw;
      /* Clear previous highlights */
      document.querySelectorAll('[data-overflow-debug]').forEach((el) => {
        (el as HTMLElement).style.outline = '';
        (el as HTMLElement).removeAttribute('data-overflow-debug');
      });
      if (delta <= 0) return;
      const allOffenders: Array<{ el: Element; tag: string; class: string; right: number; overflow: number }> = [];
      document.querySelectorAll('*').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.right > vw + 1) {
          allOffenders.push({
            el,
            tag: el.tagName,
            class: (el.className && typeof el.className === 'string' ? el.className : '').slice(0, 100),
            right: Math.round(r.right),
            overflow: Math.round(r.right - vw),
          });
        }
      });
      allOffenders.sort((a, b) => b.overflow - a.overflow);
      const rootOffenders = allOffenders.filter((o) => {
        let parent = o.el.parentElement;
        while (parent && parent !== document.body) {
          const pr = parent.getBoundingClientRect();
          if (pr.right > vw + 1) return false;
          parent = parent.parentElement;
        }
        return true;
      });
      const toLog = rootOffenders.length ? rootOffenders : allOffenders.slice(0, 5);
      console.warn('[OverflowDebug] delta:', delta, 'px, offenders:', toLog.length);
      console.table(toLog.slice(0, 15).map((o) => ({ tag: o.tag, class: (o.class || '').slice(0, 60), overflow: o.overflow })));
      toLog.forEach((o) => {
        const h = o.el as HTMLElement;
        h.style.outline = '3px solid red';
        h.setAttribute('data-overflow-debug', '1');
      });
    }

    /* Run after layout settle + on resize */
    const t1 = setTimeout(run, 100);
    const t2 = setTimeout(run, 500);
    window.addEventListener('resize', run, { passive: true });
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', run);
      document.querySelectorAll('[data-overflow-debug]').forEach((el) => {
        (el as HTMLElement).style.outline = '';
      });
    };
  }, []);
  return null;
}

import { trigger, transition, style, animate, state } from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0}),
    animate('200ms ease-in', style({ opacity: 1 })),
  ]),
]);

export const fadeOutAnimation = trigger('fadeOut', [
  transition(':leave', [
    animate('200ms ease-out', style({ opacity: 0 })),
  ]),
]);

export const expandAnimation  = trigger('expand', [
  transition(':enter', [
    style({ opacity: 0, height: '0px' }),
    animate('200ms ease-in', style({ height: '*' })),
    animate('200ms ease-in', style({ opacity: 1 })),
  ]),
]);

export const collapseAnimation  = trigger('collapse', [
  transition(':leave', [
    style({ opacity: 1, height: '*' }),
    animate('200ms ease-in', style({ opacity: 0 })),
    animate('200ms ease-in', style({ height: '0px' }))
  ]),
]);
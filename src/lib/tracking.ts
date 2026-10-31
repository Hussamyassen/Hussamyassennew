import type { ContactChannel, ContactPlacement } from '../config/site';
/** Intent-only tracking hook. No analytics vendor is configured. */
export function contactTrackingAttributes(channel: ContactChannel, placement: ContactPlacement) {
  return { 'data-contact-channel': channel, 'data-contact-placement': placement, 'data-event-intent': 'contact_click' };
}

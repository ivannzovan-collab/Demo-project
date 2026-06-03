/* Builds a trailer stream URL from a VideoRef + the configured host. */

import { config } from '../data/config';
import type { VideoRef } from '../types';

export function trailerUrl({ type, id, kind = 'TRAILER_720' }: VideoRef): string {
  return `${config.trailerBaseUrl}/${type}/${id}/${kind}.mp4`;
}

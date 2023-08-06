import Medusa from '@medusajs/medusa-js';
import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';

export const medusa = new Medusa({
	baseUrl: PUBLIC_BACKEND_BASE_URL,
	maxRetries: 3
});

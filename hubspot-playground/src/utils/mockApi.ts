import { transcript } from '../data/transcript.ts';

export interface WebhookOutput {
  budget: string;
  lead_name: string;
  lead_contact: string;
  representative: string;
  destinations: string[];
  guest_count_range: string;
  adults_only: boolean;
  flights_needed: boolean;
}

export interface WebhookResponse {
  success: boolean;
  data?: WebhookOutput;
  error?: string;
}

export const triggerWebhook = async (
  onProgress: (percent: number) => void
): Promise<WebhookResponse> => {
  const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error('VITE_WEBHOOK_URL is not defined in environment variables');
  }

  onProgress(0);

  // This is for simulating the progress of the API Call
  let progress = 0;
  const interval = setInterval(() => {
    progress = Math.min(progress + 10, 90);
    onProgress(progress);
  }, 1000);

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transcript),
    });

    clearInterval(interval);
    onProgress(100);

    if (!response.ok) {
      return {
        success: false,
        error: `Webhook returned ${response.status}: ${response.statusText}`,
      };
    }

    const data = await response.json().catch(() => null);
    return { success: true, data };
  } catch (err: any) {
    clearInterval(interval);
    onProgress(0);
    return { success: false, error: err.message };
  }
};

export const simulateError = async (
  onProgress: (percent: number) => void
): Promise<WebhookResponse> => {
  onProgress(0);

  let progress = 0;
  const interval = setInterval(() => {
    progress = Math.min(progress + 20, 60);
    onProgress(progress);
  }, 400);

  // Simulate a short delay then fail
  await new Promise((resolve) => setTimeout(resolve, 1500));

  clearInterval(interval);
  onProgress(0);

  return {
    success: false,
    error: 'Connection refused: the remote server did not respond (simulated error)',
  };
};

import { ENV } from "../config/env";

interface HttpOptions extends RequestInit {
  timeout?: number;
  signal?: AbortSignal;
}

function mergeSignals(
  external?: AbortSignal,
  timeout?: AbortSignal,
): AbortSignal | undefined {
  if (external && timeout) {
    return AbortSignal.any([external, timeout]);
  }

  return external ?? timeout;
}

export async function http<T>(path: string, options?: HttpOptions): Promise<T> {
  const timeOutController = new AbortController();
  const timeout = options?.timeout ?? 10000;

  const timeoutId = setTimeout(() => {
    timeOutController.abort();
  }, timeout);

  const signal = mergeSignals(options?.signal, timeOutController.signal);

  try {
    const response = await fetch(`${ENV.API_BASE_URL}${path}`, {
      ...options,
      signal,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(`HTTP ${response.status}: ${message}`);
    }

    return await response.json();
  } finally {
    clearTimeout(timeoutId);
  }
}

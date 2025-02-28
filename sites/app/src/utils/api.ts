export interface ApiRequestInit extends Pick<RequestInit, "method"> {
  headers?: Record<string, string>;
  json?: unknown;
}

export const fetchApi = async <T>(
  path: string,
  { headers = {}, json, method }: ApiRequestInit = {}
): Promise<T> => {
  const init: RequestInit = { method, headers };
  if (json) {
    init.body = JSON.stringify(json);
    headers["Content-Type"] = "application/json";
  }
  const url = new URL(path, import.meta.env.PUBLIC_API_URL);
  const response = await fetch(url.href, init);
  if (!response.ok) {
    throw new Error(`Invalid response from API: ${response.statusText}`);
  }
  return (await response.json()) as T;
};

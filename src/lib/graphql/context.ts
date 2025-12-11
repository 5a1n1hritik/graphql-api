export function createContext() {
  return {
    requestId: Math.random().toString(36).slice(2), // future logging, tracing
  };
}

export const ROUTES = {
  home: "/",
  catalog: "/catalog",
  flavour: (id: string) => `/catalog/${id}`,
  flavourPattern: "/catalog/:flavourId",
} as const;

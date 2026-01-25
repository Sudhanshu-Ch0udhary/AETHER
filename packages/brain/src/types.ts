export interface Intent {
  services: string[];
  actions: string[];
  entities: Record<string, any>;
}

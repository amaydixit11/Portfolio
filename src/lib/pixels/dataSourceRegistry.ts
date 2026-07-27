import { DataSource, DataSourceConfig } from "@/types/pixels";
import { githubDataSource } from "./sources/github";
import { codeforcesDataSource } from "./sources/codeforces";

class DataSourceRegistry {
  private sources: Map<string, DataSource> = new Map();

  constructor() {
    // Register all data sources
    this.register(githubDataSource);
    this.register(codeforcesDataSource);
  }

  register(config: DataSourceConfig): void {
    const dataSource: DataSource = {
      id: config.id,
      name: config.name,
      description: config.description,
      icon: config.icon,
      colors: config.colors,
      unit: config.unit,
      fetchData: async () => {
        const result = config.dataProvider();
        if (result instanceof Promise) {
          return await result;
        }
        return result;
      },
    };

    this.sources.set(config.id, dataSource);
  }

  getSource(id: string): DataSource | undefined {
    return this.sources.get(id);
  }

  getAllSources(): DataSource[] {
    return Array.from(this.sources.values());
  }
}

export const dataSourceRegistry = new DataSourceRegistry();
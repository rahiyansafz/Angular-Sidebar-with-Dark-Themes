import { CoreService } from './core.service';
import { ObjectMapService } from './object-map.service';
import { SidepanelService } from './sidepanel.service';
import { SnackerService } from './snacker.service';
import { ThemeService } from './theme.service';

export const Services = [
  CoreService,
  ObjectMapService,
  SidepanelService,
  SnackerService,
  ThemeService
];

export * from './core.service';
export * from './object-map.service';
export * from './sidepanel.service';
export * from './snacker.service';
export * from './theme.service';
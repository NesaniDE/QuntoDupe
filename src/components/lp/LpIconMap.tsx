import type { ComponentType, SVGProps } from "react";

import {
  ActivityIcon,
  BookIcon,
  CalendarIcon,
  ChecklistIcon,
  ClipboardIcon,
  CodeIcon,
  CogIcon,
  CompassIcon,
  EyeIcon,
  FlowIcon,
  GaugeIcon,
  KeyIcon,
  LayersIcon,
  LayoutIcon,
  MagnifierIcon,
  NetworkIcon,
  PaletteIcon,
  PlugIcon,
  RocketIcon,
  ShieldIcon,
  SparkIcon,
  TargetIcon,
  UsersIcon,
} from "@/components/icons";
import type { LpIconName } from "@/types/landing";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const ICON_MAP: Record<LpIconName, IconComponent> = {
  activity: ActivityIcon,
  book: BookIcon,
  calendar: CalendarIcon,
  checklist: ChecklistIcon,
  clipboard: ClipboardIcon,
  code: CodeIcon,
  cog: CogIcon,
  compass: CompassIcon,
  eye: EyeIcon,
  flow: FlowIcon,
  gauge: GaugeIcon,
  key: KeyIcon,
  layers: LayersIcon,
  layout: LayoutIcon,
  magnifier: MagnifierIcon,
  network: NetworkIcon,
  palette: PaletteIcon,
  plug: PlugIcon,
  rocket: RocketIcon,
  shield: ShieldIcon,
  spark: SparkIcon,
  target: TargetIcon,
  users: UsersIcon,
};

export function LpIcon({
  name,
  className,
}: {
  name: LpIconName;
  className?: string;
}) {
  const Cmp = ICON_MAP[name];
  return <Cmp className={className} />;
}

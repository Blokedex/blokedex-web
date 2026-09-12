import {
  ArrowDown,
  ArrowLeft,
  ArrowLeftRight,
  ArrowRight,
  BookOpen,
  Bookmark,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clock3,
  Coins,
  Compass,
  Copy,
  Egg,
  ExternalLink,
  Flame,
  Gem,
  Gift,
  Globe2,
  Heart,
  Home,
  Info,
  Layers3,
  Leaf,
  Map,
  Menu,
  Moon,
  Mountain,
  Pickaxe,
  Search,
  ScrollText,
  Shield,
  ShieldCheck,
  Sparkles,
  Sprout,
  Store,
  Sun,
  Swords,
  Target,
  Trophy,
  Users,
  Wallet,
  X,
  Zap,
  CircleDot,
  PawPrint,
  Skull,
  DoorOpen,
  BriefcaseBusiness,
  Landmark,
  Flag,
  Bell,
  Link,
  LockKeyhole,
} from "lucide-react";
import {
  Dna,
  Crown,
  ShoppingBag,
  PanelsTopLeft,
  UsersRound,
  PackageOpen,
  Backpack,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  dna: Dna,
  crown: Crown,
  "shopping-bag": ShoppingBag,
  "panels-top-left": PanelsTopLeft,
  "users-round": UsersRound,
  "package-open": PackageOpen,
  backpack: Backpack,
  "arrow-down": ArrowDown,
  "arrow-left": ArrowLeft,
  "arrow-left-right": ArrowLeftRight,
  "arrow-right": ArrowRight,
  "book-open": BookOpen,
  bookmark: Bookmark,
  check: Check,
  "chevron-down": ChevronDown,
  "chevron-right": ChevronRight,
  "circle-help": CircleHelp,
  clock: Clock3,
  coins: Coins,
  compass: Compass,
  copy: Copy,
  egg: Egg,
  external: ExternalLink,
  flame: Flame,
  gem: Gem,
  gift: Gift,
  globe: Globe2,
  heart: Heart,
  home: Home,
  info: Info,
  layers: Layers3,
  leaf: Leaf,
  map: Map,
  menu: Menu,
  moon: Moon,
  mountain: Mountain,
  pickaxe: Pickaxe,
  search: Search,
  "scroll-text": ScrollText,
  shield: Shield,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
  sprout: Sprout,
  store: Store,
  sun: Sun,
  swords: Swords,
  target: Target,
  trophy: Trophy,
  users: Users,
  wallet: Wallet,
  x: X,
  zap: Zap,
  "paw-print": PawPrint,
  skull: Skull,
  "door-open": DoorOpen,
  briefcase: BriefcaseBusiness,
  "briefcase-business": BriefcaseBusiness,
  landmark: Landmark,
  flag: Flag,
  bell: Bell,
  link: Link,
  lock: LockKeyhole,
  "circle-dot": CircleDot,
};

export function Icon({
  name,
  size = 20,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  if (name === "pokeball")
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className={className}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h6m6 0h6" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  const Component = icons[name] ?? BookOpen;
  return (
    <Component
      size={size}
      strokeWidth={1.7}
      className={className}
      aria-hidden="true"
    />
  );
}

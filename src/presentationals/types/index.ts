import * as LucideIcons from 'lucide-react-native';
import { LucideIcon } from 'lucide-react-native';

// This helper type extracts all valid icon names from Lucide
export type IconName = {
    [K in keyof typeof LucideIcons]: (typeof LucideIcons)[K] extends LucideIcon ? K : never;
}[keyof typeof LucideIcons];

export type AlignmentType = "left" | "center" | "right";
import * as LucideIcons from 'lucide-react-native';

// Extract valid icon names - components that are functions (React components)
export type IconName = {
    [K in keyof typeof LucideIcons]: (typeof LucideIcons)[K] extends React.ComponentType<unknown> ? K : never;
}[keyof typeof LucideIcons];

export type AlignmentType = "left" | "center" | "right";
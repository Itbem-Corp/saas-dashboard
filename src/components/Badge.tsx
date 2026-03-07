type BadgeVariant = "success" | "warning" | "error" | "info" | "default";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  success: "bg-success-50 text-success-700 ring-success-600/20",
  warning: "bg-warning-50 text-warning-800 ring-warning-500/20",
  error: "bg-error-50 text-error-600 ring-error-500/20",
  info: "bg-primary-50 text-primary-700 ring-primary-600/20",
  default: "bg-gray-50 text-gray-600 ring-gray-500/20",
};

export default function Badge({ variant = "default", children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
}

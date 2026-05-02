import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

<<<<<<< HEAD
export { Skeleton };
=======
export { Skeleton };
>>>>>>> 0f2d114 (Initial vaalga)

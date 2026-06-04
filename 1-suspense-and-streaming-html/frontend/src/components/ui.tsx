"use client";

// VI: Re-export HeroUI v3 primitives qua một module client để Server Component
// có thể "import" mà không vướng directive `client-only` ở root package.
// (EN: Re-export HeroUI v3 primitives through a client module so Server
// Components can import them without tripping the package's `client-only` guard.)
export {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  Chip,
  Skeleton,
  Spinner,
} from "@heroui/react";

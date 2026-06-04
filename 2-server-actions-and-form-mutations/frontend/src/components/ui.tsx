"use client";

// VI: Re-export HeroUI v3 primitives qua module client để Server Component dùng được.
// (EN: Re-export HeroUI v3 primitives through a client module for Server Component use.)
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

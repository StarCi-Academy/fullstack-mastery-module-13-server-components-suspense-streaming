"use client";

// EN: Re-export HeroUI v3 primitives through a client module so Server Components can import them.
// PPR demo uses these for the static shell (Card/Typography/Chip) and the dynamic-hole placeholder (Skeleton).
export {
  Alert,
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
  // Re-export the Typography leaf components by name. Server Components cannot "dot into"
  // a client module (e.g. Typography.Heading), so we forward the individual named exports.
  Heading,
  Paragraph,
  ErrorMessage,
} from "@heroui/react";

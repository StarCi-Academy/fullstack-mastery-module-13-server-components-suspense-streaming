"use client";

// Re-export HeroUI v3 primitives through a client module so Server Components
// can compose them. HeroUI components are client components ("use client"), so
// a Server Component cannot import them directly.
//
// Note: in the App Router, compound components must be re-exported as their
// individual named exports (Heading, Paragraph, CardContent, ...). Accessing
// sub-members through a namespace object (Typography.Heading) across the RSC
// client boundary resolves to `undefined`, because the client reference is a
// per-export proxy and does not carry attached static members.
export {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  Chip,
  Code,
  ErrorMessage,
  Heading,
  Paragraph,
  Skeleton,
  Spinner,
  TextArea,
} from "@heroui/react";

---
to: <%= abs_path %>.stories.tsx
---
import React from "react";
import { Story, Meta } from "@storybook/react";
import { <%= name %> } from "<%= alias_path %>";

export default {
  title: "<%= path %>",
  component: <%= name %>,
  argTypes: {},
} as Meta;

export const Default: Story = () => <<%= name %>></<%= name %>>;
"use client";

import Giscus from "@giscus/react";

export default function GiscusComments() {
  return (
    <Giscus
      repo="AndyLau223/my_blog"
      repoId="R_kgDOQsEDAQ"
      category="General"
      categoryId="DIC_kwDOQsEDAc4C0CvQ"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PostImageProps {
  src: string;
  alt: string;
  slug: string;
}

export default function PostImage({ src, alt, slug }: PostImageProps) {
  const [imageSrc, setImageSrc] = useState(src || `/images/blog/${slug}.jpg`);

  return (
    <Image 
      src={imageSrc}
      alt={alt}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => {
        setImageSrc('/images/blog/default-cover.jpg');
      }}
    />
  );
}

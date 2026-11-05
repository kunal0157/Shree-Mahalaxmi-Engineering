"use client";
import { useEffect, useRef } from "react";

export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    const observeElements = () => {
      const elements = node.querySelectorAll(".reveal:not(.revealed)");
      elements.forEach((el) => observer.observe(el));
    };

    observeElements();

    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });
    mutationObserver.observe(node, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [threshold]);

  return ref;
}

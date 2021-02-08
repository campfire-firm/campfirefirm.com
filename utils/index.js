import { useEffect, useRef, useState } from "react";

export const useIntersect = ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);

  const observer = useRef(
    new window.IntersectionObserver(([entry]) => updateEntry(entry), {
      root,
      rootMargin,
      threshold
    })
  );

  useEffect(
    () => {
      const { current: currentObserver } = observer;
      currentObserver.disconnect();

      if (node) currentObserver.observe(node);

      return () => currentObserver.disconnect();
    },
    [node]
  );

  return [setNode, entry];
};

export const buildThresholdArray = (steps) => Array.from(Array(steps).keys(), i => i / steps);

export const GTMPageView = (url) => {
  const pageEvent = {
    event: 'pageview',
    page: url,
  };

  window && window.dataLayer && window.dataLayer.push(pageEvent);
  return pageEvent;
};
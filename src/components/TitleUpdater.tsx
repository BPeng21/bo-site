import { useEffect } from 'react';
import { useLocation } from 'react-router';

const titleMap = new Map<string, string>([
  ['/about', 'About Myself'],
  ['/resume', 'Resume | Bo Peng'],
  ['/blog', 'Blog | Bo Peng'],
]);

function TitleUpdater() {
  const currentPath = useLocation();

  useEffect(() => {
    document.title =
      titleMap.get(currentPath.pathname) || 'Bo Peng: My world of Web Dev';
  }, [currentPath]);

  return null;
}

export default TitleUpdater;

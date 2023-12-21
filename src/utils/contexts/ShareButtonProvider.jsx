import { createContext, useEffect, useMemo, useState } from 'react';

export const ShareButtonContext = createContext();

export default function ShareButtonProvider({ children }) {
  const [shareButtonClicked, setShareButtonClicked] = useState(false);

  const handleCopyClipBoard = async text => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      throw new Error(e);
    }
  };

  const providerValue = useMemo(
    () => ({ shareButtonClicked, setShareButtonClicked }),
    [shareButtonClicked, setShareButtonClicked],
  );

  useEffect(() => {
    if (!shareButtonClicked) return;
    handleCopyClipBoard(window.location.href);
  }, [shareButtonClicked]);

  return (
    <ShareButtonContext.Provider value={providerValue}>
      {children}
    </ShareButtonContext.Provider>
  );
}

import { createContext, useEffect, useMemo, useState } from 'react';

export const ShareButtonContext = createContext();

export default function ShareButtonProvider({ children }) {
  const [shareButtonClicked, setShareButtonClicked] = useState(false);

  const handleCopyClipBoard = async text => {
    // if (!shareIconClicked) return;
    console.log('복사');
    console.log(Location.href);
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    // handleCopyClipBoard(`${BASE_URL}${pathname}`);
    if (!shareButtonClicked) return;
    handleCopyClipBoard(Location.href);
  }, [shareButtonClicked]);

  const providerValue = useMemo(
    () => ({ shareButtonClicked, setShareButtonClicked }),
    [shareButtonClicked, setShareButtonClicked],
  );
  return (
    <ShareButtonContext.Provider value={providerValue}>
      {children}
    </ShareButtonContext.Provider>
  );
}

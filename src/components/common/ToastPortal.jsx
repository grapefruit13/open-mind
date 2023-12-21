import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

export default function ToastPortal({ children }) {
  const portalRoot = document.getElementById('portal-root');
  const toastContainer = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    portalRoot.appendChild(toastContainer);

    return () => {
      toastContainer.remove();
    };
  }, []);

  return createPortal(children, portalRoot);
}

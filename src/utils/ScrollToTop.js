import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// Hook to scroll to top when a new route s opened
const ScrollToTop = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  });

  return null;
};

export default withRouter(ScrollToTop);

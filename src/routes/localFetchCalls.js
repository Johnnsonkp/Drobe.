export const fetchData = (location) => {
  const pageContentFetchCalls = () => {
    return (async () => {
      const res = await fetch("homeSections.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      return await res.json();
    })();
  };

  switch (location) {
    case "/":
      if (window.location.pathname === location) {
        return pageContentFetchCalls();
      }
      break;
    case "/c/":
      window.location.pathname === location && alert("Welcome c");
      break;
    default:
      return null;
  }
};

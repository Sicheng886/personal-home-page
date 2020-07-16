const isMobile = () => {
  return /iphone|ipod|ipad|android|adr/g.test(
    navigator.userAgent.toLowerCase()
  );
};

export default isMobile;

export const routeParamFactory = (routeName) => {
  return {
    params: {
      episode: routeName,
    },
  };
};

export const createDynamicRoutesFromStrings = (routes) => {
  return routes.map(routeParamFactory);
};

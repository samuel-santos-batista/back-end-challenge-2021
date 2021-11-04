export const mongooseHelper = {
  map: (collection: any): any => {
    const { _id, ...collectionWithoutId } = collection;
    return { ...collectionWithoutId, id: _id };
  },
};

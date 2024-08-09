export const sortByDescription = (items) => {
    return items.sort((a, b) => {
      if (a.todo < b.todo) return -1;
      if (a.todo > b.todo) return 1;
      return 0;
    });
  };
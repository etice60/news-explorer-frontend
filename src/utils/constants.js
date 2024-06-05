export const APIKey = "a078533b2fae4c8486fed26f87cb05a1";

const currentDate = new Date();

export const parseCurrentDate =
  currentDate.getFullYear() +
  "-" +
  (currentDate.getMonth() + 1).toString().padStart(2, "0") +
  "-" +
  currentDate.getDate().toString().padStart(2, "0");

const previousWeek = new Date();
previousWeek.setDate(currentDate.getDate() - 7);

export const parsePreviousWeek =
  previousWeek.getFullYear() +
  "-" +
  (previousWeek.getMonth() + 1).toString().padStart(2, "0") +
  "-" +
  previousWeek.getDate().toString().padStart(2, "0");

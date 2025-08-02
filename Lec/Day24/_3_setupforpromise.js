function saveDb(data, sucess, failure) {
  let internetspeed = Math.floor(Math.random() * 10) + 1;
  if (internetspeed > 4) {
    sucess();
  } else {
    failure();
  }
}

saveDb(
  "riyan",
  () => {
    console.log("your data is stored");
    saveDb(
      "sucess2",
      () => {
        console.log("again second time sucess");
        saveDb(
          "3rd iteration",
          () => {
            console.log("third time sucess boe");
          },
          () => {
            console.log("cooked on third try");
          }
        );
      },
      () => {
        console.log("failure 2nd");
      }
    );
  },
  () => {
    console.log("your data didnt store idk why nigga");
  }
);

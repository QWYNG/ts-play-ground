function foo(arg: string | null | undefined) {
  if (arg != undefined) {
    console.log("reach!");

    console.log(arg);
  }
}

foo(null); //何も表示されない

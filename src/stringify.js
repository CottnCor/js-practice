console.log(
  JSON.stringify(
    { name: "aaa", age: 13, sex: undefined, null: null },
    (key, value) => (value ? value : "")
  )
);

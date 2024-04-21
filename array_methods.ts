console.clear();
const test_data = [
  {
    name: "user_1",
    id: "1",
    subject: "xxx",
  },
  {
    name: "user_2",
    id: "2",
    subject: "ccc",
  },
  {
    name: "user_3",
    id: "3",
    subject: "xxx",
  },
  {
    name: "user_4",
    id: "4",
    subject: "xxx",
  },
];

const show_how_filter_works = (data: any, _id: string) => {
  const result = data.filter(
    (user_object_to_be_returned) => user_object_to_be_returned.id == _id,
  );
  return result;
};

const show_how_filter_works_2 = (data: any, filter_value: string) => {
  const result = data.filter(
    (users_to_be_returned) => users_to_be_returned.subject == filter_value,
  );

  return result;
};

const show_how_map_works_1 = (test_data) => {
  return test_data.map((x) => x.subject);
};

// console.log('return a user object',show_how_filter_works(test_data, "3"));
// console.log('return an array of users ',show_how_filter_works_2(test_data, 'xxx'))
// console.log('return a new array based on a result',show_how_map_works_1(test_data));

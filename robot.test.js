const {newRobot, station, isWorkday, prioritizeTasks}  = require("./robot.js");

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
  // arrange
  const robo1 = newRobot(true, true, false);
  // act
  const result = station(robo1);
  // assert
  expect(result).toBe(1);
});

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
  // arrange
  const robo2 = newRobot(true, false, true);
  // act
  const result2 = station(robo2);
  // assert
  expect(result2).toBe(2);
});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  // arrange
  const robo3 = newRobot(true, false, false);
  // act
  const result3 = station(robo3);
  // assert
  expect(result3).toBe(3);
});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {
  // arrange
  const robo4 = newRobot(false, false, false);
  // act
  const result4 = station(robo4);
  // assert
  expect(result4).toBe(4);
});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  // arrange
  const robo5 = newRobot(true, false, false);
  // act
  const result5 = prioritizeTasks(robo5);
  // assert
  expect(result5).toBe(-1);
});

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  // arrange
  const robo6 = newRobot(true, false, false);
  robo6.todos[0] = 1;
  robo6.todos[1] = 2;
  // act
  const result6 = prioritizeTasks(robo6);
  // assert
  expect(result6).toBe(Math.max(...robo6.todos));
});

test('test_workday_on_day_off_returns_false', () => {
  // arrange
  const robo7 = newRobot(true, false, false);
  robo7.dayOff = 'Tuesday';
  today = 'Tuesday';
  // act
  const result7 = isWorkday(robo7, today );
  // assert
  expect(result7).toBe(false);
});

test('test_workday_not_day_off_returns_true', () => {
  // arrange
  const robo7 = newRobot(true, false, false);
  robo7.dayOff = 'Wednesday';
  today = 'Tuesday';
  // act
  const result7 = isWorkday(robo7, today );
  // assert
  expect(result7).toBe(true);
});

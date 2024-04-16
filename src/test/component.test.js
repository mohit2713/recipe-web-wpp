import React from "react";
import renderer from "react-test-renderer";
import HomeL from "../Autentication/HomeL";

test("renders correctly", () => {
  const component = renderer.create(<HomeL />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
